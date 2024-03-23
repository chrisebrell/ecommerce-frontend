import React, { useContext, useState } from 'react';
import CartDropdown from './cartDropdown';
import { CartContext } from '../context/cart.context';
import SignInPage from './signIn';

function NavBar() {
    const {isCartOpen, setIsCartOpen, totalItems} = useContext(CartContext);
    const [showSignInPage, setShowSignInPage] = useState(false);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <nav className="navbar">
        <div className="container">
            <div className="navbar-brand"><a href='/'>Simply Shopping</a></div>
            <div className="navbar-menu">
            <div className="navbar-start">
                {/* Dropdown for categories */}
                <div className="navbar-item has-dropdown">
                <div className="navbar-link">Categories</div>
                <div className="navbar-dropdown">
                    {/* Category options */}
                    <a href="#" className="navbar-item">Category 1</a>
                    <a href="#" className="navbar-item">Category 2</a>
                    <a href="#" className="navbar-item">Category 3</a>
                </div>
                </div>
            </div>
            {/* Search bar */}
            <div className="navbar-item">
                <input type="text" placeholder="Search" />
            </div>
            {/* Shop */}
            <div className="navbar-item">
                <a href="/products" className="button">Shop</a>
            </div>
            {/* User sign-in */}
            <div className="navbar-item">
                <button className="button" onClick={() => setShowSignInPage(true)}>Sign In</button>
            </div>
            {/* Admin sign-in */}
            <div className="navbar-item">
                <a href="#" className="button">Admin Sign In</a>
            </div>
            {/* Cart */}
            <div className="navbar-item">
                <a className="button" onClick={toggleIsCartOpen}>Cart 🛒 <i className="fas fa-shopping-cart"></i><span className='cart-bubble'>({totalItems})</span></a>
            </div>
            </div>
            { isCartOpen && <CartDropdown />}
            {/* <CartDropdown /> */}
        </div>
        {showSignInPage && <SignInPage />}
        </nav>
    );
}

export default NavBar;