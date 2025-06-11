import { createContext, useContext, useState, useEffect } from 'react';
import * as api from '../api/cartApi';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], coupon: null });

  const loadCart = async () => {
    const data = await api.getCart();
    setCart(data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const existingItem = cart.items.find(item => item.id === product.id);
    const newItems = existingItem
      ? cart.items.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      : [...cart.items, { ...product, quantity: 1 }];
    
    const updatedCart = await api.updateCart({ ...cart, items: newItems });
    setCart(updatedCart);
  };

  const updateItem = async (id, quantity) => {
    const newItems = quantity > 0
      ? cart.items.map(item => item.id === id ? { ...item, quantity } : item)
      : cart.items.filter(item => item.id !== id);
    
    const updatedCart = await api.updateCart({ ...cart, items: newItems });
    setCart(updatedCart);
  };

  const applyDiscount = async (code) => {
    const coupon = await api.applyCoupon(code);
    if (coupon) {
      const updatedCart = await api.updateCart({ ...cart, coupon });
      setCart(updatedCart);
      return true;
    }
    return false;
  };

  const checkout = async () => {
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    await api.updateCart({ items: [], coupon: null });
    return orderNumber;
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      updateItem, 
      applyDiscount,
      checkout 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);