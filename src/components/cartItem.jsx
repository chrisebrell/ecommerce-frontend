import '../styles/cart-items.style.scss'
import { formatNameFn } from './productCard'

const CartItem = ({cartItem}) => {
    // console.log(cartItem);
    const { title, images, price, quantity } = cartItem;
    const formatName = formatNameFn(title)
    // const image = images[0] || `https://ecommerce-group6.s3.amazonaws.com/1711212204953.jpeg`
    return (
        <div className='cart-item-container'>
        {
         images ? (
             <img src={images[0]} alt={`${title}`} />
         )  : (
            <span>No image available</span>
         )     
        }    
        <div className='item-details'>
            <span className='name'>{formatName}</span>
            <span className='price'>
            {quantity} x ${price}
            </span>
        </div>
    </div>
    )
}

export default CartItem;