"use client"; // Ensures the component is client-side

import { useState } from "react";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      name: "Makeup",
      description:
        "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form.",
      icon: "fas fa-brush",
    },
    {
      name: "Hair Styling",
      description:
        "Experience the best hair styling services tailored just for you.",
      icon: "fas fa-cut",
    },
    {
      name: "Facials",
      description:
        "Relax and rejuvenate with our premium facial services.",
      icon: "fas fa-spa",
    },
    {
      name: "Manicure & Pedicure",
      description:
        "Pamper yourself with our luxurious manicure and pedicure treatments.",
      icon: "fas fa-hand-sparkles",
    },
  ];

  const handleServiceSelection = (serviceName) => {
    setSelectedService(serviceName);

    setTimeout(() => {
      alert(`You selected the ${serviceName} service!`);
    }, 100);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Our Services
        </h2>
        {/* Underline */}
        <div className="w-16 h-1 mx-auto bg-orange-500 mb-10"></div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceSelection(service.name)}
              className={`flex flex-col items-center text-center border rounded-lg p-6 shadow-sm transition-shadow ${
                selectedService === service.name
                  ? "border-orange-500 bg-orange-100"
                  : "border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="text-orange-500 text-4xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
