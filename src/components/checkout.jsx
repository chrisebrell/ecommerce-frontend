import '../styles/checkout.style.scss'
import { CartContext } from '../context/cart.context';
import { useContext } from 'react';

const Checkout = () => {
    const { cartItems, 
            addItemToCart, 
            removeCartItem, 
            cartTotal, 
            clearItemFromCart } = useContext(CartContext)
    // console.log(cartItems);
    return (
        <>
        <div className='checkout-container'>
          <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
          </div>
          { 
                cartItems.map ((cartItem) => {
                   return (
                    <div key={cartItem._id} className='checkout-item-container'>
                        <div className='image-container'>
                            {
                                cartItem.images ? (
                                    <img src={cartItem.images[0]} alt={`${cartItem.title}`} />
                                ) : (
                                    <span>No image available</span>
                                )

                            }
                        </div>
                        <span className='name'> {cartItem.title} </span>
                        <span className='quantity'>
                            <div className='arrow' onClick={() => removeCartItem(cartItem)}>
                                -
                            </div>
                            <span className='value'>{cartItem.quantity}</span>
                            <div className='arrow' onClick={() => addItemToCart(cartItem)}>
                                +
                            </div>
                        </span>
                        <span className='price'> {cartItem.price}</span>
                        <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
                            &#10005;
                        </div>
                    </div> )   
                })
            }
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
        </>
    )
}

export default Checkout;