// ===========================================
// ABOUT PAGE COMPONENT
// ===========================================
import React from 'react';
import { Phone, Mail, MapPin, Truck, CreditCard, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* About Hero */}
        <div className="bg-hero text-white rounded-2xl p-12 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Action Figure Store</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Destinasi terbaik untuk para kolektor action figure di Indonesia
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About Content */}
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Action Figure Store adalah toko online terpercaya yang mengkhususkan diri dalam penjualan 
                action figure berkualitas tinggi dari berbagai franchise populer seperti Marvel, DC Comics, 
                Anime, Kamen Rider, dan Super Sentai.
              </p>
              <p>
                Didirikan oleh para penggemar action figure sejati, kami memahami passion dan dedikasi 
                para kolektor. Setiap produk yang kami jual telah melalui proses kurasi ketat untuk 
                memastikan keaslian dan kualitas terbaik.
              </p>
              <p>
                Dengan pengalaman lebih dari 5 tahun di industri ini, kami telah melayani ribuan 
                pelanggan di seluruh Indonesia dan terus berkomitmen untuk memberikan pelayanan 
                terbaik kepada komunitas pecinta action figure.
              </p>
              <p>
                Visi kami adalah menjadi platform terdepan di Indonesia untuk koleksi action figure 
                premium dengan layanan customer service yang excellent dan pengalaman berbelanja 
                yang tak terlupakan.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Customer Service</h3>
                  <p className="text-gray-600">+62 21 1234 5678</p>
                  <p className="text-gray-600">WhatsApp: +62 812 3456 7890</p>
                  <p className="text-sm text-gray-500">Senin - Minggu: 09:00 - 21:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">cs@actionfigure.store</p>
                  <p className="text-gray-600">info@actionfigure.store</p>
                  <p className="text-sm text-gray-500">Respon dalam 24 jam</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Alamat</h3>
                  <p className="text-gray-600">
                    Jl. Kebon Jeruk Raya No. 123<br/>
                    Kebon Jeruk, Jakarta Barat 11530<br/>
                    DKI Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-12 card p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Layanan Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pengiriman</h3>
              <p className="text-gray-600">
                GO-Send untuk area Jabodetabek (1-2 hari) dan JNE untuk seluruh Indonesia (2-7 hari)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pembayaran</h3>
              <p className="text-gray-600">
                Transfer Bank (BCA, Mandiri, BNI, BRI), E-wallet (GoPay, OVO, DANA, ShopeePay)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Garansi</h3>
              <p className="text-gray-600">
                100% Original dengan garansi keaslian produk dan penggantian jika ada kerusakan
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Misi</h3>
            <p className="text-gray-600">
              Menyediakan action figure berkualitas tinggi dengan harga terjangkau dan pelayanan terbaik
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Komunitas</h3>
            <p className="text-gray-600">
              Membangun komunitas kolektor action figure yang solid dan saling mendukung
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inovasi</h3>
            <p className="text-gray-600">
              Terus berinovasi dalam teknologi dan layanan untuk pengalaman berbelanja yang lebih baik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;