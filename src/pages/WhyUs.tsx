import React from 'react';
import { CheckCircle, Clock, HeartHandshake, Shield, Wallet, Users } from 'lucide-react';

function WhyUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Why Choose Us</h1>
            <p className="text-xl max-w-2xl mx-auto">Discover the PolicyKendra difference and see why thousands trust us with their insurance needs</p>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Our experienced advisors provide personalized recommendations based on your unique needs</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
              <p className="text-gray-600">Get answers to your questions and support when you need it, 24/7</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <HeartHandshake className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Trusted Partner</h3>
              <p className="text-gray-600">Building long-term relationships through trust and exceptional service</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
              <p className="text-gray-600">Access to a wide range of insurance products from top providers</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Wallet className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Competitive Rates</h3>
              <p className="text-gray-600">Get the best coverage at the most competitive prices in the market</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our top priority, always</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"PolicyKendra made finding the right insurance policy simple and stress-free. Their team was incredibly helpful throughout the process."</p>
              <div className="font-semibold">- Kamal Wahi</div>
              <div className="text-sm text-gray-500">Business Owner</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"I've been with PolicyKendra for over 5 years now. Their customer service is exceptional, and they always go above and beyond."</p>
              <div className="font-semibold">- Puneet Jain</div>
              <div className="text-sm text-gray-500">Business Owner</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"The best insurance advisory service I've ever worked with. They truly understand their clients' needs and deliver accordingly."</p>
              <div className="font-semibold">- Sujit Barua</div>
              <div className="text-sm text-gray-500">Business Owner</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
