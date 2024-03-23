import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/description.style.scss'
const Description = () => {
    const location = useLocation();
    const { product } = location.state;
    return (
        <>
            <div className='grid-container'>
                <img className='image-container' src={product.imageUrl} alt={product.name} />
                <div className='details-container'>
                    <h1>{product.name}</h1>
                    <h3>$ {product.price}</h3>
                    <p>{product.description}</p>
                    <button className='button-container'>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Description;