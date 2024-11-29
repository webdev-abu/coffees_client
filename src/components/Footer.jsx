import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "../assets/images/more/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-footer py-12">
      <div className="w-10/12 mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <div className="flex justify-center md:justify-start">
            <img
              src={Logo} // Replace with your logo path
              alt="Espresso Emporium"
              className="w-12 h-12"
            />
          </div>
          <h2 className="text-2xl font-bold text-brown-600">
            Espresso Emporium
          </h2>
          <p className="text-gray-600">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-brown-600 hover:text-brown-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-brown-600 hover:text-brown-800">
              <FaTwitter />
            </a>
            <a href="#" className="text-brown-600 hover:text-brown-800">
              <FaInstagram />
            </a>
            <a href="#" className="text-brown-600 hover:text-brown-800">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-brown-600" />
              <span>+88 01533 333 333</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-brown-600" />
              <span>info@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-brown-600" />
              <span>72, Wall Street, King Road, Dhaka</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold text-center md:text-left text-brown-600 mb-4">
            Connect with Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full"
            ></textarea>
            <button className="btn btn-brown w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        Copyright © 2024 Espresso Emporium | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
