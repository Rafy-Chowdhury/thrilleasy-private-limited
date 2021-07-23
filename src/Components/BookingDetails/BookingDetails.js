import React from 'react';
import './BookingDetails.css';
import { useContext } from 'react';
import { UserContext } from './../../App';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Headers from '../Headers/Headers';
import Footer from '../Footer/Footer';
import angle from '../../image/triangle.png';
import sidearro from '../../image/sidearro.png';

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
        <div>
            <div className="hiding"> <Headers  /> </div>
            
        <Container>
            <Row>
                <Col xs ={12} md={6}>
                <div>  
                <div className="mt-3"><h5>Booking Summary</h5></div>
                <div className="mainContainer mt-3">
                    <div className="leftBox">
                        <div>
                        <p style={{fontWeight: 'bold'}}>Traveler Name</p>
                        <p style={{fontWeight: '400'}}>{flowData.name}</p>
                        </div>

                        <div className="mt-4">
                        <p style={{fontWeight: 'bold'}} className="mt-3">Email</p>
                        <p style={{fontWeight: '400'}}>{flowData.email}</p>
                        </div>
                       
                        <div className="mt-4">
                        <p style={{fontWeight: 'bold'}} className="mt-3">Tour Name</p>
                        <p style={{fontWeight: '400'}}>{flowData.title}</p>
                        </div>
                       
                    </div>
                    <div className="rightBox">
                        <div>
                        <p style={{fontWeight: 'bold'}}>Phone Number</p>
                        <p style={{fontWeight: '400'}}>{flowData.number}</p>
                        </div>
                       
                        <div className="mt-4">
                        <p style={{fontWeight: 'bold'}} className="mt-3">Variant</p>
                        <p style={{fontWeight: '400'}}>{flowData.variant}</p>
                        </div>
                       
                       <div className="mt-4">
                       <p style={{fontWeight: 'bold'}} className="mt-3">Date</p>
                        <p style={{fontWeight: '400'}}>{flowData.date}</p>
                       </div>
                        
                    </div>
                </div>
                <div style={{borderBottom: '1px solid black', marginTop: '20px', marginBottom: '20px'}}></div>
                <div><h5>Price</h5></div>
                    <div className="priceFirst mt-3">
                        <div>
                            <p style={{fontWeight: 'bold'}}>Adult</p>
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
                            <p style={{fontWeight: 'bold'}}>Convenience <br/> fee & Taxes</p>
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
                        <div className="text-center">
                            <button disabled={!agree} onClick={btnHandler}>Process to Payment</button>
                        </div>
                    </div>
                    </div>  
                </Col>
                <Col md={6}>
                <div className="hiding">  
                <div className="d-flex mt-4">
                        <div className="mr-2">
                            <img style={{width: '40px'}} src={angle} alt="angle" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: 'bold'}}> {flowData.title} tour Highlight </h5>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
                        </div>
                    </div>
                    <div className="d-flex mt-1">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
                        </div>
                    </div>
                    <div className="d-flex mt-1">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
                        </div>
                    </div>
                    <div className="d-flex mt-1">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
                        </div>
                    </div>
                    <div className="d-flex mt-1">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
                        </div>
                    </div>
                    </div>  
                </Col>
            </Row>
        </Container>
        <div className="hiding">
        <Footer/>
        </div>
        </div>
    );
};

export default BookingDetails;