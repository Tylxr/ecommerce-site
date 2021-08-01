import React from 'react';
import { Header } from '../components';
import { ProductDetails } from '../components/product';
import './styles/Product';

export default function Product() {
    return (
        <div className="product">
            <Header />
            <ProductDetails />
        </div>
    )
}