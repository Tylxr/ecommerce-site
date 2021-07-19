import React, { Fragment } from 'react';
import './styles/Header';

export default function Header({children}) {
    return (
        <div className="header">
            {children}
        </div>
    )
}