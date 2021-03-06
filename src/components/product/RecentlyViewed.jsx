import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles/RecentlyViewed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from 'assets/images/products';

export default function RecentlyViewed({onClick}) {
    const containerElem = useRef();
    const productsElem = useRef();

    const [pos, setPos] = useState(0);
    const [endOfSlideLeft, setEndOfSlideLeft] = useState(true);
    const [endOfSlideRight, setEndOfSlideRight] = useState(true);
    const [containerWidth, setContainerWidth] = useState(0);
    const [productsWidth, setProductsWidth] = useState(0);
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    const [products, recentlyViewedIds] = useSelector(({Shop}) => [Shop.products, Shop.recentlyViewedIds]);

    useEffect(() => {
        const recentlyViewed = recentlyViewedIds.reduce((acc, val) => {
            const currentProduct = products.find(x => x._id === val);
    
            acc.push({
                _id: currentProduct._id,
                src: images[currentProduct.MediaCollection]?.[0],
                title: currentProduct.Name,
                price: currentProduct.PriceFormatted
            });
    
            return acc;
        }, []);

        setRecentlyViewed(recentlyViewed);
    }, [recentlyViewedIds]);

    useEffect(() => {
        setContainerWidth(containerElem.current.offsetWidth);
        setProductsWidth(productsElem.current.offsetWidth);
        setEndOfSlideRight(containerElem.current.offsetWidth > productsElem.current.offsetWidth);
    }, [recentlyViewed]); //Depend on recentlyViewed so that when the list changes, the slider indicators adjust

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
                {recentlyViewed.map((rv) => {
                    return (
                        <div key={rv._id} className="recently-viewed-product" onClick={() => onClick(rv._id)}>
                            <div className="image-container">
                                <img src={rv.src} alt="Product Image" />
                            </div>
                            <div className="details">
                                <span>{rv.title}</span>
                                <span>{rv.price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}