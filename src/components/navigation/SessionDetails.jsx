import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './styles/SessionDetails';

export default function SessionDetails() {
    return (
        <div className="session-details">
            <div className="detail-container">
                <div className="user-badge">
                    <span></span>
                </div>
                <FontAwesomeIcon icon={["far", "user"]} />
            </div>
            <div className="detail-container show">
                <div className="favourites-badge badge">
                    <span>1</span>
                </div>
                <FontAwesomeIcon icon={["far", "heart"]} />
            </div>
            <div className="detail-container show">
                <div className="bag-badge badge">
                    <span>3</span>
                </div>
                <FontAwesomeIcon icon={["fas", "shopping-bag"]} />
            </div>
        </div>
    )
}