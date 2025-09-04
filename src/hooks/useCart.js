// ===========================================
// CART MANAGEMENT HOOK
// ===========================================
import { useState } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  // Menambahkan item ke keranjang
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Menghapus item dari keranjang
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update quantity item di keranjang
  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId 
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Mengosongkan keranjang
  const clearCart = () => {
    setCart([]);
  };

  // Mendapatkan total harga
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Mendapatkan total item
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Mengecek apakah item ada di keranjang
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  // Mendapatkan quantity item di keranjang
  const getItemQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isInCart,
    getItemQuantity
  };
};