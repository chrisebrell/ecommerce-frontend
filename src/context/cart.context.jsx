import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    totalItems: 0,
    setTotalItems: () => {}
}) 

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [totalItems, setTotalItems] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const value = { 
        isCartOpen, 
        setIsCartOpen,
        cartItems,
        totalItems,
        setTotalItems
        }
    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}