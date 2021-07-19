import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Product from './pages/Product';
import './App.scss';

//Setup fontawesome
library.add(faBell);

export default function App() {
    return (
        <div>
            <Product />
        </div>
    )
}