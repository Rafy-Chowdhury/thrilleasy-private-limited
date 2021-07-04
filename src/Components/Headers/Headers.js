import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Headers = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: 'black'}} expand="lg">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"><FontAwesomeIcon style={{color: 'white'}}icon={faBars} /></Navbar.Toggle>
              <Navbar.Brand href="#"><img style={{width: '150px'}} src={logo} alt="logo"/></Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                  className="mr-auto my-2 my-lg-0"
                  style={{ fontSize: '24px', fontWeight: '200' }}>
                  <Nav.Link style={{color: 'white', marginRight: '25px'}} href="#action1">Lorem</Nav.Link>
                  <Nav.Link style={{color: 'white', marginRight: '25px'}} className="links" href="#action2">Lorem</Nav.Link>
                  <Nav.Link style={{color: 'white', marginRight: '25px'}} className="links" href="#action1">Lorem</Nav.Link>
                  <Nav.Link style={{color: 'white', marginRight: '25px'}} className="links" href="#action2">Lorem</Nav.Link>
                  <Nav.Link style={{color: 'white', marginRight: '25px'}} className="links" href="#action1">Lorem</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Brand style={{color: 'white'}} href="#"><FontAwesomeIcon icon={faSearch} /></Navbar.Brand>
              </Container>
            </Navbar>
        </div>
    );
};

export default Headers;