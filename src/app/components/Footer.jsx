'use client';
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import profilepic from "../asset/img/pp.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Profile Picture and Brand Name */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <Image
              src={profilepic}
              alt="Profile Picture"
              className="w-20 h-20 rounded-full border-2 border-white"
            />
            <h1 className="text-xl font-bold">Kara Frederick</h1>
          </div>

          {/* Right Side: Buttons */}
          <div className="flex flex-col items-center space-y-4 md:items-end">
            <button
              onClick={() => {
                alert("Share functionality coming soon!");
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-semibold transition"
            >
              Share
            </button>
            <button
              onClick={() => {
                alert("Add to Contact functionality coming soon!");
              }}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md font-semibold transition"
            >
              Add to Contact
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-8">
          <p>&copy; 2024 Kara Frederick | All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition flex items-center space-x-1"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition flex items-center space-x-1"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition flex items-center space-x-1"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;