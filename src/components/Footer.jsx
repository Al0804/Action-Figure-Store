// ===========================================
// FOOTER COMPONENT
// ===========================================
import React from 'react';

const Footer = ({ setCurrentPage, setSelectedCategory }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg flex items-center justify-center font-bold text-xl">
                AF
              </div>
              <span className="text-xl font-bold">Action Figure Store</span>
            </div>
            <p className="text-gray-400">
              Toko online terpercaya untuk action figure berkualitas tinggi dari berbagai franchise populer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => {
                    setSelectedCategory('marvel'); 
                    setCurrentPage('products');
                  }} 
                  className="hover:text-white transition-colors"
                >
                  Marvel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setSelectedCategory('dc'); 
                    setCurrentPage('products');
                  }} 
                  className="hover:text-white transition-colors"
                >
                  DC Comics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setSelectedCategory('anime'); 
                    setCurrentPage('products');
                  }} 
                  className="hover:text-white transition-colors"
                >
                  Anime
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setSelectedCategory('kamen rider'); 
                    setCurrentPage('products');
                  }} 
                  className="hover:text-white transition-colors"
                >
                  Kamen Rider
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    setSelectedCategory('super sentai'); 
                    setCurrentPage('products');
                  }} 
                  className="hover:text-white transition-colors"
                >
                  Super Sentai
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Pengiriman Cepat</li>
              <li>Pembayaran Aman</li>
              <li>Garansi Original</li>
              <li>Customer Service 24/7</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-2 text-gray-400">
              <p><i class="fa fa-address-book"></i> +62 21 1234 5678</p>
              <p><i class="fa fa-address-book"></i> +62 812 3456 7890</p>
              <p><i class="fa fa-envelope"></i> cs@actionfigure.store</p>
              <p><i class="fa fa-map-marker"></i> Jakarta Barat, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Action Figure Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;