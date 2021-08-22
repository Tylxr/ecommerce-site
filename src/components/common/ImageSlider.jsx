import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import images from 'assets/images/products';
import './styles/ImageSlider';
import { TOGGLE_PRODUCT_MODAL } from '../../reducers/types';

export default function ImageSlider({product}) {
    const dispatch = useDispatch();

    const [imageIndex, setImageIndex] = useState(0);
    const [imageCollection, setImageCollection] = useState([]);

    const showProductModal = useSelector(({Shop}) => Shop.showProductModal);
    const toggleProductModal = show => dispatch({type: TOGGLE_PRODUCT_MODAL, payload: show});

    useEffect(() => {
        setImageCollection(images[product.MediaCollection]);
    }, [product]);

    const changeImage = index => {
        setImageIndex(index);
    };

    useInterval(() => {
        const imageIdx = imageIndex === imageCollection.length - 1 ? 0 : imageIndex + 1;
        setImageIndex(imageIdx);
    }, showProductModal ? null : 6000); //Stop slider when image is enlarged

    return (
        <div className="image-slider">
            <Modal centered={true} dialogClassName="image-modal-dialog" show={showProductModal} onHide={() => toggleProductModal(false)}>
                <img className="modal-image" src={imageCollection[imageIndex]} alt="Large Product Image" />
            </Modal>
            <div className="main-image-container">
                <img src={imageCollection[imageIndex]} onClick={() => toggleProductModal(true)} alt="Product Image" className="main-image" />
            </div>
            <div className="thumbnail-container">
                {imageCollection.map((image, imageIdx) => {
                    return (
                        <div className="thumbnail" key={imageIdx} onClick={() => changeImage(imageIdx)}>
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