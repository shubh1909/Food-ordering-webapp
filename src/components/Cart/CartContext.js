import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(p => p.id !== productId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, p) => (total + p.price), 0);
  };

  return (
    <CartContext.Provider 
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
