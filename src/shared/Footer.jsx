import React from 'react';
import Div from '../components/Div';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

const Footer = () => {
    return (
        <footer className="bg-[#333] text-white p-8">
        <Div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 ">
          <Div className="text-center md:text-left md:w-1/3">
            <Heading className="text-xl mb-4 ">About Us</Heading>
            <Paragraph className="max-w-xs mx-auto md:mx-0">
              We are committed to providing the best services. Feel free to reach out to us at any time.
            </Paragraph>
          </Div>
      
          <Div className="text-center md:w-1/3">
            <Heading className="text-xl mb-4">Quick Links</Heading>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white hover:text-yellow-400 ">Home</a></li>
              <li><a href="#about" className="text-white hover:text-yellow-400 ">About</a></li>
              <li><a href="#services" className="text-white hover:text-yellow-400 ">Services</a></li>
              <li><a href="#contact" className="text-white hover:text-yellow-400 ">Contact</a></li>
            </ul>
          </Div>
      
          <Div className="text-center md:w-1/3">
            <Heading className="text-xl mb-4">Follow Us</Heading>
            <ul className="flex justify-center space-x-4">
              <li className="cursor-pointer hover:text-yellow-400 ">Facebook</li>
              <li className="cursor-pointer hover:text-yellow-400 ">Twitter</li>
              <li className="cursor-pointer hover:text-yellow-400 ">Instagram</li>
            </ul>
          </Div>
        </Div>
      
        <Div className="mt-8 text-center border-t border-gray-600 pt-4 text-sm">
          <Paragraph>&copy; 2024 Stead Fast. All rights reserved.</Paragraph>
        </Div>
      </footer>
      
    );
};

export default Footer;