import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductMedia, ProductInfo } from '.';
import './styles/ProductDetails';

export default function ProductDetails() {
    return (
        <div className="product-details">
            <ProductMedia />
            <ProductInfo />
        </div>
    )
}