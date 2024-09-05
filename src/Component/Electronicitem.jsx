import React, { useState } from 'react';

const Electronicitem = () => {
  const [selectedImage, setSelectedImage] = useState('https://via.placeholder.com/400');

  const images = [
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/400/0000FF',
    'https://via.placeholder.com/400/008000',
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start p-8">
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <img src={selectedImage} alt="Product" className="w-full rounded-lg shadow-lg mb-4" />
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => setSelectedImage(image)}
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${selectedImage === image ? 'ring-2 ring-blue-500' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-8">
        <h2 className="text-2xl font-bold mb-4">Product Title</h2>
        <p className="text-gray-700 mb-4">This is a detailed description of the product. It includes all the necessary details that the user needs to know before making a purchase.</p>
        <div className="flex items-center space-x-4 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
            Add to Cart
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none">
            Add to Wishlist
          </button>
        </div>
        <p className="text-lg font-semibold">$99.99</p>
      </div>
    </div>
  );
};

export default Electronicitem;
