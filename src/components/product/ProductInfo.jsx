import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating, Button } from '../common';
import { TOGGLE_ADD_TO_FAVOURITES, TOGGLE_ADD_TO_BASKET } from '../../reducers/types';
import './styles/ProductInfo';

export default function ProductInfo({product}) {
    const dispatch = useDispatch();
    const {favourites, basket} = useSelector(({Customer}) => ({favourites: Customer.favourites, basket: Customer.basket}));

    const hasBeenFavourited = favourites.some(fav => fav === product._id);
    const hasBeenAddedToBasket = basket.some(item => item === product._id);

    return (
        <div className="product-info">
            <div className="product-heading-container">
                <h3>{product.Name}</h3>
                <div className={`favourite-button ${hasBeenFavourited ? "favourited" : ""}`}>
                    {hasBeenFavourited
                        ? <FontAwesomeIcon icon={["fas", "heart"]} onClick={() => dispatch({type: TOGGLE_ADD_TO_FAVOURITES, payload: product._id})} />
                        : <FontAwesomeIcon icon={["far", "heart"]} onClick={() => dispatch({type: TOGGLE_ADD_TO_FAVOURITES, payload: product._id})} />}
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
                <Button text="Quick buy" style="light" onClick={() => dispatch({type: TOGGLE_ADD_TO_BASKET, payload: product._id})} />
                <Button text="Add to basket" style="dark" onClick={() => dispatch({type: TOGGLE_ADD_TO_BASKET, payload: product._id})} />
            </div>
            <div className="details-container">
                <a href="#" onClick={e => e.preventDefault()}>Why the longer lead time?</a>
                <a href="#" onClick={e => e.preventDefault()}>Returns policy.</a>
            </div>
        </div>
    )
}