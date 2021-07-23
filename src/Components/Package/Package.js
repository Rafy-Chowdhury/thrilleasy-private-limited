import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import angle from '../../image/triangle.png';
import PackageBox from '../PackageBox/PackageBox';
import './Package.css';



const Package = () => {

    const mainData= [
        {
            title: "Treck from Pantwari",
            price: 1000
        },
        {
            title: "Treck from Dehradun",
            price: 1200
        },
        {
            title: "Treck from Delhi",
            price: 1500
        }
    ]

    return (
        <Container className="mb-4" id="package">
            <div className="d-flex mt-4">
                        <div><img style={{width: '40px', marginRight: '13px'}} src={angle} alt="angle" /></div>
                        <div><h4 style={{fontWeight: 'bold'}}>Select Package Option</h4></div>
            </div>
            <Row>
                <Col xs={12} md={7}>
             
               <div style={{width: 'auto', height: 'auto', border: '1px solid gray',borderRadius: '20px',padding: '10px', marginTop: '25px'}}>
                {
                    mainData.map(data => <PackageBox data={data} key={data.title} ></PackageBox> )
                }
                 </div>

               
            </Col>
          
            </Row>
        </Container>
    );
};

export default Package;