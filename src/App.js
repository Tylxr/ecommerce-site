import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAirFreshener, faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Product from './pages/Product';
import './App.scss';

//Setup fontawesome
library.add(faBars, faUser, faHeart, faShoppingBag, faAirFreshener);

export default function App() {
    return (
        <div>
            <Product />
        </div>
    )
}