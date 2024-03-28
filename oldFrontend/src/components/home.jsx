import '../styles/categories.style.scss'
import React from 'react';
import Categories from './categories';
import VideoComponent from './videoComponent';

const Home = () => {  
    return (
        <>
            <VideoComponent />
            <Categories />
        </>
    )
}
export default Home;