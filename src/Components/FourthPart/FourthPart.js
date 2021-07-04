import React from 'react';
import angle from '../../image/triangle.png';
import sidearro from '../../image/sidearro.png';
import downarrow from '../../image/downarro.png';
import lavel from '../../image/lavel.png';
import { Container, Row, Col } from 'react-bootstrap';
import './FourthPart.css';
import { useState } from 'react';

const FourthPart = () => {
    const [show, setShow] = useState(false);
    const [read, setRead] = useState(false);
    const [reading, setReading] = useState(false);

    return (
        <Container>
            <Row>
                <Col xs ={12} md={9}>
                    <div className="d-flex mt-4">
                        <div><img style={{width: '40px', marginRight: '13px'}} src={angle} alt="angle" /></div>
                        <div><h5 style={{fontWeight: 'bold'}}>Kudremukh Trek Itinerary </h5></div>
                    </div>
                    <div style={{display: 'flex', marginTop: '20px', alignItems: 'center', marginLeft: '25px'}}>
                        <div><h6 style={{border: '1px solid gray', borderRadius: '50px', padding: '7px', marginRight: '20px'}}>Day 1</h6></div>
                        <div><h5>Lorem ipsum dolor</h5></div>
                    </div>
                    <div className="d-flex mt-2">
                        <div><img style={{width: '30px', marginRight: '20px'}} src={sidearro} alt="sideArrow" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor lorem ipsum dolor sit amet, consectetur adipiscing </h5></div>
                    </div>
                    <div style={{display: 'flex', marginTop: '20px', alignItems: 'center', marginLeft: '25px'}}>
                        <div><h6 style={{border: '1px solid gray', borderRadius: '50px', padding: '7px', marginRight: '20px'}}>Day 2</h6></div>
                        <div className="mr-auto"><h5>Lorem ipsum dolor</h5></div>
                        <div className="mb-2"><img style={{width: '35px'}}src={downarrow} alt="aro" /></div>
                    </div>

                    <div>
                        {
                            show ? <p className="ml-4">Lorem ipsum dolor sit amet, consectet adip inc sed do eiusmod tempor inc nibh diam sed do eiusmod tempor inc nibh diam eiusmod tempor inc nibh diam eiusmod tempor inc nibh diam</p> : null
                        }
                    <div className="text-center">
                    <button onClick={() => setShow(!show)} style={{backgroundColor: 'white', border: 'none', color: 'red'}}>
                        {
                            show ? 'read less' : 'read more'
                        }
                    </button>
                    </div>
                    </div>

                    <div className="d-flex mt-3">
                        <div><img style={{width: '40px', marginRight: '13px'}} src={angle} alt="angle" /></div>
                        <div><h5 style={{fontWeight: 'bold'}}>Kudremukh Trek Itinerary </h5></div>
                    </div>
                    <div style={{marginLeft: '50px', fontWeight: '500'}}><p >Know Before You Go for Nag Tibba Trek</p></div>
                    <div className="d-flex mt-2">
                        <div><img style={{width: '30px', marginRight: '20px'}} src={sidearro} alt="sideArrow" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5></div>
                    </div>

                    <div>
                        {
                            read ? <p className="ml-4">Lorem ipsum dolor sit amet, consectet adip inc sed do eiusmod tempor inc nibh diam sed do eiusmod tempor inc nibh diam eiusmod tempor inc nibh diam eiusmod tempor inc nibh diam</p> : null
                        }
                    <div className="text-center">
                    <button onClick={() => setRead(!read)} style={{backgroundColor: 'white', border: 'none', color: 'red'}}>
                        {
                            read ? 'read less' : 'read more'
                        }
                    </button>
                    </div>
                    </div>

                    <div style={{marginLeft: '50px', fontWeight: '500'}}><p >Things To Carry for Nag Tibba Trek</p></div>
                    <div className="d-flex mt-2">
                        <div><img style={{width: '30px', marginRight: '20px'}} src={sidearro} alt="sideArrow" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor</h5></div>
                    </div>
                    <div className="d-flex mt-2">
                        <div><img style={{width: '30px', marginRight: '20px'}} src={sidearro} alt="sideArrow" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor</h5></div>
                    </div>

                    <div>
                        {
                            reading ? <p className="ml-4">Lorem ipsum dolor sit amet, consectet adip inc sed do eiusmod tempor inc nibh diam sed do eiusmod tempor inc nibh diam eiusmod tempor inc nibh diam eiusmod tempor inc nibh diam</p> : null
                        }
                    <div className="text-center">
                    <button onClick={() => setReading(!reading)} style={{backgroundColor: 'white', border: 'none', color: 'red'}}>
                        {
                            reading ? 'read less' : 'read more'
                        }
                    </button>
                    </div>
                    </div>

                    <div className="text-center">
                        <h5>Tour Difficulty for Nag Tibba Trek</h5>
                        <img className="level" src={lavel} alt="level" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FourthPart;