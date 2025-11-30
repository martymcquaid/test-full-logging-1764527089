import React from 'react';
import FeatureCard from './FeatureCard';
import { FaRocket, FaShieldAlt, FaUsers, FaCog, FaChartLine, FaSupport } from 'react-icons/fa';

const Features: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <FeatureCard icon={<FaRocket />} title="Fast Performance" description="Experience lightning-fast performance with our solution." />
        <FeatureCard icon={<FaShieldAlt />} title="Secure" description="Your data is safe with our top-notch security features." />
        <FeatureCard icon={<FaUsers />} title="User Friendly" description="Intuitive interface that anyone can use." />
        <FeatureCard icon={<FaCog />} title="Customizable" description="Easily customize features to suit your needs." />
        <FeatureCard icon={<FaChartLine />} title="Analytics" description="Get insights to help you grow your business." />
        <FeatureCard icon={<FaSupport />} title="24/7 Support" description="We're here to help you at any time." />
      </div>
    </div>
  );
};

export default Features;