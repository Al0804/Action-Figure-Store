import React from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { searchProducts } from '../data/products';

const ProductsPage = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory,
  addToCart,
  setSelectedProduct 
}) => {
  const filteredProducts = searchProducts(searchTerm, selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search Bar - Full width on mobile, flex-grow on desktop */}
            <div className="flex-1 lg:flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
              <input
                type="text"
                placeholder="Cari action figure berdasarkan nama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-base"
              />
            </div>
            
            {/* Category Filter - Full width on mobile, auto width on desktop */}
            <div className="w-full lg:w-auto lg:min-w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-base bg-white"
              >
                <option value="all">Semua Kategori</option>
                <option value="marvel">Marvel</option>
                <option value="dc">DC</option>
                <option value="anime">Anime</option>
                <option value="kamen rider">Kamen Rider</option>
                <option value="super sentai">Super Sentai</option>
              </select>
            </div>

            {/* Clear Search Button - Only show when there's a search term */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
              >
                Hapus Pencarian
              </button>
            )}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {selectedCategory === 'all' ? 'Semua Produk' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h2>
          <p className="text-gray-600">
            Menampilkan {filteredProducts.length} produk
            {searchTerm && ` untuk "${searchTerm}"`}
            {selectedCategory !== 'all' && ` dalam kategori ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Produk Tidak Ditemukan</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {searchTerm 
                ? `Tidak ada produk yang ditemukan untuk "${searchTerm}"`
                : 'Coba ubah kata kunci pencarian atau kategori'
              }
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;