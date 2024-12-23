"use client";

import Image from "next/image";
import Qrcode from "../asset/img/qrcode.png";

export default function QRCodePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Qrcode.src; // Use the src property of the imported image
    link.download = "MyQRCode.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex items-center justify-center">
      <div className="max-w-md bg-white rounded-lg shadow-lg p-6 w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">QR Code</h1>
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
          onClick={handleDownload}
          className="w-full bg-red-800 text-white py-2 rounded-lg font-semibold hover:bg-red-900 transition"
        >
          Download My QR Code
        </button>
      </div>
    </div>
  );
}
