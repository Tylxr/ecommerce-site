import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from '../components';
import { ProductDetails } from '../components/product';
import { Navigation, SessionDetails } from '../components/navigation';
import './styles/Product';

export default function Product() {
    return (
        <div className="product">
            <Header>
                <div className="section">
                    <Navigation />
                </div>
                <div className="section">
                    <span>This is the logo</span>
                </div>
                <div className="section">
                    <SessionDetails />
                </div>
            </Header>
            <ProductDetails />
        </div>
    )
}