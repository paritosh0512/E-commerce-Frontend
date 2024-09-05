import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Laptop screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Tablet screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  const products = [
    { id: 1, image: 'https://img.freepik.com/free-photo/view-hawaiian-shirt-with-pants-sneakers_23-2149366039.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', name: 'Product 1' },
    { id: 2, image: 'https://img.freepik.com/premium-photo/men-fashion-accessories-bag-pant-shirt-shoes-gift-box-bag-shopping-green-yellow-background_1108314-383079.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', name: 'Product 2' },
    { id: 3, image: 'https://img.freepik.com/free-photo/view-hawaiian-shirt-with-sneakers-hat_23-2149366033.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', name: 'Product 3' },
    { id: 4, image: 'https://img.freepik.com/premium-photo/men-fashion-accessories-bag-pant-shirt-shoes-gift-box-bag-shopping-green-yellow-background_1108314-382415.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', name: 'Product 4' },
    { id: 5, image: 'https://img.freepik.com/premium-photo/men-fashion-accessories-bag-pant-shirt-shoes-gift-box-bag-shopping-green-yellow-background_1254992-89303.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid', name: 'Product 5' },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Sale of The Day</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
              <div className="mt-2 text-center">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
