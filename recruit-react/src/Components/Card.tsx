import { Container, Row, Col } from 'react-bootstrap';
import Burger from "./Nav/Burger";
import { useForm, SubmitHandler , Controller} from "react-hook-form";
import DatePicker from "react-datepicker";
import {IUser, IStudent} from 'types';
import React, { useState, forwardRef } from "react";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

type Inputs = {
    accountNumber: string,
    cvc: string,
    expiry: string
  };

function Card(props: IUser) {

    const [startDate, setStartDate] = useState(new Date());
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    const ExampleCustomInput = forwardRef(({ value, onClick }:{value:any, onClick:any}, ref:any) => (
        <div className="custom-date-input" onClick={onClick} ref={ref}>
          {value}
        </div>
      ));
    return (
        <div>
            <Burger></Burger>
            <Container className='col-4'>
                <Row className="justify-content-md-center mb-5">
                    <Col md="auto">Welcome {props.name}</Col>
                </Row>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="justify-content-md-center mb-2">
                    <input type="number" {...register("accountNumber")} />
                </Row>
                <Row >
            
                <Col md={{ span: 4, offset: 4 }}>
                <input className='col-12' type="number" {...register("cvc")}/>
                </Col>

                <Col md={{ span: 4 }}>
                <DatePicker selected={startDate} className="col-4" onChange={(date:any) => setStartDate(date)}
                     showMonthYearPicker
                     dateFormat="MM/yy"
                          customInput={<ExampleCustomInput value={startDate}  onClick={()=>{}} />}
                />
                </Col>
          
                

  

         
                  
               
                </Row>
                </form>
            </Container>
        </div>
    )
}

export default Card;