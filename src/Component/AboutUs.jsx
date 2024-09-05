import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] md:h-[600px]" style={{ backgroundImage: 'url("https://via.placeholder.com/1200x600")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">About Our Store</h1>
          <p className="mt-4 text-lg md:text-xl">
            Delivering quality products with exceptional service for your everyday needs.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At our e-commerce store, we provide a wide range of quality products, ensuring customer satisfaction and competitive pricing. We specialize in delivering top-notch goods across multiple categories, including electronics, fashion, home & living, and more. Our commitment to excellence drives us to innovate continuously and improve the shopping experience for all our customers.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide a diverse range of quality products with a focus on customer satisfaction and innovative solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a leading global e-commerce platform by offering a seamless shopping experience for customers worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Integrity, customer-first approach, and continuous innovation are the values that define our success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our dedicated team works tirelessly to ensure the best shopping experience for our customers.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img className="mx-auto h-24 w-24 rounded-full object-cover" src="https://via.placeholder.com/100" alt="Team Member" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img className="mx-auto h-24 w-24 rounded-full object-cover" src="https://via.placeholder.com/100" alt="Team Member" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img className="mx-auto h-24 w-24 rounded-full object-cover" src="https://via.placeholder.com/100" alt="Team Member" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Michael Brown</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img className="mx-auto h-24 w-24 rounded-full object-cover" src="https://via.placeholder.com/100" alt="Team Member" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Emily Johnson</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold">Join Us on Our Journey!</h2>
        <p className="mt-4 text-lg">Discover our products and experience seamless shopping like never before.</p>
        <button className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-100">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
