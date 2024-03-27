import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
    products: [],
    categories: []
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const url = process.env.REACT_APP_API_CATEGORIES_URL  || `http://localhost:3000/api/categories`
            // console.log(url);
            const response = await fetch(url)
            const data = await response.json()
            if (data.length) {
                setCategories(data)
                // console.log(data)
            }
        }
        fetchData()
      }, []) 

      useEffect( () => {
        const fetchData = async () => {
            const url = process.env.REACT_APP_API_BASE_URL || `http://localhost:3000/api/products` 
            const response = await fetch(url)
            const data = await response.json()
            if (data.length) {
                setProducts(data)
            }
        }
        fetchData()
    }, [])

    const value = {
        products, 
        categories
    }
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}



