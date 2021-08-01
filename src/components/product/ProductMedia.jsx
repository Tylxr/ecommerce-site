import React from 'react';
import { ImageSlider } from '../common';
import { RecentlyViewed } from '.';
import './styles/ProductMedia';

export default function ProductMedia() {
    return (
        <div className="product-media">
            <div className="image-slider-container">
                <ImageSlider />
            </div>
            <div className="recently-viewed-container">
                <RecentlyViewed />
            </div>
        </div>
        // <div className="product-media">
        //     <Row>
        //         <Col>
        //             <ImageSlider />
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col xl={12}>
        //             <p>This is the recently viewed section.</p>
        //         </Col>
        //     </Row>
        // </div>
    )
}