import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../components';
import { ProductDetails } from '../components/product';
import './styles/Product';

export default function Product() {
    const showProductModal = useSelector(({Shop}) => Shop.showProductModal);
    return (
        <div className={`product ${showProductModal ? 'blur' : ''}`}>
            <Header />
            <ProductDetails />
        </div>
    )
}