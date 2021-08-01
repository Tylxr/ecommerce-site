import React from 'react';
import './styles/Button';

export default function Button({text, style}) {
    return (
        <div className={`button-container ${style}`}>
            <span>{text}</span>
        </div>
    )
}