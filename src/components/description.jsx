import {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/description.style.scss'
import { CartContext } from '../context/cart.context';

const Description = () => {
    const location = useLocation();
    const { product } = location.state;
    const { totalItems, setTotalItems } = useContext(CartContext)
    const addItemToCart = () => {
        setTotalItems(totalItems + 1)
    }

    return (
        <>
            <div className='grid-container'>
                <img className='image-container' src={product.imageUrl} alt={product.name} />
                <div className='details-container'>
                    <h1>{product.name}</h1>
                    <h3>$ {product.price}</h3>
                    <p>{product.description}</p>
                    <button className='button-container' onClick={addItemToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Description;