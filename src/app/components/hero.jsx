import Image from "next/image";
import bgPic from "../asset/img/bg-pic.jpg";
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <Image
        src={bgPic}
        alt="Makeup background"
        layout="responsive"
        width={1920}
        height={280}
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
        <h1 className="text-4xl font-bold sm:text-5xl">Kara Frederick</h1>
        <h2 className="text-lg sm:text-2xl mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </div>

      {/* Social Media Links */}
      <div className="absolute top-4 right-4 flex space-x-4">
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
      </div>
    </div>
  );
};

export default HeroSection;
