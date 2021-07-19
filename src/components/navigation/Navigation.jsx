import React from 'react';
import { BurgerMenu, PageLinks } from '.';
import './styles/navigation';

export default function Navigation() {
    return (
        <div className="navigation">
            <BurgerMenu />
            <PageLinks />
        </div>
    )
}