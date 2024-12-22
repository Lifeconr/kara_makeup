"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Makeup Kit",
    description: "There are many variations of passages of Lorem Ipsum",
    price: 1250,
    image: "/makeup-kit.jpg", // Replace with the actual image path
  },
  {
    id: 2,
    name: "Clothes",
    description: "There are many variations of passages of Lorem Ipsum",
    price: 1400,
    image: "/clothes.jpg", // Replace with the actual image path
  },
  {
    id: 3,
    name: "Skincare Products",
    description: "There are many variations of passages of Lorem Ipsum",
    price: 900,
    image: "/skincare.jpg", // Replace with the actual image path
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
    setTimeout(() => {
      alert(`You selected: ${product.name}`);
    }, 300); // Alert after 300ms for smooth color change
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Products
        </h2>
        {/* Underline */}
        <div className="w-16 h-1 mx-auto bg-orange-500 mb-10"></div>

        {/* Products Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => handleProductSelection(product)}
              className={`flex flex-col bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
                selectedProduct?.id === product.id
                  ? "border-orange-500 bg-orange-100"
                  : "border-gray-300"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <div className="mt-4 text-orange-500 font-bold text-xl">${product.price}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Product Information */}
        {selectedProduct && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Selected Product:</h3>
            <p className="text-orange-500 font-bold mt-2">
              <strong>Name:</strong> {selectedProduct.name}
            </p>
            <p className="text-orange-500 font-bold mt-2">
              <strong>Price:</strong> ${selectedProduct.price}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
