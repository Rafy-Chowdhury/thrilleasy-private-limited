import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import angle from '../../image/triangle.png';
import sidearro from '../../image/sidearro.png';

const SecondPart = () => {
    return (
        <Container>
            <Row>
                <Col xs ={12} md={9}>
                    <div className="d-flex mt-1">
                        <div className="mr-2">
                            <img style={{width: '40px'}} src={angle} alt="angle" />
                        </div>
                        <div>
                            <h5 style={{fontWeight: 'bold'}}>Thrilling Leh Ladakh Tour with Pangong Lake Highlight </h5>
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

                </Col>
            </Row>
        </Container>
    );
};

export default SecondPart;