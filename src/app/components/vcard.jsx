"use client";

import { useState } from "react";

const VCardGenerator = () => {
  const [vCardLink] = useState("https://example.com/vcard");

  const handleCopy = () => {
    navigator.clipboard.writeText(vCardLink);
    alert("VCard link copied to clipboard!");
  };

  return (
    <section id="vcard" className="py-4 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8 max-w-screen-md">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Create Your VCard</h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center w-full mb-4">
            <input
              type="text"
              value={vCardLink}
              readOnly
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
            <button
              onClick={handleCopy}
              className="bg-red-800 text-white px-4 rounded-r-lg hover:bg-red-900 transition"
            >
              Copy
            </button>
          </div>
          <button
            className="bg-red-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-900 transition"
            onClick={() => {
              // Add functionality to add to contacts if needed
            }}
          >
            Add To Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default VCardGenerator;