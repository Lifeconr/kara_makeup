"use client";
import { FaBrush, FaCut, FaSpa, FaHandSparkles } from "react-icons/fa";
import { useState } from "react";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      name: "Makeup",
      description: "There are many variations of passages of.",
      icon: <FaBrush />,
    },
    {
      name: "Hair Styling",
      description: "There are many variations of passages of.",
      icon: <FaCut />,
    },
    {
      name: "Facials",
      description: "There are many variations of passages of.",
      icon: <FaSpa />,
    },
    {
      name: "Manicure",
      description: "There are many variations of passages of.",
      icon: <FaHandSparkles />,
    },
  ];

  const handleServiceSelection = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <section id="our-services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceSelection(service.name)}
              className={`flex flex-col items-center text-center border rounded-lg p-6 shadow-sm transition-transform ${
                selectedService === service.name
                  ? "scale-105"
                  : "hover:scale-105"
              }`}
              style={{
                backgroundColor: selectedService === service.name ? "#600a0e" : "#800e13",
                color: "white",
                borderColor: "#800e13",
              }}
            >
              <div className="text-white text-4xl mb-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-sm">{service.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;