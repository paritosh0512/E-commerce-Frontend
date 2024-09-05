// CategoryCard.js
import React from 'react';

const CategoryCard = ({ image, label }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition duration-300">
      <img src={image} alt={label} className="w-20 h-20 object-cover rounded-md mb-2" />
      <p className="text-center font-medium">{label}</p>
    </div>
  );
};

export default CategoryCard;
