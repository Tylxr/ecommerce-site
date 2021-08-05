import React, { useState, useRef, useEffect } from 'react';
import './styles/RecentlyViewed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productOne from '../../assets/images/products/1';
import productTwo from '../../assets/images/products/2';
import productThree from '../../assets/images/products/3';
import productFour from '../../assets/images/products/4';
import productFive from '../../assets/images/products/5';

export default function RecentlyViewed() {
    const containerElem = useRef();
    const productsElem = useRef();

    const images = [
        {
            src: productOne.productOne1,
            title: 'Enhance',
            priceString: '£39.99'
        },
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
        {
            src: productFive.productFive1,
            title: 'Replenish',
            priceString: '£44.99'
        }
    ];

    const [pos, setPos] = useState(0);
    const [endOfSlideLeft, setEndOfSlideLeft] = useState(images.length > 0);
    const [endOfSlideRight, setEndOfSlideRight] = useState(false);
    const [containerWidth, setContainerWidth] = useState(0);
    const [productsWidth, setProductsWidth] = useState(0);

    useEffect(() => {
        setContainerWidth(containerElem.current.offsetWidth);
        setProductsWidth(productsElem.current.offsetWidth);
    }, []);

    const changeDir = direction => {
        let amount = pos;
        switch (direction) {
            case "left":
                amount = pos + 174;
                break;
            case "right":
                amount = pos - 174;
                break;
            default:
                break;
        }

        //Set chevron state
        const totalSlideAmount = (containerWidth - amount);
        setEndOfSlideRight(totalSlideAmount > productsWidth);
        setEndOfSlideLeft(amount === 0);

        //Set the positioning of the slider
        setPos(amount);
    };

    return (
        <div className="recently-viewed" ref={containerElem}>
            <div className="top">
                <span>Recently Viewed</span>
                <div className="indicators">
                    <div className={`direction ${endOfSlideLeft ? "end" : ""}`} onClick={() => endOfSlideLeft ? null : changeDir("left")}>
                        <FontAwesomeIcon icon="chevron-left" />
                    </div>
                    <div className={`direction ${endOfSlideRight ? "end" : ""}`} onClick={() => endOfSlideRight ? null : changeDir("right")}>
                        <FontAwesomeIcon icon="chevron-right" />
                    </div>
                </div>
            </div>
            <div className="products-container" ref={productsElem} style={{left: pos}}>
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