import '../categories.style.scss'
import React from 'react';
import Categories from './categories';
// import Descriptions from './descriptions';
// import Products from './products';
import NavBar from './NavBar';

const Home = () => {  
    return (
        <>
        <NavBar />
        <h1>Simply Shopping</h1>
        <h2>Shop by Category</h2>
        <Categories />
        </>
    )
}
export default Home;