import React from 'react';

const ImageCard = ({ image, title, description }) => {
  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
