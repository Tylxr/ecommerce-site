import React from 'react';
import './styles/RecentlyViewed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productTwo from '../../assets/images/products/2';
import productThree from '../../assets/images/products/3';
import productFour from '../../assets/images/products/4';

export default function RecentlyViewed() {
    const images = [
        {
            src: productTwo.productTwo1,
            title: 'Elixir',
            priceString: '£38.99'
        },
        {
            src: productThree.productThree1,
            title: 'Nourish',
            priceString: '£27.99'
        },
        {
            src: productFour.productFour1,
            title: 'Hydrator',
            priceString: '£41.99'
        },
    ];

    return (
        <div className="recently-viewed">
            <div className="top">
                <span>Recently Viewed</span>
                <div className="indicators">
                    <div className="direction end">
                        <FontAwesomeIcon icon="chevron-left" />
                    </div>
                    <div className="direction">
                        <FontAwesomeIcon icon="chevron-right" />
                    </div>
                </div>
            </div>
            <div className="products-container">
                {images.map((image, idx) => {
                    return (
                        <div key={idx} className="recently-viewed-product">
                            <div className="image-container">
                                <img src={image.src} alt="Product Image" />
                            </div>
                            <div className="details">
                                <span>{image.title}</span>
                                <span>{image.priceString}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}