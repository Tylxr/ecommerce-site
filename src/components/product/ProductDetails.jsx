import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProductMedia, ProductInfo } from '.';
import './styles/ProductDetails';

export default function ProductDetails() {
    const product = useSelector(({Shop}) => Shop.selectedProduct);

    return (
        <TransitionGroup>
            <CSSTransition
                in={true}
                appear={true}
                timeout={3000}
                classNames="fade">
                <div className="product-details">
                    <ProductMedia product={product} />
                    <ProductInfo product={product} />
                    <ProductMedia mobile={true} product={product} />
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}