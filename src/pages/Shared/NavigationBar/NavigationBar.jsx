import React, { useContext } from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogout =()=>{
        logOut()
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <Container>


                {/* navbar section start here here */}
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto ">

                                <Link to="/category/0" className='mx-2 text-decoration-none' >Home</Link>
                                <Link to="/category/0" className='mx-2 text-decoration-none' >About</Link>
                                <Link to='/category/0' className='mx-2 text-decoration-none' >Career</Link>


                            </Nav>
                            <Nav>
                                {
                                    user &&
                                    <Nav.Link href="#deets"> <FaUserCircle style={{ fontSize: "2rem" }} ></FaUserCircle >
                                    </Nav.Link>
                                }

                                {
                                    user ?
                                        <Link to='/register'><button onClick={handleLogout} className='btn  btn-dark'>Logout</button></Link> :
                                        <Link to='/login'><button className='btn  btn-dark'>Login</button></Link>

                                }
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