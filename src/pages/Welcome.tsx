import React from 'react';
import { Shield, Award, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Welcome() {
  const partnerLogos = [
    'images/pnb.png',
    'images/bajaj.jpg',
    'images/icicip.png',
    'images/hdfclife.jpg',
    'images/tata.png',
    'images/max.png'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Secure Your Future with PolicyKendra</h1>
            <p className="text-xl mb-8">Your trusted partner in finding the perfect insurance coverage</p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose PolicyKendra?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600">Wide range of insurance policies tailored to your needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Professional advisors to help you make informed decisions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">Dedicated support team available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white mb-8">Contact us today for a free consultation</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;