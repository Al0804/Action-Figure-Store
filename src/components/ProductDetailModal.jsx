// ===========================================
// PRODUCT DETAIL MODAL COMPONENT
// ===========================================
import React from 'react';
import { X, Star } from 'lucide-react';
import { formatNumber } from '../utils/helpers';

const ProductDetailModal = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Detail Produk</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 flex items-center justify-center rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[800px] object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <div>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>

              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.rating})</span>
              </div>

              <p className="text-gray-600">{product.description}</p>

              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-600">
                  Rp {formatNumber(product.price)}
                </p>
                <p className="text-sm text-gray-500">Stok tersedia: {product.stock}</p>
              </div>

              <button
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                disabled={product.stock === 0}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;