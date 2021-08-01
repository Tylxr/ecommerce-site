import React from 'react';
import { PageLinks, SessionDetails } from '../components/navigation';
import './styles/Header';

export default function Header() {
    return (
        <div className="header">
            <div className="child">
                <PageLinks />
            </div>
            <div className="child">
                <div className="logo">
                    <div className="brand-name">Essence</div>
                </div>
            </div>
            <div className="child">
                <SessionDetails />
            </div>
        </div>
    )
}