import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Transform Your Business with Our SaaS Product</h1>
      <p className="mb-8">Start your free trial today!</p>
      <div>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg mr-4">Get Started</button>
        <button className="border border-white px-6 py-2 rounded-lg">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;