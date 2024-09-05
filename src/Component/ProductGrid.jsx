import React from 'react';
import Product from './Product';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      images: [
        'https://img.freepik.com/free-photo/leather-suitcase-packed-with-shoes-clothes_23-2149433975.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/leather-shoes-wooden-background_1203-7618.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid',
        'https://img.freepik.com/free-photo/travel-still-life-collection_23-2148837279.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid'
      ],
      originalPrice: 100,
      discountedPrice: 80,
      discount: 20,
      discountColor: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Product 2',
      images: [
        'https://img.freepik.com/premium-photo/men-fashion-accessories-bag-pant-shirt-shoes-gift-box-bag-shopping-pastel-blue-background_776674-1046135.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid',
        'https://img.freepik.com/premium-photo/men-fashion-accessories-bag-pant-shirt-shoes-gift-box-bag-shopping-pastel-blue-background_776674-1046582.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid',
        'https://img.freepik.com/premium-photo/sports-accessories-flat-design-side-view-active-theme-3d-render-splitcomplementary-color-scheme_989016-242.jpg?uid=R158385058&ga=GA1.1.741262549.1719931465&semt=ais_hybrid'
      ],
      originalPrice: 200,
      discountedPrice: 150,
      discount: 25,
      discountColor: 'bg-blue-500'
    },
    // Add more product objects here...
  ];

  // Generate 20 products by duplicating the first two products (for demonstration)
  const productList = Array.from({ length: 80 }, (_, i) => ({
    ...products[i % products.length],
    id: i + 1
  }));

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
