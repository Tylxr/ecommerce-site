import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProductMedia, ProductInfo } from '.';
import './styles/ProductDetails';

export default function ProductDetails() {
    return (
        <TransitionGroup>
            <CSSTransition
                key={1} //TODO: Provide key - product key from redux
                in={true}
                appear={true}
                timeout={3000}
                classNames="fade">
                <div className="product-details">
                    <ProductMedia />
                    <ProductInfo />
                    <ProductMedia mobile={true} />
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}