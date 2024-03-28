import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../context/products.context";
import ProductCard from "./productCard";
import '../styles/products.style.scss'

const CategoryProducts = () => {
const {products} = useContext(ProductsContext)
const location = useLocation();
let category = null
if (location.state) {
    category = location.state.category
}
let productsData = products
// filter products using category._id passed thru useLocation
if (category) {
    productsData = products.filter(product => product.category === category)
} 
    return (
        <div className="products-container">
            {
                productsData.map((product) => (
                    <div key={product._id}>
                        <ProductCard product={product} />
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryProducts;
