import React, { useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

const Productimage = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="relative">
        <img src={currentImage} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold text-gray-800">{product.name}</h3>
        <div className="mt-2">
          <span className="text-lg font-bold text-green-600">${product.discountedPrice}</span>{' '}
          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
        </div>
        <div className="flex space-x-2 mt-4">
          <button className="bg-purple-600 text-white py-1 px-4 rounded hover:bg-purple-700 flex items-center">
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>
          <button className="bg-gray-200 text-gray-800 py-1 px-4 rounded hover:bg-gray-300 flex items-center">
            <FaHeart className="mr-2" /> Add to Wishlist
          </button>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={product.name}
            className={`w-12 h-12 object-cover rounded cursor-pointer ${currentImage === img ? 'border-2 border-purple-600' : ''}`}
            onClick={() => setCurrentImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Productimage;
