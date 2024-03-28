import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cart.context';
import CartItem from './cartItem';
import '../styles/cartDropdown.style.scss'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();
    const gotoCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {/* <div className='empty-message'>Your Cart is empty</div> */}
                {cartItems.map((item) => (
                    <CartItem key={item._id} cartItem={item} />
                ))
                }
                <button onClick={gotoCheckoutHandler}>Go to Checkout</button>
            </div>
        </div>
    )
}

export default CartDropdown;