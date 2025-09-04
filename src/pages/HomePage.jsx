// ===========================================
// HOME PAGE COMPONENT
// ===========================================
import React, { useEffect } from 'react';
import { Star, Truck, CreditCard } from 'lucide-react';
import model3D from '../Image/maze_qore_the_kenji_twins.glb';

// Import gambar untuk kategori
import marvelImage from '../Image/Marvel.jpeg';
import dcImage from '../Image/DC.jpeg';
import animeImage from '../Image/Anime.jpeg';
import kamenRiderImage from '../Image/Kamen Rider Series.jpeg';
import superSentaiImage from '../Image/Super Sentai.jpeg';

const HomePage = ({ setCurrentPage, setSelectedCategory }) => {
  useEffect(() => {
    // Load model-viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section dengan 3D Effect */}
      <section className="relative bg-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Koleksi Action Figure 
                <span className="text-gradient">
                  {' '}Terbaik
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Temukan action figure favorit dari Marvel, DC, Anime, Kamen Rider, dan Super Sentai dengan kualitas premium dan harga terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setCurrentPage('products')}
                  className="btn-primary"
                >
                  Belanja Sekarang
                </button>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all"
                >
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            
            {/* 3D Model Viewer */}
            <div className="relative">
              <div className="w-full h-96 md:h-128 transform rotate-3 hover:rotate-6 transition-transform duration-500 animate-float">
                <model-viewer
                  src={model3D}
                  alt="Maze Qore The Kenji Twins Action Figure"
                  auto-rotate
                  camera-controls
                  interaction-prompt="auto"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  environment-image="neutral"
                  shadow-intensity="1"
                  exposure="1"
                  tone-mapping="aces"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  }}
                ></model-viewer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-gray-600">
              Kami menyediakan action figure berkualitas tinggi dengan pelayanan terbaik
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kualitas Premium</h3>
              <p className="text-gray-600">
                Semua produk action figure kami adalah original dan berkualitas tinggi dari manufacturer resmi.
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pengiriman Cepat</h3>
              <p className="text-gray-600">
                Pengiriman dengan GO-Send untuk Jabodetabek dan JNE untuk seluruh Indonesia.
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pembayaran Mudah</h3>
              <p className="text-gray-600">
                Berbagai metode pembayaran: Transfer Bank, E-wallet (GoPay, OVO, DANA, ShopeePay).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories - Improved Responsive Layout */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kategori Populer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih dari berbagai kategori action figure favorit
            </p>
          </div>
          
          {/* Mobile: Single column, Tablet: 2 columns, Desktop: 5 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {[
              { 
                name: 'Marvel', 
                key: 'marvel',
                image: marvelImage
              },     
              { 
                name: 'DC', 
                key: 'dc',
                image: dcImage
              },
              { 
                name: 'Anime', 
                key: 'anime',  
                image: animeImage
              },
              { 
                name: 'Kamen Rider', 
                key: 'kamen rider',
                image: kamenRiderImage
              },
              { 
                name: 'Super Sentai', 
                key: 'super sentai',
                image: superSentaiImage
              }
            ].map((category, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCategory(category.key);
                  setCurrentPage('products');
                }}
                className="relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg group border-2 border-gray-200 hover:border-gray-300 bg-white"
              >
                {/* Image Container with proper aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-contain p-3"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                {/* Category Name */}
                <div className="p-3 bg-white">
                  <h3 className="text-sm md:text-base font-bold text-gray-900 text-center">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;