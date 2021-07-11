import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './BookingSuccess.css';

const BookingSuccess = () => {
    return (
        <Container>
            <Row>
                <Col xs ={12} md={6}>
                <div style={{backgroundColor: '#5bba76'}} className="mt-4 p-2">
                    <div className="firstDiv">
                        <div className="secondDiv">
                            <p className="firstLine">Booking Completed Successfully</p>
                        </div>
                        <div>
                        <FontAwesomeIcon className="sideIcon"  icon={faCheckCircle} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="pText">You will receive booking confirmation<br/> on mail & text message shortly</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BookingSuccess;