import React from 'react';
import { ImageSlider } from '../common';
import { RecentlyViewed } from '.';
import './styles/ProductMedia';

export default function ProductMedia({mobile, product}) {
    if (mobile) {
        return <div className="product-media-mobile">
            <RecentlyViewed />
        </div>
    } else {
        return (
            <div className="product-media">
                <div className="image-slider-container">
                    <ImageSlider product={product} />
                </div>
                <div className="recently-viewed-container">
                    <RecentlyViewed />
                </div>
            </div>
        )
    }
}