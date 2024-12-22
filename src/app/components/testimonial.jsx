"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image: "/images/jane.jpg", // Replace with your image path
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    id: 2,
    name: "John Smith",
    image: "/images/john.jpg", // Replace with your image path
    text: "Lorem Ipsum is a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 3,
    name: "Emily Davis",
    image: "/images/emily.jpg", // Replace with your image path
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Testimonials
        </h2>
        {/* Underline */}
        <div className="w-20 h-1 mx-auto bg-orange-500 mb-12"></div>

        {/* Carousel */}
        <div className="relative bg-white rounded-lg shadow-lg p-10">
          {/* Testimonial Content */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-28 h-28 rounded-full shadow-md"
              />
            </div>
            <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <h3 className="text-xl font-bold text-gray-800">
              - {testimonials[currentIndex].name}
            </h3>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-orange-600 focus:outline-none"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-orange-600 focus:outline-none"
          >
            &#9654;
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
