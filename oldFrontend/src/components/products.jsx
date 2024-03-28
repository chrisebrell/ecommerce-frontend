import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../context/products.context";
import ProductCard from "./productCard";
import '../styles/products.style.scss'

const Products = () => {
const {products} = useContext(ProductsContext)
let productsData = products

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

export default Products;
