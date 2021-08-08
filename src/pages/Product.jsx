import React from 'react';
import { Header } from '../components';
import { ProductDetails } from '../components/product';
import './styles/Product';

export default function Product() {
    //TODO: Apply blur class to product with Redux on modal shown
    return (
        <div className="product">
            <Header />
            <ProductDetails />
        </div>
    )
}