import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../pages/Shared/leftNav/leftNav';
import RightNav from '../pages/Shared/rightNav/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header />
            <NavigationBar></NavigationBar>
            <Container>

                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                      
                    </Col>
                   
                </Row>
            </Container>

        </div>
    );
};

export default Main;