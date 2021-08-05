import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import {productOneAsArray} from 'assets/images/products/1';
import './styles/ImageSlider';

export default function ImageSlider() {

    const [imageIndex, setImageIndex] = useState(0);
    const [imageModalState, setImageModalState] = useState(false);

    const changeImage = image => {
        const imageIndex = productOneAsArray.findIndex(img => img === image);
        setImageIndex(imageIndex);
    };

    useInterval(() => {
        const imageIdx = imageIndex === productOneAsArray.length - 1 ? 0 : imageIndex + 1;
        setImageIndex(imageIdx);
    }, imageModalState ? null : 6000); //Stop slider when image is enlarged

    return (
        <div className="image-slider">
            <Modal show={imageModalState} onHide={() => setImageModalState(false)}>
                <img src={productOneAsArray[imageIndex]} alt="Large Product Image" />
            </Modal>
            <div className="main-image-container">
                <img src={productOneAsArray[imageIndex]} onClick={() => setImageModalState(true)} alt="Product Image" className="main-image" />
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

//Custom hook. Can export if needed elsewhere.
function useInterval(callback, delay) {
    useEffect(() => {
        if (delay === null) {
            return;
        }
        const interval = setInterval(() => callback(), delay);
        return () => clearInterval(interval);
    });
}