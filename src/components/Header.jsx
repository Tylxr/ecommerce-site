import React from 'react';
import { PageLinks, SessionDetails } from '../components/navigation';
import './styles/Header';

export default function Header() {
    return (
        <div className="header">
            <div className="child links">
                <PageLinks />
            </div>
            <div className="child brand">
                <div className="logo">
                    <div className="brand-name">Essence</div>
                </div>
            </div>
            <div className="child session">
                <SessionDetails />
            </div>
        </div>
    )
}