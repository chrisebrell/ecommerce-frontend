// import React from 'react';

// function NavBar() {
//     return (
//         <nav className="navbar">   
//         <img src='/IconOnly.png' alt='Simply Shopping logo' style={{ width: '100px', height: 'auto' }} /> 
//         <div className="container">
//             <div className="navbar-brand">Simply Shopping</div>
//             <div className="navbar-menu">
//             <div className="navbar-start">
//                 {/* Dropdown for categories */}
//                 <div className="navbar-item has-dropdown">
//                 <div className="navbar-link">Categories</div>
//                 <div className="navbar-dropdown">
//                     {/* Category options */}
//                     <a href="#" className="navbar-item">Category 1</a>
//                     <a href="#" className="navbar-item">Category 2</a>
//                     <a href="#" className="navbar-item">Category 3</a>
//                 </div>
//                 </div>
//             </div>
//             {/* Search bar */}
//             <div className="navbar-item">
//                 <input type="text" placeholder="Search" />
//             </div>
//             {/* User sign-in */}
//             <div className="navbar-item">
//                 <a href="#" className="button">Sign In</a>
//             </div>
//             {/* Admin sign-in */}
//             <div className="navbar-item">
//                 <a href="#" className="button">Admin Sign In</a>
//             </div>
//             {/* Cart */}
//             <div className="navbar-item">
//                 <a href="#" className="button">Cart 🛒 <i className="fas fa-shopping-cart"></i></a>
//             </div>
//             </div>
//         </div>
//         </nav>
//     );
// }

// export default NavBar;
import React from 'react';

function NavBar() {
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
                <a href="#" className="button">Sign In</a>
            </div>
            {/* Admin sign-in */}
            <div className="navbar-item">
                <a href="#" className="button">Admin Sign In</a>
            </div>
            {/* Cart */}
            <div className="navbar-item">
                <a href="#" className="button">Cart 🛒 <i className="fas fa-shopping-cart"></i></a>
            </div>
            </div>
        </div>
        </nav>
    );
}

export default NavBar;