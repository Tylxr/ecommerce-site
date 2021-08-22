import React from 'react';
import './styles/Button';

export default function Button({text, style, onClick}) {
    return (
        <div className={`button-container ${style}`} onClick={() => onClick()}>
            <span>{text}</span>
        </div>
    )
}