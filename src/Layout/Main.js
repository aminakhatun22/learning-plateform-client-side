import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
// import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Navigate />
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4">
                        <h3>Left side</h3>

                    </Col>

                    <Col lg="8">
                        {/* <Outlet></Outlet> */}
                        <h2>
                            Right side
                        </h2>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;