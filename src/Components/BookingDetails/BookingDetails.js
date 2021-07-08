import React from 'react';
import './BookingDetails.css';
import { useContext } from 'react';
import { UserContext } from './../../App';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BookingDetails = () => {
    const [ flowData ] = useContext(UserContext);
    const [agree, setAgree] = useState(false);
    const history = useHistory();

    const checkboxHandler = () => {
        setAgree(!agree);
        
      }

      const btnHandler = () => {
        history.push("/success");
      }; 

    console.log(flowData);
    const newPrice = flowData.price;
    const newPerson = flowData.person;

    const total = newPrice * newPerson;

    let convenience = 50;

    const totalConvenience = convenience * newPerson;
    const totalCost = total + totalConvenience;


    return (
        <Container>
            <Row>
                <Col xs ={12} md={6}>
                <div><h5>Booking Summary</h5></div>
                <div className="mainContainer">
                    <div className="leftBox">
                        <h6>Traveler Name</h6>
                        <h6>{flowData.name}</h6>
                        <br/>
                        <h6 className="">Phone Number</h6>
                        <h6>{flowData.number}</h6>
                        <br/>
                        <h6>Tour Name</h6>
                        <h6>{flowData.title}</h6>
                    </div>
                    <div className="rightBox">
                        <h6>Email</h6>
                        <h6>{flowData.email}</h6>
                        <br/>
                        <h6>date</h6>
                        <h6>{flowData.date}</h6>
                        <br/>
                        <h6>Variant</h6>
                        <h6>{flowData.variant}</h6>
                    </div>
                </div>

                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                <div><h5>Price</h5></div>
                    <div className="priceFirst">
                        <div>
                            <h6>Adult</h6>
                        </div>
                        <div>
                            <h6>${flowData.price} * {flowData.person}</h6>
                        </div>
                        <div>
                            <h6>${total}</h6>
                        </div>
                    </div>
                    <div className="priceSec">
                        <div>
                            <h6>Convenience <br/> fee & Taxes</h6>
                        </div>
                        <div className="convenience">
                            <h6>${convenience} * {flowData.person}</h6>
                        </div>
                        <div>
                            <h6>${totalConvenience}</h6>
                        </div>
                    </div>
                    <div className="priceFirst">
                        <div>
                            
                        </div>
                        <div className="total">
                            <h6>total</h6>
                        </div>
                        <div>
                            <h6>${totalCost}</h6>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <div className="mr-4">
                            <input type="checkbox" id="agree" onChange={checkboxHandler} />
                            </div>
                            <div>
                            <label htmlFor="agree">lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing lorem </label>
                            </div>
                        </div>
                        <div className="text-center">
                            <button disabled={!agree} onClick={btnHandler}>Process to Payment</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BookingDetails;