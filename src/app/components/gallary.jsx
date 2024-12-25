"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import gallary1 from "../asset/img/gallary1.jpg";
import gallary3 from "../asset/img/gallary3.jpg";
import galla5 from "../asset/img/gal1.jpg";

const images = [gallary1, gallary3, galla5];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative mx-auto rounded-lg shadow-md"
      style={{
        maxWidth: "400px", 
        backgroundColor: "#edf6f9", 
      }}
    >
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index}`}
              className="object-cover rounded-lg"
              width={300} 
              height={250} 
            />
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#800e13]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
