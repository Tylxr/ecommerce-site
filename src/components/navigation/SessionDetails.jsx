import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/SessionDetails';

export default function SessionDetails() {
    const {favourites, basket} = useSelector(({Customer}) => ({favourites: Customer.favourites, basket: Customer.basket}));
    const hasFavourites = favourites.length > 0;
    const hasBasketItems = basket.length > 0;

    return (
        <div className="session-details">
            <div className="detail-container">
                <div className="user-badge">
                    <span></span>
                </div>
                <FontAwesomeIcon icon={["far", "user"]} />
            </div>
            <div className={`detail-container ${hasFavourites ? "show" : ""}`}>
                <div className={`favourites-badge ${hasFavourites ? "badge" : ""}`}>
                    <span>{hasFavourites ? favourites.length : ""}</span>
                </div>
                <FontAwesomeIcon icon={["far", "heart"]} />
            </div>
            <div className={`detail-container ${hasBasketItems ? "show" : ""}`}>
                <div className={`bag-badge ${hasBasketItems ? "badge" : ""}`}>
                    <span>{hasBasketItems? basket.length : ""}</span>
                </div>
                <FontAwesomeIcon icon={["fas", "shopping-bag"]} />
            </div>
        </div>
    )
}