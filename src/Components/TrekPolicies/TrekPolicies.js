import React, {useState} from 'react';
import angle from '../../image/triangle.png';
import sidearro from '../../image/sidearro.png';
import { Container, Row, Col } from 'react-bootstrap';

const TrekPolicies = () => {
    const [ reading, setReading ] = useState(false);
    return (
        <Container>
            <Row>
                <Col xs ={12} md={9}>
                <div className="d-flex mt-4">
                        <div className="mr-2">
                            <img style={{width: '40px'}} src={angle} alt="angle" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: 'bold'}}> Nag Tibba Trek Policies </h5>
                        </div>
                    </div>
                    <div className="mt-2 ml-5"><h5>Confirmation Policy</h5></div>
                    <div className="d-flex mt-3">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
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
                    <div className="d-flex mt-2">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
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
                    <div className="d-flex mt-2">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor </h5>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <div className="mr-2">
                            <img style={{width: '40px'}} src={angle} alt="angle" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: 'bold'}}> Nag Tibba Trek FAQs </h5>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '400'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit? </h5>
                        </div>
                    </div>
                    <div className="ml-5 mt-2"><h5 style={{fontWeight: '200'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore</h5></div>
                    <div className="d-flex mt-3">
                        <div className="mr-3">
                            <img style={{width: '30px'}} src={sidearro} alt="arrow" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: '400'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit? </h5>
                        </div>
                    </div>
                    <div className="ml-5 mt-2"><h5 style={{fontWeight: '200'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore</h5></div>

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

                    <div className="text-center mt-3"><h4 style={{fontWeight: 'bold'}}>Write Review for this Activity</h4></div>
                    <div className="text-center mt-4"><h5><span style={{color: 'blue', fontWeight: ''}}>Submit</span> a review here</h5></div>
                </Col>
            </Row>
        </Container>
    );
};

export default TrekPolicies;