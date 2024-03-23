import '../styles/cartDropdown.style.scss'
import CartItems from './cartItems';
const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                <div className='empty-message'>Your Cart is empty</div>
                <CartItems />
                <button>Go to Checkout</button>
            </div>
        </div>
    )
}

export default CartDropdown;