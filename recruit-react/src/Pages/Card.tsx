import { Container, Row, Col } from 'react-bootstrap';
import Burger from "../Components/Nav/BurgerNav";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { IUser, IStudent } from 'types';
import React, { forwardRef } from "react";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Inputs = {
    accountNumber: string,
    cvc: string,
    expiry: Date
};

const schema = yup.object({
    accountNumber: yup.string().required(),
    cvc: yup.string().required(),
    expiry: yup.string().required(),
  }).required();

function Card(props: IUser) {

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<Inputs> = data => 
    {        
        console.log(data);
    };
    return (
        <div>
            <Burger></Burger>
            <Container className='col-4'>
                <Row className="mb-5">
                    <Col md="auto">Welcome {props.name}</Col>
                </Row>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className={"justify-content-md-center mb-2"}>
                        <input type="number" placeholder='Credit card number'
                          aria-label="Credit card number"
                          aria-required="true"
                         className={"form-control "+ (errors.accountNumber ? 'is-invalid' : '')} {...register("accountNumber", { required: true })} />
                                          </Row>
                    <Row className="mb-2" >
                        <Col md={{ span: 4, offset: 4 }}>
                            <input placeholder='CVC'
                               aria-label="Credit card CVC"
                               aria-required="true"
                            className={"form-control "+ (errors.cvc ? 'is-invalid' : '')} 
                             type="number" {...register("cvc", { required: true })} />
                        </Col>
                        <Col className="pe-0" >
                            <Controller
                                name="expiry"
                                control={control}
                                render={({ field }) =>
                                    <DatePicker selected={field.value}
                                    placeholderText="Expiry"
                                     className={"form-control "+ (errors.expiry ? 'is-invalid' : '')} onChange={(date: Date) => field.onChange(date)}
                                        showMonthYearPicker
                                        dateFormat="MM/yy"
                                    />}
                                    
                            />
                        </Col>

                    </Row>
                    
                    <Row className="justify-content-md-end mb-2">
                            <input type="submit" value="Submit" />
                        </Row>
                </form>
            </Container>
        </div>
    )
}

export default Card;