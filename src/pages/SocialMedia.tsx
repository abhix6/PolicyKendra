import React from 'react';
import { Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';

function SocialMedia() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Connect With Us</h1>
            <p className="text-xl max-w-2xl mx-auto">Stay updated with our latest news and updates</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a 
              href="https://www.youtube.com/@policykendra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 p-8 rounded-lg hover:bg-red-50 transition-all duration-300 animate-slide-up"
            >
              <Youtube className="w-16 h-16 text-red-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-2">YouTube</h3>
              <p className="text-gray-600 text-center">Watch our insurance guides and tips</p>
            </a>

            <a 
              href="https://www.instagram.com/policykendra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 p-8 rounded-lg hover:bg-pink-50 transition-all duration-300 animate-slide-up"
            >
              <Instagram className="w-16 h-16 text-pink-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-2">Instagram</h3>
              <p className="text-gray-600 text-center">Follow our daily updates and stories</p>
            </a>

            <a 
              href="https://www.facebook.com/policykendra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 p-8 rounded-lg hover:bg-blue-50 transition-all duration-300 animate-slide-up"
            >
              <Facebook className="w-16 h-16 text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-2">Facebook</h3>
              <p className="text-gray-600 text-center">Join our community discussions</p>
            </a>

            <a 
              href="https://www.linkedin.com/company/policykendra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 p-8 rounded-lg hover:bg-blue-50 transition-all duration-300 animate-slide-up"
            >
              <Linkedin className="w-16 h-16 text-blue-800 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-center">Connect with our professionals</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;