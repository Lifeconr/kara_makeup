'use client';
import Image from "next/image";
import powder from "../asset/img/powder.jpg";
import lipstick from "../asset/img/lipsticks.jpg";
import maskara from "../asset/img/maskara.jpg";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Powder Products",
    description: "There are many variations of passages of Lorem Ipsum.",
    price: 1250,
    image: powder,
  },
  {
    id: 2,
    name: "Lipstick Products",
    description: "There are many variations of passages of Lorem Ipsum.",
    price: 1400,
    image: lipstick,
  },
  {
    id: 3,
    name: "Maskara Products",
    description: "There are many variations of passages of Lorem Ipsum.",
    price: 900,
    image: maskara,
  },
];

export default function Products() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [message, setMessage] = useState("");

  const handleProductToggle = (product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts((prev) => [...prev, product]);
    }
    setMessage(""); // Clear message when toggling selection
  };

  const handleProceedToPayment = () => {
    if (selectedProducts.length === 0) {
      setMessage("Please select a product.");
    } else {
      const paymentSection = document.getElementById("payment");
      if (paymentSection) {
        paymentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="products" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Products
        </h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white border rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover"
                  layout="fill"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {product.name}
                </h3>
                <p className="text-gray-500 mt-2 text-center">
                  {product.description}
                </p>
                <button
                  onClick={() => handleProductToggle(product)}
                  className={`mt-4 px-4 py-2 font-bold rounded transition ${
                    selectedProducts.some((p) => p.id === product.id)
                      ? "bg-red-800 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {selectedProducts.some((p) => p.id === product.id)
                    ? "Selected"
                    : `$${product.price}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          {message && <p className="text-red-600 mb-2">{message}</p>}
          <button
            onClick={handleProceedToPayment}
            className="px-6 py-3 bg-red-800 text-white font-bold rounded shadow hover:bg-red-700 transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </section>
  );
}
