import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../context/products.context";
import ProductCard from "./productCard";
import '../styles/products.style.scss'

const Products = () => {
const products = useContext(ProductsContext)
const [data, setData] = useState([])
// initial loading of products
useEffect( () => {
    const fetchData = async () => {
        const url = process.env.REACT_APP_API_BASE_URL || `http://localhost:3000/api/products` 
        // console.log(url);
        const response = await fetch(url)
        const data = await response.json()
        if (data.length) {
            setData(data)
            // console.log(data)
        }
    }
    fetchData()
}, [])

const productsData = data
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
