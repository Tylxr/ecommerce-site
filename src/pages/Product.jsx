import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from '../components';
import { ProductDetails } from '../components/product';
import { Navigation, SessionDetails } from '../components/navigation';
import './styles/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Product() {
    return (
        <div className="product">
            <Header>
                <Container>
                    <Row>
                        <Col xs={5}>
                            <Navigation />
                        </Col>
                        <Col className="logo" xs={2}>
                            <FontAwesomeIcon icon="air-freshener" className="logo-icon" />
                            <div className="brand-name">Essence</div>
                        </Col>
                        <Col xs={5}>
                            <SessionDetails />
                        </Col>
                    </Row>
                </Container>
            </Header>
            <ProductDetails />
        </div>
    )
}