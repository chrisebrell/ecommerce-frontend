import '../styles/productCard.style.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    return (
        <>
            <div className="product-card-container">
               <img className='product-image' src={imageUrl}  alt={`${name}`} />
               <div className="product-detail">
                   <span>{name}</span> 
                   <span> ${price}</span> 
               </div>
               <button className='button-container'>Add to Cart</button>
            </div>
        </>
    )
}

export default ProductCard;