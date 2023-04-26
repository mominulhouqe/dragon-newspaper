import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    return (
        <div>
            <Container>


                {/* navbar section start here here */}
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">
                                    <Link to="/" >Home</Link>
                                </Nav.Link>
                                <Nav.Link href="#pricing">
                                    <Link to="/about">About</Link>
                                </Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>

                            </Nav>
                            <Nav>
                                {
                                    user &&
                                    <Nav.Link href="#deets"> <FaUserCircle style={{ fontSize: "2rem" }} ></FaUserCircle >
                                    </Nav.Link>
                                }
                                <Nav.Link eventKey={2} href="#memes">

                                    <Link to='/login'><button className='btn  btn-dark'>Login</button></Link>

                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* navbar section end  here */}
            </Container>
        </div>
    );
};

export default NavigationBar;