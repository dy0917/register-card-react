import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {ICard} from 'Types';
import DatePicker from "react-datepicker";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from 'store'
import { fetchUserById, addCard } from '../Redux/userSlice'


const schema = yup.object({
    accountNumber: yup.string().required(),
    cvc: yup.string().required(),
    expiry: yup.string().required(),
}).required();

function Card() {
    const user = useSelector((state: RootState) => {
        return state.user.user
    })
    const card = useSelector((state: RootState) => {
        return state.user.card
    })
    const dispatch = useDispatch()


    const { register, handleSubmit, watch, control, formState: { errors } } = useForm<ICard>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<ICard> = async data => {
        await dispatch(addCard(data));
    };
    return (
        <div className="container">
            <div className="row">
 <div className='col-4 offset-md-4'>
                <div className="row mb-5">
                    <div className="col-md-auto">Welcome {user.name}</div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={"row justify-content-md-center mb-2"}>
                        <input type="number" placeholder='Credit card number'
                            aria-label="Credit card number"
                            aria-required="true"
                            className={"form-control " + (errors.accountNumber ? 'is-invalid' : '')} {...register("accountNumber", { required: true })} />
                    </div>
                    <div className="row mb-2" >
                        <div className="col-md-4 offset-md-4" >
                            <input placeholder='CVC'
                                aria-label="Credit card CVC"
                                aria-required="true"
                                className={"form-control " + (errors.cvc ? 'is-invalid' : '')}
                                type="number" {...register("cvc", { required: true })} />
                        </div>
                        <div className="col pe-0" >
                            <Controller
                                name="expiry"
                                control={control}
                                render={({ field }) =>
                                    <DatePicker selected={field.value}
                                        placeholderText="Expiry"
                                        className={"form-control " + (errors.expiry ? 'is-invalid' : '')} onChange={(date: Date) => field.onChange(date)}
                                        showMonthYearPicker
                                        dateFormat="MM/yy"
                                    />}
                            />
                        </div>
                    </div>

                    <div className="row mb-2" >
                    {card && <div>Card added</div>}
                    </div>
                    <div className="row justify-content-md-end mb-2">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            </div>
           
        </div>
    )
}

export default Card;