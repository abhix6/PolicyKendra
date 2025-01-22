import React from 'react';

function AssociatedBrands() {
  const insurancePartners = {
    life: [
      { name: 'PNB MetLife', logo: 'https://content.jdmagicbox.com/comp/kolkata/d8/033pxx33.xx33.151127201519.k1d8/catalogue/pnb-metlife-insurance-kolkata-pnb-metlife-insurance-3cor2.jpg' },
      { name: 'Bajaj Allianz', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3x9ohHbvh0r8IRRgR6j-5Piy0ghESNmp4w&s' },
      { name: 'ICICI Prudential', logo: 'https://assets.upstox.com/content/assets/images/logos/NSE_EQ%7CINE726G01019.png' },
      { name: 'HDFC Life', logo: 'https://i.pinimg.com/736x/43/b6/b4/43b6b4a29c8ce1dc69409903ffc4925c.jpg' },
      { name: 'Tata AIA', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoXFvZMVxCqmazwTYAT0TCkvPkejWjfsyAg&s' },
      { name: 'Max Life', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3gV1PnoPepP5sNc9fpRcSuq-LopV16VzSw&s' }
    ],
    health: [
      { name: 'Niva Bupa', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mxRtoPUYG8uyC3DekkrQH-g8hHQvAVJw5Q&s' },
      { name: 'Care Health', logo: 'https://e7.pngegg.com/pngimages/579/831/png-clipart-vehicle-insurance-home-insurance-insurance-agent-health-insurance-others-miscellaneous-logo.png' },
      { name: 'Star Health', logo: 'https://play-lh.googleusercontent.com/JEcrbamGiWvHjDBubpjIfDAZ5-aqy-z1oDXag4XSDptHSYtGftWcH_sfENba-lSlBQ' },
      { name: 'HDFC ERGO', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/HDFC-Ergo-logo.png' },
      { name: 'ICICI Lombard', logo: 'https://yt3.googleusercontent.com/Cb4yUkaUQO0wQXGMLARg5mVG_gP7NplJfvQYLiOPftml2tAgq1ChvTcEKBIpoCzXdYteXZ0ICA=s900-c-k-c0x00ffffff-no-rj' }
    ],
    motor: [
      { name: 'Bajaj Allianz Car Insurance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3x9ohHbvh0r8IRRgR6j-5Piy0ghESNmp4w&s' },
      { name: 'ICICI Lombard Car Insurance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAcg3Nl-cdYWbKbFi0rJRo0xASHG5aCixCBg&s' },
      { name: 'Cholamandalam MS Car Insurance', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUA7Ur0Turi441GiVfuBGNch260XZrdEHSHA&s' }
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
