import Image from 'next/image';
import bgPic from '../asset/img/bg-pic.jpg';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa'; // Import icons from React Icons

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100">
      <Image
        src={bgPic}
        alt="Makeup background"
        layout="responsive"
        width={1920} // Adjust width as needed
        height={480} // Adjust height as needed
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold">Kara Frederick</h1>
      </div>
      <div className="absolute top-4 right-4 flex space-x-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-gray-300" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-white text-2xl hover:text-gray-300" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane className="text-white text-2xl hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;