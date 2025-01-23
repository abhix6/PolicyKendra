import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import Welcome from './pages/Welcome';
import About from './pages/About';
import OurManagement from './pages/OurManagement';
import Contact from './pages/Contact';
import SocialMedia from './pages/SocialMedia';
import AssociatedBrands from './pages/AssociatedBrands';
import OurAchievement from './pages/OurAchievement';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">PolicyKendra</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Welcome
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </Link>
                <Link to="/management" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">
                  Our Management
                </Link>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link to="/social" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Social Media
                </Link>
                <Link 
                  to="/brands" 
                  className="text-blue-600 font-semibold px-3 py-2 rounded-md text-sm bg-blue-50 border-2 border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                >
                  Associated Brands
                </Link>
                <Link 
                  to="/achievement" 
                  className="text-red-600 font-semibold px-3 py-2 rounded-md text-sm bg-red-50 border-2 border-red-200 hover:bg-red-100 transition-colors duration-300"
                >
                  Our Achievements
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Welcome
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/management"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Management
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/social"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Social Media
                </Link>
                <Link
                  to="/brands"
                  className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50 hover:bg-blue-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Associated Brands
                </Link>
                <Link
                  to="/achievement"
                  className="block px-3 py-2 rounded-md text-base font-medium text-red-600 bg-red-50 hover:bg-red-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Achievements
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<OurManagement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<SocialMedia />} />
            <Route path="/brands" element={<AssociatedBrands />} />
            <Route path="/achievement" element={<OurAchievement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
