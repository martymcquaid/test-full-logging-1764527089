import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div className="flex justify-center gap-6">
        <div className="border rounded-lg p-6 text-center bg-gray-100">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="text-2xl font-bold mb-4">$0</p>
          <p>Basic features for individuals.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Choose Plan</button>
        </div>
        <div className="border rounded-lg p-6 text-center bg-blue-600 text-white">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-2xl font-bold mb-4">$29</p>
          <p>Advanced features for small teams.</p>
          <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded">Choose Plan</button>
        </div>
        <div className="border rounded-lg p-6 text-center bg-gray-100">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="text-2xl font-bold mb-4">$99</p>
          <p>All features for large organizations.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;