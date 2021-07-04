import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import angle from '../../image/triangle.png';
import sPoint from '../../image/los.png';
import pPoint from '../../image/lop.png';
import dPoint from '../../image/lod.png';

const TrekMap = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={9}>
                <div className="d-flex mt-4">
                        <div><img style={{width: '40px', marginRight: '13px'}} src={angle} alt="angle" /></div>
                        <div><h5 style={{fontWeight: 'bold'}}>Nag Tibba Trek Map</h5></div>
                </div>
                <div className="mt-3 ml-4">
                    <h5><u>Starting Point</u></h5>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div><img style={{width: '25px', marginRight: '30px'}} src={sPoint} alt="img" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit</h5></div>
                    </div>
                    <h5 className="mt-3"><u>Pickup Points</u></h5>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div><img style={{width: '25px', marginRight: '30px'}} src={pPoint} alt="img" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit</h5></div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                        <div><img style={{width: '25px', marginRight: '30px'}} src={pPoint} alt="img" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit </h5></div>
                    </div>
                    <h5 className="mt-3"><u>Drop Points</u></h5>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div><img style={{width: '25px', marginRight: '30px'}} src={dPoint} alt="img" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit</h5></div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                        <div><img style={{width: '25px', marginRight: '30px'}} src={dPoint} alt="img" /></div>
                        <div><h5 style={{fontWeight: '200'}}>lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit dolor sit amet  elit</h5></div>
                    </div>
                </div>

                </Col>
            </Row>
        </Container>
    );
};

export default TrekMap;