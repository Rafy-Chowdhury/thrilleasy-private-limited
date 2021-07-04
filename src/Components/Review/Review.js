import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import angle from '../../image/triangle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Review = () => {
    const [show, setShow] = useState(false);

    return (
       <Container>
           <Row>
               <Col xs ={12} md={9}>
                    <div className="d-flex mt-2">
                        <div><img style={{width: '40px', marginRight: '13px'}} src={angle} alt="angle" /></div>
                        <div><h5 style={{fontWeight: 'bold'}}>Top Reviews</h5></div>
                    </div>
                    <div className="text-center mt-2">
                        <h5 style={{fontWeight: '200'}}>Name</h5>
                        <h5 style={{fontWeight: '200'}}>Date</h5>
                    </div>
                    <div className="ml-4 mt-4">
                    <FontAwesomeIcon style={{color: '#ebcf34'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#ebcf34'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#ebcf34'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#ebcf34'}} icon={faStar} />
                    <FontAwesomeIcon style={{color: '#ebcf34'}} icon={faStar} />
                    <h5 style={{fontWeight: '200'}}>Lorem ipsum dolor sit amet, consectetur adip inc sed do eiusmod tempor inc nibh diam lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit dolor</h5>
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
               </Col>
           </Row>
       </Container>
    );
};

export default Review;