"use client"; 

import { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(`Message sent!`);
  };

  return (
    <div id="contact" className="container mx-auto px-4 sm:px-8 py-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mt-4 mb-4">
        Contact Us
      </h2>
      <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>
      
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-800 focus:outline-none"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-800 text-white py-2 rounded-md font-semibold hover:bg-red-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;