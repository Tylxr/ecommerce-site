import React from 'react';
import { useDispatch } from 'react-redux';
import { ImageSlider } from '../common';
import { CHANGE_PRODUCT } from '../../reducers/types';
import { RecentlyViewed } from '.';
import './styles/ProductMedia';

export default function ProductMedia({mobile, product}) {
    const dispatch = useDispatch();
    const onClick = productId => {
        dispatch({type: CHANGE_PRODUCT, payload: productId});
    };

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
                    <RecentlyViewed onClick={onClick} />
                </div>
            </div>
        )
    }
}