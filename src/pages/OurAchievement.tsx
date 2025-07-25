import React from 'react';

function OurAchievement() {
  // Replace these URLs with your actual achievement photos
  const achievements = [
    {
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/33.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/28.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/29.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/30.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/31.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/32.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/1.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/2.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/3.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/4.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/5.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/6.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/7.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/8.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/9.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/10.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/11.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/12.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/13.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/14.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/15.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/16.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/17.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/18.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/19.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/20.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/21.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/22.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/23.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/24.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/25.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/26.jpg',
  title: ''
},
{
  image: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/27.jpg',
  title: ''
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
                <div className="font-semibold">- Kamal Wahi</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"I've been with PolicyKendra for over 6 years now. Their customer service is exceptional, and they always go above and beyond."</p>
                <div className="font-semibold">- Sujeet Barua</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"The best insurance advisory service I've ever worked with. They truly understand their clients' needs and deliver accordingly."</p>
                <div className="font-semibold">- Puneet Jain</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAchievement;
