import {useContext} from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/description.style.scss'
import { CartContext } from '../context/cart.context';

const Description = () => {
    const location = useLocation();
    const { product, defaultImage } = location.state;
    const { properties } = product
    const { totalItems, setTotalItems } = useContext(CartContext)
    const addItemToCart = () => {
        setTotalItems(totalItems + 1)
    }
    // console.log(product)

    return (
        <>
            <div className='grid-container'>
                <img className='image-container' src={defaultImage} alt={product.title} />
                <div className='details-container'>
                    <h1>{product.title}</h1>
                    <h3>$ {product.price}</h3>
                    <p>{product.description}</p>
                    {/* <ul>
                        {
                            Object.entries(properties).map( (key, value) => {
                                <li key={key}>{key}: {value}</li>
                            })
                        }
                    </ul> */}
                    <button className='button-container' onClick={addItemToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Description;