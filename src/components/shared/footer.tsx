import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Grad</h2>
          <p className="text-gray-400">
            Bringing you closer to the things that matter most. Connect with us on social media or send us a message.
          </p>
          <div className="flex mt-4 gap-4">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-500 transition">About</a></li>
            <li><a href="/courses" className="hover:text-yellow-500 transition">Courses</a></li>
            <li><a href="/contact" className="hover:text-yellow-500 transition">Contact</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Main Street, Your City</p>
          <p className="text-gray-400">+998 90 123 45 67</p>
          <p className="text-gray-400">info@yourbrand.com</p>
        </div>
      </div>


      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
