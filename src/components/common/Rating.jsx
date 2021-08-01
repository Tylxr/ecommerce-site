import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Rating({value}) {
    const starFull = ["fas", "star"];
    const starEmpty = ["far", "star"];
    const starHalf = ["fas", "star-half-alt"];

    const stars = [];
    for (let i = 1; i < 6; i++) {
        if (value >= i) {
            stars.push(starFull);
        } else if (value % 1 > 0) {
            stars.push(starHalf);
            value = value.toFixed(0);
        } else {
            stars.push(starEmpty);
        }
    }

    return <div>
        {stars.map((icon, idx) => {
            return <FontAwesomeIcon icon={icon} key={idx} />
        })}
    </div>
}