import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Fqas.css';

const Faqs = () => {
    return (
        <Container className="mt-4">
            <h5 style={{fontWeight: 'bold', marginBottom: '10px'}}>Explore Similar things to Do</h5>
            <Row className="justify-content-start pl-3">
               
               
                <span className="similar" >Lorem ipsum dolor sit </span> 
                <span className="similar" >Lorem </span>
                <span className="similar" >Lorem ipsum dolor  </span>
                <span className="similar" >Lorem ipsum dolor sit amet </span>
                <span className="similar" >Lorem ipsum dolor sit </span>
                <span className="similar" >Lorem ipsum dolor sit </span>
                <span className="similar" >Lorem ipsum dolor sit amit</span>
                <span className="similar" >Lorem ipsum dolor sit </span>
                <span className="similar" >Lorem ipsum dolor sit </span> 
                <span className="similar" >Lorem </span>
                <span className="similar" >Lorem ipsum dolor sit </span>
                <span className="similar" >Lorem ipsum dol </span>
              
            </Row>
        </Container>
    );
};

export default Faqs;