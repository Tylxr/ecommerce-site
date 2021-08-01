import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from '../components';
import { ProductDetails } from '../components/product';
import { Navigation, SessionDetails } from '../components/navigation';
import './styles/Product';

export default function Product() {
    return (
        <div className="product">
            <Header>
                <Container>
                    <Row>
                        <Col xl={5}>
                            <Navigation />
                        </Col>
                        <Col className="logo" xl={2}>
                            <div className="brand-name">Essence</div>
                        </Col>
                        <Col xl={5}>
                            <SessionDetails />
                        </Col>
                    </Row>
                </Container>
            </Header>
            <ProductDetails />
        </div>
    )
}