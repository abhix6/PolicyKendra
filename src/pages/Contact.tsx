import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps?q=28.6193074,77.0345689', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">Get in touch with our expert team for personalized insurance guidance</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">PolicyKendra 1st Floor
Plot No 20, Sewak Park , Near Dwarka Metro Piller No 771, Dwarka, New-Delhi, 110059<br />India</p>
                    <button
                      onClick={openGoogleMaps}
                      className="mt-2 text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      View on Google Maps
                      <MapPin className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 9911555604</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">contact.policykendra@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 6:30 PM<br/></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Form */}
            <div className="animate-slide-up">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfyrGclgt8uxXCIkINC2mseXHt_fCdoop0qlGenCmABIsiraA/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg shadow-md"
              >
                Loading form...
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
