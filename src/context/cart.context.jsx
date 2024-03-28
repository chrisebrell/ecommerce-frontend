import { createContext, useEffect, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === productToAdd._id)
    // if product in cart
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
        cartItem._id === productToAdd._id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    } 
    // new product in cart
    return [ ...cartItems, { ...productToAdd, quantity: 1 }]
}

export const removeItem = (cartItems, productToRemove) => {
    // console.log(productToRemove);
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === productToRemove._id)
    if (existingCartItem.quantity === 1) {
        return cartItems.map((cartItem) => 
         cartItem._id !== productToRemove._id 
        )
    }

    return cartItems.map((cartItem) => 
         cartItem._id === productToRemove._id ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem
        )
}

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id);

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    totalItems: 0,
    cartTotal: 0,
    addItemToCart: () => {},
    removeCartItem: () => {},
    clearItemFromCart: () => {}
}) 

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [totalItems, setTotalItems] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    const [cartItems, setCartItems] = useState([])
    
    useEffect ( () => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setTotalItems(newCartCount)
    }, [cartItems])
    useEffect ( () => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const removeCartItem = (cartItemToRemove) => {
        setCartItems(removeItem(cartItems, cartItemToRemove))
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = { 
        isCartOpen, 
        setIsCartOpen,
        cartItems,
        totalItems,
        cartTotal,
        setTotalItems,
        addItemToCart,
        removeCartItem,
        clearItemFromCart
        }
    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}