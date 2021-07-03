import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Fqas.css';

const Faqs = () => {
    return (
        <Container className="mt-4">
            <h5 style={{fontWeight: 'bold', marginBottom: '30px'}}>Nag Tibba Trek FAQs</h5>
            <Row>
                <Col xs={12} md={3}>    
                <span className="all-Question" >Lorem ipsum dolor sit amit dolor</span> <br/> <br/>
                <span className="all-Question" >Lorem ipsum dolor sit amit dolor</span> <br/> <br/>
                </Col>
                <Col xs={12} md={3}>
                <span className="all-Question" >Lorem ipsum dolor sit amit dolor</span> <br/> <br/>
                <span className="all-Question" >Lorem ipsum dolor sit amit dolor</span> <br/> <br/>
                </Col>
                <Col xs={12} md={3}>
                <span className="all-Question" >Lorem ipsum dolor sit amit  dolor</span> <br/> <br/>
                <span className="all-Question" >Lorem ipsum dolor sit amit dolor</span> <br/> <br/>
                </Col>
                <Col xs={12} md={3}>
                <span className="all-Question" >Lorem ipsum dolor sit amit dolor</span> <br/> <br/>
                <span className="all-Question" >Lorem ipsum dolor sit amit dolor</span>
                <span></span>
                </Col>
            </Row>
        </Container>
    );
};

export default Faqs;