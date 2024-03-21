import { createContext, useState } from "react";

import ProductsData from '../products.json';

export const ProductsContext = createContext({
    products: []
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(ProductsData);
    return (
        <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
    )
}



