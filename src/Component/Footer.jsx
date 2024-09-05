import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are a leading e-commerce platform offering a wide range of products to cater to all your needs. Our goal is to provide the best shopping experience.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-white text-purple-500 p-2 rounded-full hover:bg-purple-700 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-purple-500 p-2 rounded-full hover:bg-purple-700 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="bg-white text-purple-500 p-2 rounded-full hover:bg-purple-700 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-purple-500 p-2 rounded-full hover:bg-purple-700 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        © 2024 E-commerce, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
