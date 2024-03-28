import React, { useContext, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cart.context';
import { ProductsContext } from '../context/products.context';
import CartDropdown from './cartDropdown';
import SignInPage from './signIn';

function NavBar() {
    const navigate = useNavigate()
    const { categories, setSearchString } = useContext(ProductsContext)
    const {isCartOpen, setIsCartOpen, totalItems} = useContext(CartContext);
    const [showSignInPage, setShowSignInPage] = useState(false);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    const handleChange = (e) => {
        setSearchString(e.target.value.toLowerCase())
        navigate('/products')
    }

    return (
        <>
        <nav className="navbar">
        <div className="container">
            <div className="navbar-brand"><a href='/'>Simply Shopping</a></div>
            <div className="navbar-menu">
            <div className="navbar-start">
                {/* Dropdown for categories */}
                <div className="navbar-item has-dropdown">
                <div className="navbar-link"><Link to='/categories'>Categories</Link></div>
                <div className="navbar-dropdown">
                    {/* Category options */}
                    {
                        categories.map( (category) => (
                        <Link key={category._id}
                            className="navbar-item" 
                            to='/category/products' 
                            state={{category: category._id}} >
                                {category.name}
                        </Link>  
                        ))
                    }
                </div>
                </div>
            </div>
            {/* Search bar */}
            <div className="navbar-item">
                <input type="text" onChange={handleChange} placeholder="Search" />
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
        </div>
        {showSignInPage && <SignInPage />}
        </nav>
        <Outlet />
        </>
    );
}

export default NavBar;