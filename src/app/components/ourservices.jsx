"use client";

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
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Our Services
        </h2>

        <div className="w-16 h-1 mx-auto bg-red-800 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                backgroundColor: "#800e13",
                color: "white",
                borderColor: "#800e13",
              }}
            >
              <div className="text-white text-4xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p>{service.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
