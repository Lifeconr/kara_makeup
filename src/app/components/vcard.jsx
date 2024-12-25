"use client";

import { useState } from "react";

const VCardGenerator = () => {
  const [vCardLink] = useState("https://example.com/vcard");

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-2 max-w-screen-md"> 
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Create Your VCard</h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center w-full mb-4">
            <input
              type="text"
              value={vCardLink}
              readOnly
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-gray-700"
            />
            <button
              onClick={() => {
                //add functionality
                }}
              className="bg-red-800 text-white px-4 rounded-r-lg hover:bg-red-900 transition"
            >
              Copy
            </button>
          </div>
          <button
            className="bg-red-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-900 transition"
          >
            Add To Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default VCardGenerator;