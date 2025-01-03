'use client';
import Image from "next/image";
import telebirr from "../asset/payment pics/telebirr.jpg";
import cbebirr from "../asset/payment pics/cbebirr.png";
import abyssinia from "../asset/payment pics/abyssinia.png";
import ebirr from "../asset/payment pics/ebirr.png";
import amole from "../asset/payment pics/amole.png";
import mpesa from "../asset/payment pics/mpesa.png";

const Payment = () => {
  return (
    <div id="payment" className="container mx-auto px-4 py-8 bg-[#edf6f9]">
      <div className="shadow-md rounded-lg p-6 bg-white">
        <h2 className="text-3xl font-bold text-red-800 font-serif text-center mb-4">
          Payment
        </h2>
        <p className="text-lg text-gray-600 font-serif text-center mb-6">
          Choose your payment method
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200">
            <Image src={telebirr} alt="TeleBirr" className="w-10 h-10 mr-4" />
            <p className="text-gray-800 font-serif text-lg">TeleBirr</p>
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200">
            <Image src={cbebirr} alt="CBE Birr" className="w-10 h-10 mr-4" />
            <p className="text-gray-800 font-serif text-lg">CBE Birr</p>
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200">
            <Image src={abyssinia} alt="Abyssinia Bank" className="w-10 h-10 mr-4" />
            <p className="text-gray-800 font-serif text-lg">Abyssinia Bank</p>
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200">
            <Image src={ebirr} alt="E-Birr" className="w-10 h-10 mr-4" />
            <p className="text-gray-800 font-serif text-lg">E-Birr</p>
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200">
            <Image src={amole} alt="Amole" className="w-10 h-10 mr-4" />
            <p className="text-gray-800 font-serif text-lg">Amole</p>
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4 rounded-md cursor-pointer hover:bg-gray-200">
            <Image src={mpesa} alt="M-Pesa" className="w-10 h-10 mr-4" />
            <p className="text-gray-800 font-serif text-lg">M-Pesa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
