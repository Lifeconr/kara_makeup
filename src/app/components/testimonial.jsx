"use client";
import Image from 'next/image';
import testm1 from '../asset/img/testm1.jpg';
import testm2 from '../asset/img/testm2.jpg';
import testm3 from '../asset/img/testm3.jpg';
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Zendaya Coleman",
    image: testm1, 
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
  },
  {
    id: 2,
    name: "Zara John",
    image: testm2, 
    text: "Lorem Ipsum is a piece of classical Latin literature.",
  },
  {
    id: 3,
    name: "Emily Davis",
    image: testm3,
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials"  className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Testimonials
        </h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>
        <div className="relative bg-white rounded-lg shadow-lg p-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-28 h-28 rounded-full shadow-md object-cover"
                width={112} 
                height={112} 
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-800 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-red-900 focus:outline-none"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-800 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:bg-red-900 focus:outline-none"
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
                currentIndex === index ? "bg-red-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}