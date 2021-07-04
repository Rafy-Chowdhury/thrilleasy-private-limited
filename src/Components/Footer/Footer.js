import React from 'react';
import { Col, Container, Row, InputGroup, FormControl } from 'react-bootstrap';
import fb from '../../image/fb.jpg';
import tw from '../../image/tw.png';
import ins from '../../image/instra.jpg';
import pri from '../../image/pri.png';
import yt from '../../image/yt.jpg';

const Footer = () => {
    return (
    <div style={{backgroundColor: 'black', marginTop: '50px'}}>
        <Container className="p-4">
            <Row style={{color: 'white'}}>
                <Col className="mb-3" xs ={12} md={3}>
                    <h5 className="mb-4">FOR SUPPLIERS AND BRANDS </h5>
                    <p>List your activities</p>
                    <p>Partner with us</p>
                    <p>Advertise with us</p>
                </Col>
                <Col className="mb-3" xs ={12} md={3}>
                    <h5 className="mb-4">ABOUT THRILLEASY</h5>
                    <p>About us</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy policies</p>
                    <p>Copyright policies</p>
                    <p>Careers</p>
                </Col>
                <Col className="mb-3" xs ={12} md={3}>
                    <h5 className="mb-4">CUSTOMER SUPPORT</h5>
                    <p>Support</p>
                    <p>FAQs</p>
                    <p>Thrilleasy guarantee</p>
                </Col>
                <Col xs ={12} md={3}>
                    <h5 className="mb-4">NEWSLETTER</h5>
                    <div>
                    <InputGroup className="mb-3">
                    <FormControl style={{border: '2px solid white'}}
                    placeholder="Enter your email"/>
    
                    <button style={{border: 'none', borderRadius: '0 4px 4px 0'}}>
                    Go
                    </button>
                    </InputGroup>
                    </div>
                    <div>
                       <img className="mr-3" style={{width: '15px'}} src={fb} alt="facebook" />
                       <img className="mr-3" style={{width: '25px'}} src={tw} alt="" />
                       <img className="mr-3" style={{width: '30px'}} src={ins} alt="" />
                       <img className="mr-3" style={{width: '22px'}} src={pri} alt="" />
                       <img className="" style={{width: '90px', height: '30px'}} src={yt} alt="" />
                    </div>
                </Col>
            </Row>
            <Row className="mt-5" style={{color: 'white'}}>
                <Col xs ={12} md={12}>
                    <p>&copy; 2021 Thrilleasy.com All right reserved.</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Footer;