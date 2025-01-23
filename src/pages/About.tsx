import React from 'react';
import { History, Target, Briefcase } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">About PolicyKendra</h1>
            <p className="text-xl max-w-2xl mx-auto">Your trusted partner in navigating the complex world of insurance since 2010</p>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, PolicyKendra has been at the forefront of insurance innovation, helping countless families and businesses secure their futures through comprehensive insurance solutions.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence and customer satisfaction has made us one of the most trusted names in the insurance industry, with a track record of delivering personalized solutions that meet our clients' unique needs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">20+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">5k+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <History className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Legacy of Trust</h3>
              <p className="text-gray-600">Building lasting relationships through transparency and reliability</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">Constantly evolving to meet the changing needs of our clients</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Professionalism</h3>
              <p className="text-gray-600">Maintaining the highest standards of service and expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
