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
                <div className="mt-3"><h4>Booking Summary</h4></div>
                <div className="mainContainer mt-3">
                    <div className="leftBox">
                        <div>
                        <p style={{fontWeight: '400'}}>Traveler Name</p>
                        <p style={{fontWeight: '400'}}>{flowData.name}</p>
                        </div>

                        <div className="mt-4">
                        <p style={{fontWeight: '400'}} className="mt-3">Email</p>
                        <p style={{fontWeight: '400'}}>{flowData.email}</p>
                        </div>
                       
                        <div className="mt-4">
                        <p style={{fontWeight: '400'}} className="mt-3">Tour Name</p>
                        <p style={{fontWeight: '400'}}>{flowData.title}</p>
                        </div>
                       
                    </div>
                    <div className="rightBox">
                        <div>
                        <p style={{fontWeight: '400'}}>Phone Number</p>
                        <p style={{fontWeight: '400'}}>{flowData.number}</p>
                        </div>
                       
                        <div className="mt-4">
                        <p style={{fontWeight: '400'}} className="mt-3">Variant</p>
                        <p style={{fontWeight: '400'}}>{flowData.variant}</p>
                        </div>
                       
                       <div className="mt-4">
                       <p style={{fontWeight: '400'}} className="mt-3">Date</p>
                        <p style={{fontWeight: '400'}}>{flowData.date}</p>
                       </div>
                        
                    </div>
                </div>
                <div style={{borderBottom: '1px solid black', marginTop: '20px', marginBottom: '20px'}}></div>
                <div><h5>Price</h5></div>
                    <div className="priceFirst mt-3">
                        <div>
                            <p style={{fontWeight: '400'}}>Adult</p>
                        </div>
                        <div>
                            <p style={{fontWeight: '400'}}>${flowData.price} * {flowData.person}</p>
                        </div>
                        <div>
                            <p style={{fontWeight: '400'}}>${total}</p>
                        </div>
                    </div>
                    <div className="priceSec">
                        <div className="mt-3">
                            <p style={{fontWeight: '400'}}>Convenience <br/> fee & Taxes</p>
                        </div>
                        <div className="convenience">
                            <p style={{fontWeight: '400'}}>${convenience} * {flowData.person}</p>
                        </div>
                        <div>
                            <p style={{fontWeight: '400'}}>${totalConvenience}</p>
                        </div>
                    </div>
                    <div className="priceFirst">
                        <div>
                            
                        </div>
                        <div className="total">
                            <p style={{fontWeight: '400'}}>total</p>
                        </div>
                        <div>
                            <p style={{fontWeight: '400'}}>${totalCost}</p>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex">
                            <div className="mr-4 mt-1">
                            <input type="checkbox" id="agree" onChange={checkboxHandler} />
                            </div>
                            <div>
                            <label htmlFor="agree"> <p style={{fontWeight: '400'}}> lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </p></label>
                            </div>
                        </div>
                        <div className="text-center mb-4">
                            <button disabled={!agree} onClick={btnHandler}>Process to Payment</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BookingDetails;