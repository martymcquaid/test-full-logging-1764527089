import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import NewsletterForm from '../components/NewsletterForm';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <NewsletterForm />
    </div>
  );
};

export default LandingPage;