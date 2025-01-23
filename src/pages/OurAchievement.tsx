import React from 'react';

function OurAchievement() {
  // Replace these URLs with your actual achievement photos
  const achievements = [
    {
      image: 'https://drive.google.com/file/d/1rSORDm94mDsjF0jZp0LG6iyNfFiDziwS/preview" width="640" height="480" allow="autoplay',
      title: 'Award of excellence'
    },
    {
      image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Excellence in Customer Service'
    },
    {
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Industry Leadership Award'
    },
    {
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Top Insurance Broker 2022'
    },
    {
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Customer Satisfaction Award'
    },
    {
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Digital Innovation Award'
    },
    {
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Best Insurance Solutions 2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Service Excellence Certificate'
    },
    {
      image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Insurance Leader Award'
    },
    {
      image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Best Customer Experience'
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Innovation Excellence'
    },
    {
      image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Outstanding Performance 2023'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Our Achievements</h1>
            <p className="text-xl max-w-2xl mx-auto">A testament to our commitment to excellence</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Achievement Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-[300px]">
                  <img 
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold">{achievement.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Testimonials Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"PolicyKendra made finding the right insurance policy simple and stress-free. Their team was incredibly helpful throughout the process."</p>
                <div className="font-semibold">- Sarah Johnson</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"I've been with PolicyKendra for over 5 years now. Their customer service is exceptional, and they always go above and beyond."</p>
                <div className="font-semibold">- Michael Chen</div>
                <div className="text-sm text-gray-500">Family Insurance</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"The best insurance advisory service I've ever worked with. They truly understand their clients' needs and deliver accordingly."</p>
                <div className="font-semibold">- Emily Rodriguez</div>
                <div className="text-sm text-gray-500">Healthcare Professional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAchievement;
