import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import angle from '../../image/triangle.png';
import moon from '../../image/moon.png';
import sun from '../../image/sun.png';

const Package = () => {
    return (
        <Container className="mb-4" id="package">
            <div className="d-flex mt-4">
                        <div><img style={{width: '40px', marginRight: '13px'}} src={angle} alt="angle" /></div>
                        <div><h4 style={{fontWeight: 'bold'}}>Select Package Option</h4></div>
            </div>
            <Row>
                <Col className="" xs={12} md={8}>
                    
            <div style={{width: 'auto', height: 'auto', border: '1px solid gray',borderRadius: '20px',padding: '10px', marginTop: '25px'}}>
                <div style={{border: '2px solid black', borderRadius: '90px', padding: '4px', display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <div style={{width: 'auto', height: 'auto', marginRight: '15px'}}>
                    <div className="text-center"><input  style={{width: '25px', height: '25px'}} type="radio" name="check"  value=""  /></div>
                    </div>
                    <div className="mr-auto">
                        <h6>Treck from Pantwari</h6>
                        <p><img style={{width: '35px'}} src={sun} alt="img" /> 3 Days</p>
                        <p><img style={{width: '40px'}} src={moon} alt="img" />2 Nights</p>
                    </div>
                    <div className="mr-2">
                        <p><del>INR 1,599</del></p>
                        <h5>INR 1,399 <br/> per Adult</h5>
                    </div>
                </div>
                <div style={{border: '2px solid black', borderRadius: '90px', padding: '4px', display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                <div style={{width: 'auto', height: 'auto', marginRight: '15px'}}>
                    <div className="text-center"><input  style={{width: '25px', height: '25px'}} type="radio" name="check"  value=""  /></div>
                    </div>
                    <div className="mr-auto">
                        <h6>Treck from Dehradun</h6>
                        <p><img style={{width: '35px'}} src={sun} alt="img" />3 Days</p>
                        <p><img style={{width: '40px'}} src={moon} alt="img" />2 Nights</p>
                    </div>
                    <div className="mr-2">
                        <p><del>INR 1,599</del></p>
                        <h5>INR 1,399 <br/> per Adult</h5>
                    </div>
                </div>
                <div style={{border: '2px solid black', borderRadius: '90px', padding: '4px', display: 'flex', alignItems: 'center'}}>
                <div style={{width: 'auto', height: 'auto', marginRight: '15px'}}>
                    <div className="text-center"><input  style={{width: '25px', height: '25px'}} type="radio" name="check"  value=""  /></div>
                    </div>
                    <div className="mr-auto">
                        <h6>Treck from Delhi</h6>
                        <p><img style={{width: '35px'}} src={sun} alt="img" />3 Days</p>
                        <p><img style={{width: '40px'}} src={moon} alt="img" />2 Nights</p>
                    </div>
                    <div className="mr-2">
                        <p><del>INR 1,599</del></p>
                        <h5>INR 1,399 <br/> per Adult</h5>
                    </div>
                </div>
            </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Package;