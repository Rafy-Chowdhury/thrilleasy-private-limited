import React from 'react';
import './TopBanner.css';
import { Row, Col, Carousel } from 'react-bootstrap';
import boat from '../../image/boat.jpg';
import star from '../../image/star.png';
import time from '../../image/time.png';
import location from '../../image/location.png';
import car from '../../image/car.png';
import meals from '../../image/meals.png';
import cash from '../../image/cash.png';
import guide from '../../image/guide.png';
import p1 from '../../image/p1.jpg';
import p2 from '../../image/p2.jpg';
import { Link } from 'react-scroll';
import { useHistory } from 'react-router-dom';

const TopBanner = () => {
    const history = useHistory();
    const handleEnq = () => {
        history.push('/enquiry');
    }
    return (
        <div className='all-div'>
           <Row>
               <Col xs ={12} md={8}>
                    <div className="d-flex">
                        <div className="left-img">
                        <Carousel fade>
                        <Carousel.Item>
                            <img className="left-img" src={boat}alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="left-img" src={p1}
                            alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="left-img" src={p2}
                            alt="Third slide"/>
                        </Carousel.Item>
                        </Carousel>   

                        </div>
                        <div className="hidden-part">
                        <img className="small-image" style={{width: '150px', marginLeft: ''}} src={boat} alt={boat} />
                    <br />
                    <img className="small-image" style={{width: '150px'}} src={boat} alt={boat} />
                    <br />
                    <img className="small-image" style={{width: '150px'}} src={boat} alt={boat} />
                    <br />
                    <img className="small-image" style={{width: '150px'}} src={boat} alt={boat} />
                    <br />
                    <img className="small-image" style={{width: '150px'}} src={boat} alt={boat} />
                        </div>
                    </div>

                    
               </Col>
               <Col className="all-width" xs={12} md={4}>
               <div className="right-part">    
               <div className=""><span className="text">River Rafting on Indus River</span></div>
               <div className="">
               <div className="icons">
                   <img className="star" src={star} alt="star"></img>
                   <img className="hour" src={time} alt="hour"></img>
                   <img className="location" src={location} alt="location"></img>
               </div>
               <div className="text-part">
                   <p className="p-tag">Starting from <del>INR 199,900</del></p>
                   <h1>INR 13800</h1>
                   <h2>Per Adult</h2>
               </div>


               <div className="text-center mt-3 batonHiding">
                  <div style={{width: '48%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                       <button onClick={handleEnq} style={{width: '100%', backgroundColor: 'crimson', border: '1px solid crimson', fontSize: '20px', fontWeight: 'bold'}}>Send Enquiry</button>
                   </div>
                   <div style={{width: '48%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                       <Link className="button" to="package" smooth={true} duration={1000}><button style={{width: '100%', backgroundColor: '#fcc52d', border: '2px solid #fcc52d', fontSize: '20px', fontWeight: 'bold'}}>BOOK NOW</button></Link>
                   </div>
               </div>


               <div className="all-icon">
               <div className="icon-part">
                   <div> <img style={{width: '70px'}} src={car} alt="car" /></div>
                   <div> <img style={{width: '70px'}} src={meals} alt="car" /></div>
                   <div> <img style={{width: '90px'}} src={cash} alt="car" /></div>
                   <div> <img style={{width: '80px'}} src={guide} alt="car" /></div>
               </div>
               <div className="icon-part">
                   <div> <img style={{width: '70px'}} src={car} alt="car" /></div>
                   <div> <img style={{width: '70px'}} src={meals} alt="car" /></div>
                   <div> <img style={{width: '90px'}} src={cash} alt="car" /></div>
                   <div> <img style={{width: '80px'}} src={guide} alt="car" /></div>
               </div>
               </div>
               </div>
               </div>
               </Col>
           </Row>
           
        </div>
    );
};

export default TopBanner;