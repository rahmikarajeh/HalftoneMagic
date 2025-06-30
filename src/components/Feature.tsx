import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

export function Feature({ title, description }: FeatureProps) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-lg font-medium text-black">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}