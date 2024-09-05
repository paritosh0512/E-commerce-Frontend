// CategoriesSection.js
import React from 'react';
import CategoryCard from './CategoryCard';

// Sample data for categories
const categories = [
  { image: 'https://assets.tatacliq.com/medias/sys_master/images/51869107945502.jpg', label: 'Westside' },
  { image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108011038.jpg', label: 'Womenswear' },
  { image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108076574.jpg', label: 'Menswear' },
  { image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108142110.jpg', label: 'Footwear' },
  { image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108207646.jpg', label: 'Beauty' },
  { image: 'https://assets.tatacliq.com/medias/sys_master/images/51869108273182.jpg', label: 'Watches' },
 
];

const CategoriesSection = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} image={category.image} label={category.label} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
