import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Rating, Button } from '../common';
import './styles/ProductInfo';

export default function ProductInfo() {
    return (
        <div className="product-info">
            <div className="product-heading-container">
                <h3>Necessaire</h3>
                <div className="favourite-button favourited">
                    {/* <FontAwesomeIcon icon={["far", "heart"]} /> */}
                    <FontAwesomeIcon icon={["fas", "heart"]} />
                </div>
            </div>
            <p className="description">A power-packed serum for youthful, bright skin. It delivers a highly concentrated dose of moisturising elements, beautifully restoring your skin’s bright glow and youthful vitality.</p>
            <span className="price">£38.99</span>
            <div className="review-container">
                <Rating value={3.5} />
                <a href="#" className="reviews" onClick={e => e.preventDefault()}>394 Reviews</a>
            </div>
            <p className="disclaimer">Disclaimer: dispatched within 1 week.</p>
            <div className="buttons-container">
                <Button text="Buy now" style="light" />
                <Button text="Add to basket" style="dark" />
            </div>
            <div className="details-container">
                <a href="#" onClick={e => e.preventDefault()}>Why the longer lead time?</a>
                <a href="#" onClick={e => e.preventDefault()}>Returns policy.</a>
            </div>
        </div>
    )
}