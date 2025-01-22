import React from 'react';

function AssociatedBrands() {
  const insurancePartners = {
    life: [
      { name: 'PNB MetLife', logo: 'main/images/pnb.png' },
      { name: 'Bajaj Allianz', logo: 'images/bajaj.jpg' },
      { name: 'ICICI Prudential', logo: 'images/icicip.png' },
      { name: 'HDFC Life', logo: 'images/hdfclife.jpg' },
      { name: 'Tata AIA', logo: 'images/tata.png' },
      { name: 'Max Life', logo: 'images/max.png' }
    ],
    health: [
      { name: 'Niva Bupa', logo: 'images/niva.png' },
      { name: 'Care Health', logo: 'images/car.png' },
      { name: 'Star Health', logo: 'images/star.png' },
      { name: 'HDFC ERGO', logo: 'images/hdfcergo.jpg' },
      { name: 'ICICI Lombard', logo: 'images/icicil.jpg' }
    ],
    motor: [
      { name: 'Bajaj Allianz Car Insurance', logo: 'images/bajaj.jpg' },
      { name: 'ICICI Lombard Car Insurance', logo: 'images/icicil.jpg' },
      { name: 'Cholamandalam MS Car Insurance', logo: 'images/chola.png' }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Our Trusted Partners</h1>
            <p className="text-xl max-w-2xl mx-auto">Collaborating with industry leaders to provide you the best insurance solutions</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Life Insurance Partners */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Life Insurance Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {insurancePartners.life.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 mx-auto mb-4 object-contain transition-all duration-300 group-hover:scale-110" 
                    />
                    <p className="text-center font-medium text-gray-800">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Insurance Partners */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">
              Health Insurance Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {insurancePartners.health.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 mx-auto mb-4 object-contain transition-all duration-300 group-hover:scale-110" 
                    />
                    <p className="text-center font-medium text-gray-800">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Motor Insurance Partners */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
              Motor Insurance Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insurancePartners.motor.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 mx-auto mb-4 object-contain transition-all duration-300 group-hover:scale-110" 
                    />
                    <p className="text-center font-medium text-gray-800">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssociatedBrands;
