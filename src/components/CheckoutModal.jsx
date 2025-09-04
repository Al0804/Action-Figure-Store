// ===========================================
// CHECKOUT MODAL COMPONENT
// ===========================================
import React, { useState } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { formatNumber, calculateShippingCost, validateCheckoutForm } from '../utils/helpers';

const CheckoutModal = ({ 
  isOpen, 
  onClose, 
  cart, 
  updateCartQuantity, 
  removeFromCart, 
  getTotalPrice, 
  clearCart 
}) => {
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    shippingMethod: 'gosend'
  });
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [errors, setErrors] = useState({});

  const shippingCost = calculateShippingCost(shippingInfo.shippingMethod, shippingInfo.city);
  const totalWithShipping = getTotalPrice() + shippingCost;

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (checkoutStep === 2) {
      const validation = validateCheckoutForm(shippingInfo);
      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }
      setErrors({});
    }
    setCheckoutStep(prev => prev + 1);
  };

  const handleCheckout = () => {
    // Simulasi proses checkout
    alert('Pesanan berhasil! Kami akan mengirimkan konfirmasi melalui WhatsApp.');
    clearCart();
    setCheckoutStep(1);
    setShippingInfo({
      name: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      shippingMethod: 'gosend'
    });
    setPaymentMethod('bank');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {checkoutStep === 1 ? 'Keranjang Belanja' : 
               checkoutStep === 2 ? 'Informasi Pengiriman' : 'Pembayaran'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Step 1: Cart Review */}
          {checkoutStep === 1 && (
            <div>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                    {/* Perbaikan styling gambar */}
                    <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg p-2 border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                      <p className="text-gray-600">Rp {formatNumber(item.price)}</p>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-red-100 text-red-600 rounded ml-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Keranjang Kosong</h3>
                  <p className="text-gray-600">Tambahkan produk ke keranjang untuk melanjutkan</p>
                </div>
              ) : (
                <>
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total: Rp {formatNumber(getTotalPrice())}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleNextStep}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
                  >
                    Lanjut ke Pengiriman
                  </button>
                </>
              )}
            </div>
          )}

          {/* Step 2: Shipping Info */}
          {checkoutStep === 2 && (
            <div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.name}
                    onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})}
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Lengkap *
                </label>
                <textarea
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  rows={3}
                  className={`input-field ${errors.address ? 'border-red-500' : ''}`}
                  required
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kota *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                    className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kode Pos *
                  </label>
                  <input
                    type="text"
                    value={shippingInfo.postalCode}
                    onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                    className={`input-field ${errors.postalCode ? 'border-red-500' : ''}`}
                    required
                  />
                  {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Metode Pengiriman
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="gosend"
                      checked={shippingInfo.shippingMethod === 'gosend'}
                      onChange={(e) => setShippingInfo({...shippingInfo, shippingMethod: e.target.value})}
                      className="mr-2"
                    />
                    GO-Send (Jabodetabek) - Rp {formatNumber(15000)}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="jne"
                      checked={shippingInfo.shippingMethod === 'jne'}
                      onChange={(e) => setShippingInfo({...shippingInfo, shippingMethod: e.target.value})}
                      className="mr-2"
                    />
                    JNE (Seluruh Indonesia) - Rp {formatNumber(25000)}
                  </label>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setCheckoutStep(1)}
                  className="flex-1 btn-secondary"
                >
                  Kembali
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex-1 btn-primary"
                >
                  Lanjut ke Pembayaran
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {checkoutStep === 3 && (
            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Metode Pembayaran
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    Transfer Bank (BCA, Mandiri, BNI, BRI)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="gopay"
                      checked={paymentMethod === 'gopay'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    GoPay
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="ovo"
                      checked={paymentMethod === 'ovo'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    OVO
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="dana"
                      checked={paymentMethod === 'dana'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    DANA
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="shopeepay"
                      checked={paymentMethod === 'shopeepay'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mr-2"
                    />
                    ShopeePay
                  </label>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Ringkasan Pesanan</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>Rp {formatNumber(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ongkos Kirim:</span>
                    <span>Rp {formatNumber(shippingCost)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>Rp {formatNumber(totalWithShipping)}</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setCheckoutStep(2)}
                  className="flex-1 btn-secondary"
                >
                  Kembali
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;