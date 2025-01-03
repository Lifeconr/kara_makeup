'use client'; 
import Image from "next/image";
import bgPic from "../asset/img/bg-pic.jpg";
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const slides = [
    "Your Personal Makeup Artist for Unforgettable Moments",
    "Enhancing Natural Beauty with Professional Techniques",
    "Passion Meets Perfection in Makeup Artistry & Beauty",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative h-72 sm:h-[30rem] lg:h-[40rem]">
        <Image
          src={bgPic}
          alt="Makeup background"
          layout="fill"
          className="object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4 py-6">
      <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold mb-24 lg:mb-36 animate-fade-in">
        Welcome to Kara Ferderic
      </h1>
        {/* Slideshow */}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 ">
      <p className="text-sm sm:text-base lg:text-2xl font-medium italic animate-fade-in">
          {slides[currentSlide]}
        </p>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-4 justify-center flex space-x-12 px-12">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-white text-2xl hover:text-gray-300 transition" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-white text-2xl hover:text-gray-300 transition" />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegramPlane className="text-white text-2xl hover:text-gray-300 transition" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-white text-2xl hover:text-gray-300 transition" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
