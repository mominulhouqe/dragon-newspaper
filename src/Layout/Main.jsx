import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../pages/Shared/leftNav/leftNav';
import RightNav from '../pages/Shared/rightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>

                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        Main content is comming
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

export default Main;