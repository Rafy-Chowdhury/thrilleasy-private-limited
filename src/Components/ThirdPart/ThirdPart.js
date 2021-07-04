import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import angle from '../../image/triangle.png';
import sidearro from '../../image/sidearro.png';

const ThirdPart = () => {
    return (
        <Container>
            <Row>
                <Col xs ={12} md={9}>
                    <div className="d-flex mt-4">
                    <div className="mr-2">
                            <img style={{width: '40px'}} src={angle} alt="angle" />
                        </div>
                        <div>
                        <h5 style={{fontWeight: 'bold'}}>Camping in Jaisalmer with Jeep Safari Overview </h5>
                        </div>
                    </div>
                    <div style={{marginLeft: '50px', marginTop: '10px'}}>
                        <h5><u>Activity Location:</u></h5>
                        <h5><u>Check-in time:</u></h5>
                        <h5><u>Check-out time:</u></h5>
                        <h5 style={{fontWeight: '200', marginTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol</h5>
                        <div className="mt-3">
                            <h5><u>Activity Location:</u></h5>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div>
                            <img style={{width: '30px', marginRight: '20px'}} src={sidearro} alt="sideArrow" />
                        </div>
                        <div>
                        <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default ThirdPart;