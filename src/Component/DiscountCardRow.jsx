import React from 'react';
import DiscountCard from './DiscountCard';

const DiscountCardRow = () => {
  const discounts = [
    {
      id: 1,
      title: 'Summer Sale',
      description: 'Get the best deals on summer collection!',
      percentage: '50%',
    },
    {
      id: 2,
      title: 'Winter Clearance',
      description: 'Exclusive discounts on winter wear.',
      percentage: '60%',
    },
    {
      id: 3,
      title: 'Flash Sale',
      description: 'Limited time offers, hurry up!',
      percentage: '30%',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {discounts.map((discount) => (
          <DiscountCard key={discount.id} discount={discount} />
        ))}
      </div>
    </div>
  );
};

export default DiscountCardRow;
