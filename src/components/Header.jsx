import React from 'react';
import { CSSTransition } from 'react-transition-group';
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
                    <CSSTransition in={true} appear={true} timeout={2000} classNames="brand-transition">
                        <div className="brand-name">Essence</div>
                    </CSSTransition>
                </div>
            </div>
            <div className="child session">
                <SessionDetails />
            </div>
        </div>
    )
}