import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addProduct(productId) {
    setCartProducts((prev) => {
      const newCart = [...prev, productId];
      ls?.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }

  function removeProduct(productId) {
    setCartProducts((prev) => {
      const index = prev.indexOf(productId);
      if (index === -1) return prev;
      // Remove the first occurrence of the product
      const newCart = [...prev.slice(0, index), ...prev.slice(index + 1)];

      ls?.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  }

  function clearCart() {
    setCartProducts([]);
    ls?.removeItem("cart");
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
