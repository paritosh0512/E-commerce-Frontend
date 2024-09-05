import React, { useState } from 'react';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 flex-wrap">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img src="logo_url" alt="Logo" className="w-12 md:w-16" /> {/* Responsive logo size */}
          <div className="ml-2 md:ml-4 hidden md:block">
            <span className="text-xs md:text-base font-semibold">Tata CLiQ Luxury</span> {/* Responsive text size, hidden on mobile */}
          </div>
        </div>

        {/* Middle Section: Search and Dropdowns */}
        <div className="flex-grow mx-4 w-full md:w-auto md:flex md:justify-center">
          <div className="flex items-center w-full space-y-4 md:space-y-0 md:space-x-4">
            {/* Search Bar */}
            <div className="flex-grow w-full">
              <input
                type="text"
                placeholder="Search for Products"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Categories Dropdown (hidden on mobile) */}
            <div className="relative hidden md:block">
              <button
                className="hover:text-gray-300"
                onClick={() => setShowCategories(!showCategories)}
              >
                Categories <span className="ml-1">&#9662;</span>
              </button>
              {showCategories && (
                <div className="absolute bg-white text-black rounded-md shadow-md mt-2 w-64 z-10">
                  <ul className="p-4">
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">Category 1</li>
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">Category 2</li>
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">Category 3</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Brands Dropdown (hidden on mobile) */}
            <div className="relative hidden md:block">
              <button
                className="hover:text-gray-300"
                onClick={() => setShowBrands(!showBrands)}
              >
                Brands <span className="ml-1">&#9662;</span>
              </button>
              {showBrands && (
                <div className="absolute bg-white text-black rounded-md shadow-md mt-2 w-64 z-10">
                  <ul className="p-4">
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">Brand 1</li>
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">Brand 2</li>
                    <li className="py-2 hover:bg-gray-100 cursor-pointer">Brand 3</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Links and Icons */}
        <div className="flex items-center space-x-4 justify-end w-full md:w-auto">
          {/* Show on desktop only */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300 text-sm">CLIQ Cash</a>
            <a href="#" className="hover:text-gray-300 text-sm">Gift Card</a>
            <a href="#" className="hover:text-gray-300 text-sm">CLIQ Care</a>
            <a href="#" className="hover:text-gray-300 text-sm">Track Orders</a>
          </div>

          {/* Sign in / Sign Up and Wishlist, Cart Icons */}
          <div className="flex items-center space-x-4">
            <a href="/signinsignup" className="hover:text-gray-300 text-sm">Sign in / Sign Up</a>
            <a href="#" className="hover:text-gray-300 hidden md:block">
              <i className="fas fa-heart"></i> {/* Wishlist Icon, hidden on mobile */}
            </a>
            <a href="#" className="hover:text-gray-300 hidden md:block">
              <i className="fas fa-shopping-bag"></i> {/* Cart Icon, hidden on mobile */}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
