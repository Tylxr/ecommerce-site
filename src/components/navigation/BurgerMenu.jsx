import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/BurgerMenu';

export default function BurgerMenu() {
    return (
        <div className="burger-menu">
            <FontAwesomeIcon icon="bars" />
        </div>
    )
}