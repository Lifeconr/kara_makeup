"use client";

import Image from "next/image";
import Qrcode from "../asset/img/qrcode.png";

export default function QRCodePage() {
  return (
    <div id="qr-code" className="container mx-auto px-4 sm:px-8">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mt-4 mb-4">
        QR Code
      </h2>
      <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="max-w-md bg-white rounded-lg shadow-lg p-6 w-full text-center">
          <div className="flex justify-center mb-6">
            <div className="border-4 border-brown-500 rounded-lg p-4">
              <Image
                src={Qrcode}
                alt="QR Code"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </div>
          <button
            className="w-full bg-red-800 text-white py-2 rounded-lg font-semibold hover:bg-red-900 transition"
          >
            Download My QR Code
          </button>
        </div>
      </div>
    </div>
  );
}