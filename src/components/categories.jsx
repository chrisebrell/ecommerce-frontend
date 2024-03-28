import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/products.context';
import '../styles/categories.style.scss'

const Categories = () => {
  const {categories} = useContext(ProductsContext); 
      return (
        <div className="categories-container">
            {
                categories.map((category) => {
                    const image = category.imageUrl || 'https://ecommerce-group6.s3.amazonaws.com/1711212204953.jpeg'
                    return (
                    <div key={category._id} className="category-container">
                        <div className='background-image' style={{backgroundImage: `url(${image})`}}  />
                          <div className='category-body-container'>
                            <Link to='/category/products' state={{category: category._id}}>
                                <h2>{category.name}</h2>
                                <p>Shop Now</p>
                            </Link>    
                          </div>
                    </div>
                    )
                })
            }
        </div>
      )
}

export default Categories;