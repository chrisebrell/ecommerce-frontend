import { useContext } from 'react';
import { Link } from 'react-router-dom'
import '../styles/productCard.style.scss'
import { CartContext } from '../context/cart.context';

// shortening of name 
export const formatNameFn = (name) => {
    let formatName = ''
    if (name.length > 20) {
        const splitName = name.split(' ')
        for (let i = 0; i < splitName.length; i++) {
            if (formatName.length < 20) {
                formatName += splitName[i] + ' '
            }
        return formatName   
        }
    } else {
        formatName = name
        return formatName
    }
}

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
    // const { title, price, images, properties } = product
    const defaultImage = product.images[0] || 'https://ecommerce-group6.s3.amazonaws.com/1711212204953.jpeg'
    
    // console.log(properties);
    const formatName = formatNameFn(product.title)
    return (
        <>
            <div className="product-card-container">
               <img className='product-image' src={defaultImage}  alt={`${product.title}`} />
               <div className="product-detail">
                   <span>{formatName}</span> 
                   <span> ${product.price}</span> 
               </div>
                <button className='button-container' onClick={addProductToCart}>Add to Cart</button>
                <Link to='/description' state={{ product: product, defaultImage}}><button className='button-container'>VIEW</button></Link>
            </div>
        </>
    )
}

export default ProductCard;