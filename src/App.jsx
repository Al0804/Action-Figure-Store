// ===========================================
// MAIN APPLICATION COMPONENT
// ===========================================
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ProductDetailModal from './components/ProductDetailModal';
import CheckoutModal from './components/CheckoutModal';
import { useCart } from './hooks/useCart';

const App = () => {
  // State untuk halaman saat ini
  const [currentPage, setCurrentPage] = useState('home');
  
  // State untuk pencarian dan filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // State untuk modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  
  // Custom hook untuk manajemen keranjang
  const {
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  // Render halaman berdasarkan currentPage
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            setCurrentPage={setCurrentPage}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'products':
        return (
          <ProductsPage
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            addToCart={addToCart}
            setSelectedProduct={setSelectedProduct}
          />
        );
      case 'about':
        return <AboutPage />;
      default:
        return (
          <HomePage 
            setCurrentPage={setCurrentPage}
            setSelectedCategory={setSelectedCategory}
          />
        );
    }
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getTotalItems={getTotalItems}
        setIsCheckoutOpen={setIsCheckoutOpen}
      />
      
      {/* Main Content */}
      <main>
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        setSelectedCategory={setSelectedCategory}
      />
      
      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
      
      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
        clearCart={clearCart}
      />
    </div>
  );
};

export default App;