import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    .test(email)) {
      setError('Please enter a valid email.');
    } else {
      setError('');
      // Handle successful submission
      console.log('Email submitted: ', email);
    }
  };

  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-l-lg p-2"
          placeholder="Your email"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-lg">Subscribe</button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default NewsletterForm;