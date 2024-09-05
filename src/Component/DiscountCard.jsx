import React from 'react';

const DiscountCard = ({ discount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{discount.title}</h3>
        <p className="mt-4 text-gray-600">{discount.description}</p>
        <div className="mt-4 text-2xl font-bold text-red-500">{discount.percentage} OFF</div>
      </div>
    </div>
  );
};

export default DiscountCard;
