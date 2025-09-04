// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Format harga ke rupiah
export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// Format angka dengan pemisah ribuan
export const formatNumber = (number) => {
  return number.toLocaleString('id-ID');
};

// Validasi email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validasi nomor telepon Indonesia
export const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
  return phoneRegex.test(phone);
};

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Calculate shipping cost
export const calculateShippingCost = (method, city) => {
  const costs = {
    gosend: 15000,
    jne: 25000
  };
  
  // GO-Send hanya untuk Jabodetabek
  const jabodetabekCities = ['jakarta', 'bogor', 'depok', 'tangerang', 'bekasi'];
  const isJabodetabek = jabodetabekCities.some(city_name => 
    city.toLowerCase().includes(city_name)
  );
  
  if (method === 'gosend' && !isJabodetabek) {
    return costs.jne; // Fallback ke JNE jika bukan Jabodetabek
  }
  
  return costs[method] || costs.jne;
};

// Validate form data
export const validateCheckoutForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.length < 2) {
    errors.name = 'Nama harus diisi minimal 2 karakter';
  }
  
  if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
    errors.phone = 'Nomor telepon tidak valid';
  }
  
  if (!formData.address || formData.address.length < 10) {
    errors.address = 'Alamat harus diisi minimal 10 karakter';
  }
  
  if (!formData.city || formData.city.length < 2) {
    errors.city = 'Kota harus diisi';
  }
  
  if (!formData.postalCode || formData.postalCode.length < 5) {
    errors.postalCode = 'Kode pos harus diisi';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Local storage helpers
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};