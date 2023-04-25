import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../pages/Shared/rightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <Container>

                <Row>
                   
                    <Col lg={9}>

                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Outlet></Outlet>

        </div>
    );
};

export default NewsLayout;