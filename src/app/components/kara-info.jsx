'use client';
import Image from "next/image";
import profilepic from "../asset/img/pp.jpg";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const KaraInfo = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-[#edf6f9]">
      {/* Background and layout */}
      <div className="shadow-md rounded-lg p-6 bg-white">
        {/* Profile and description section */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <Image
            src={profilepic}
            alt="Kara Frederick"
            width={600}
            height={300}
            className="rounded-2xl mb-4 md:mb-0 md:mr-24 md:ml-8 object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-red-800 font-serif mt-4 md:mt-18">
              Kara Frederick
            </h2>
            <p className="text-gray-600 font-serif text-lg">Make-up Artist</p>
            <p className="text-gray-700 font-serif text-lg leading-relaxed mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing.  
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email */}
            <div
              className="flex items-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => copyToClipboard("kara@gmail.com")}
            >
              <FaEnvelope className="text-red-800 text-2xl mr-4" />
              <div>
                <p className="text-red-800 font-serif">kara@gmail.com</p>
                <span className="text-gray-500">Email</span>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => copyToClipboard("+251 91 111 1111")}
            >
              <FaPhoneAlt className="text-red-800 text-2xl mr-4" />
              <div>
                <p className="text-red-800 font-serif">+251 91 111 1111</p>
                <span className="text-gray-500">Phone Number</span>
              </div>
            </div>

            {/* Location */}
            <div
              className="flex items-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => copyToClipboard("Ethiopia, AA")}
            >
              <FaMapMarkerAlt className="text-red-800 text-2xl mr-4" />
              <div>
                <p className="text-red-800 font-serif">Ethiopia, AA</p>
                <span className="text-gray-500">Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaraInfo;
