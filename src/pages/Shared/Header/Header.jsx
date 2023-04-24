import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img className='img-fluid' src={logo} alt="" />
                <p className='text-center'> <small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            {/* markeque section start here */}
            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={50}> Braking news
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            {/* markqueee section end here */}


            {/* navbar section start here here */}
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <button className='btn  btn-dark'>Login</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* navbar section end  here */}


        </Container>
    );
};

export default Header;