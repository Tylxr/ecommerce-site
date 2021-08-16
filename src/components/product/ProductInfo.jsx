import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Rating, Button } from '../common';
import './styles/ProductInfo';

export default function ProductInfo({product}) {
    return (
        <div className="product-info">
            <div className="product-heading-container">
                <h3>{product.Name}</h3>
                <div className="favourite-button favourited">
                    {/* <FontAwesomeIcon icon={["far", "heart"]} /> */}
                    <FontAwesomeIcon icon={["fas", "heart"]} />
                </div>
            </div>
            {product.Description.map((desc, idx) => {
                return <p key={idx} className="description">{desc}</p>   
            })}
            <span className="price">{product.PriceFormatted}</span>
            <div className="review-container">
                <Rating value={product.Rating.Score} />
                <a href="#" className="reviews" onClick={e => e.preventDefault()}>{product.Rating.ReviewCount} Reviews</a>
            </div>
            {product.Disclaimer && (
                <p className="disclaimer">Disclaimer: {product.Disclaimer}</p>
            )}
            <div className="buttons-container">
                <Button text="Quick buy" style="light" />
                <Button text="Add to basket" style="dark" />
            </div>
            <div className="details-container">
                <a href="#" onClick={e => e.preventDefault()}>Why the longer lead time?</a>
                <a href="#" onClick={e => e.preventDefault()}>Returns policy.</a>
            </div>
        </div>
    )
}