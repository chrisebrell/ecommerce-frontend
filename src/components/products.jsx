import { useContext } from "react";
import { ProductsContext } from "../context/products.context";
import ProductCard from "./productCard";
import '../styles/products.style.scss'

const Products = () => {
const products = useContext(ProductsContext)
    return (
        <div className="products-container">
            {
                products.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))
            }
        </div>
    )
}

export default Products;