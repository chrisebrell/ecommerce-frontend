import { Link } from 'react-router-dom'
import '../styles/productCard.style.scss'

const ProductCard = ({ product }) => {
    // const { title, price, images, properties } = product
    const defaultImage = product.images[0] || 'https://ecommerce-group6.s3.amazonaws.com/1711212204953.jpeg'
    
    // shortening of name 
    let formatName = ''
    if (product.title.length > 20) {
        const splitName = product.title.split(' ')
        for (let i = 0; i < splitName.length; i++) {
            if (formatName.length < 20) {
                formatName += splitName[i] + ' '
            }
        }
    } else {
        formatName = product.title
    }
    // console.log(properties);
    return (
        <>
            <div className="product-card-container">
               <img className='product-image' src={defaultImage}  alt={`${product.title}`} />
               <div className="product-detail">
                   <span>{formatName}</span> 
                   <span> ${product.price}</span> 
               </div>
                <Link to='/description' state={{ product: product, defaultImage}}><button className='button-container'>VIEW</button></Link>
            </div>
        </>
    )
}

export default ProductCard;