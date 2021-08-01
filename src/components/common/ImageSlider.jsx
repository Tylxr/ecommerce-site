import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {productOneAsArray} from 'assets/images/products/1';
import './styles/ImageSlider';

export default function ImageSlider() {

    const [imageIndex, setImageIndex] = useState(0);

    const changeImage = image => {
        const imageIndex = productOneAsArray.findIndex(img => img === image);
        setImageIndex(imageIndex);
    };

    useInterval(() => {
        const imageIdx = imageIndex === productOneAsArray.length - 1 ? 0 : imageIndex + 1;
        setImageIndex(imageIdx);
    }, 6000);

    return (
        <div className="image-slider">
            <div className="main-image-container">
                <img src={productOneAsArray[imageIndex]} alt="Product Image" className="main-image" />
            </div>
            <div className="thumbnail-container">
                {productOneAsArray.map((image, imageIdx) => {
                    return (
                        <div className="thumbnail" key={imageIdx} onClick={() => changeImage(image)}>
                            <img src={image} alt="Product thumbnail"
                                className={`thumbnail-image ${imageIndex === imageIdx ? "active" : ""}`} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function useInterval(callback, delay) {
    useEffect(() => {
        const interval = setInterval(() => callback(), delay);
        return () => clearInterval(interval);
    });
}