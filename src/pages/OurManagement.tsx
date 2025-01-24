import React from 'react';

function OurManagement() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Our Management</h1>
            <p className="text-xl max-w-2xl mx-auto">Meet the visionary leaders behind PolicyKendra</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Founder Section */}
          <div className="mb-20 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 group-hover:scale-105">
                  {/* Replace the src with your actual photo */}
                  <img 
                    src="https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/boss.jpg"
                    alt="Anand Kumar"
                    className="w-full h-[700px] object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-purple-800 mb-4">ANAND KUMAR</h2>
                <p className="text-xl text-purple-600 mb-6">Founder</p>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    With over two decades of experience in the insurance industry, Anand Kumar has been a pioneering force in revolutionizing how insurance services are delivered in India. His vision of making insurance accessible and understandable to everyone has been the driving force behind PolicyKendra's success.
                  </p>
                  <p className="mb-4">
                    Under his leadership, PolicyKendra has grown from a small consultancy to one of the most trusted names in insurance advisory, serving thousands of satisfied clients across the country.
                  </p>
                  <p>
                    His commitment to transparency, customer service, and innovative solutions has set new standards in the industry, earning him numerous accolades and recognition from leading insurance providers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Co-Founder Section */}
          <div className="animate-slide-up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold text-purple-800 mb-4">VIDYA JHA</h2>
                <p className="text-xl text-purple-600 mb-6">Co-Founder</p>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Vidya Jha brings a wealth of expertise in risk management and customer relations to PolicyKendra. Her innovative approach to insurance solutions has helped countless families and businesses secure their future with confidence.
                  </p>
                  <p className="mb-4">
                    As Co-Founder, she has been instrumental in developing PolicyKendra's comprehensive suite of insurance products and services, ensuring that each client receives personalized attention and tailored solutions.
                  </p>
                  <p>
                    Her dedication to excellence and customer satisfaction has been crucial in establishing PolicyKendra as a leader in the insurance advisory sector.
                  </p>
                </div>
              </div>
              <div className="relative group order-1 md:order-2">
                <div className="overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 group-hover:scale-105">
                  {/* Replace the src with your actual photo */}
                  <img 
                    src="https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/co-founder.jpg"
                    alt="Vidya Jha"
                    className="w-full h-[700px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurManagement;
