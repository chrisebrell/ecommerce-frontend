import { Link } from 'react-router-dom'
import '../styles/productCard.style.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    // shortening of name 
    let formatName = ''
    if (name.length > 20) {
        const splitName = name.split(' ')
        for (let i = 0; i < splitName.length; i++) {
            if (formatName.length < 20) {
                formatName += splitName[i] + ' '
            }
        }
    } else {
        formatName = name
    }
    console.log(formatName);
    return (
        <>
            <div className="product-card-container">
               <img className='product-image' src={imageUrl}  alt={`${name}`} />
               <div className="product-detail">
                   <span>{formatName}</span> 
                   <span> ${price}</span> 
               </div>
               {/* <div className='buttons-container'> */}
                {/* <button className='button-container'>ADD TO CART</button> */}
                <Link to='/description' state={{ product: product}}><button className='button-container'>VIEW</button></Link>
               {/* </div> */}
            </div>
        </>
    )
}

export default ProductCard;