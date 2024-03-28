import {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/description.style.scss'
import { CartContext } from '../context/cart.context';

const Description = () => {
    const location = useLocation();
    const { product, defaultImage } = location.state
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)

    return (
        <>
            <div className='grid-container'>
                <img className='image-container' src={defaultImage} alt={product.title} />
                <div className='details-container'>
                    <h1>{product.title}</h1>
                    <h3>$ {product.price}</h3>
                    <p>{product.description}</p>
                    <button className='button-container' onClick={addProductToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Description;