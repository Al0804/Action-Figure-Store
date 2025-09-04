// ===========================================
// HEADER/NAVBAR COMPONENT
// ===========================================
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header = ({ 
  currentPage, 
  setCurrentPage, 
  getTotalItems, 
  setIsCheckoutOpen 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg flex items-center justify-center font-bold text-xl">
              AF
            </div>
            <span className="text-xl font-bold">Action Figure Store</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'home' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('products')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'products' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'about' ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'
              }`}
            >
              About
            </button>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="relative p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-white border-opacity-20 pt-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage('products');
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                About
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;