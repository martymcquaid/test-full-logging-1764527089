import React from 'react';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="text-blue-600 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;