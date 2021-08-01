import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHeart, faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import { faBars, faShoppingBag, faHeart as faSolidHeart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import Product from './pages/Product';
import './App.scss';

//Setup fontawesome
library.add(faBars, faUser, faHeart, faShoppingBag, faSolidHeart, faStar, faStarHalfAlt, faStarOutline);

export default function App() {
    return (
        <div>
            <Product />
        </div>
    )
}