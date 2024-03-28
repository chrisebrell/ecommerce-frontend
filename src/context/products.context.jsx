import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
    products: [],
    categories: []
});

export const ProductProvider = ({children}) => {
    const [data, setData] = useState([])
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchString, setSearchString] = useState('')

    useEffect( () => {
        const fetchData = async () => {
            const url = process.env.REACT_APP_API_CATEGORIES_URL  || `http://localhost:3000/api/categories`
            // console.log(url);
            const response = await fetch(url)
            const data = await response.json()
            if (data.length) {
                setCategories(data.filter((category) => {
                    if (!category.parent) {
                        return category
                    }
                }))
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
                setData(data)
            }
        }
        fetchData()
    }, [])
    // Logic to search a product
    useEffect( () => {
        const filteredProducts = data.filter((product) => {
            const search = product.title + product.description
            if (search.toLowerCase().includes(searchString)) {
                return product
            } 
        })
        setProducts(filteredProducts)        
    }, [data, searchString])

    const value = {
        products, 
        categories,
        searchString,
        setSearchString
    }
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}



