"use client";
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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="products" className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Products
        </h2>
        <div className="w-16 h-1 mx-auto bg-red-800 mb-6"></div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <button
                onClick={() => handleProductSelection(product)}
                className={`flex flex-col bg-white border rounded-lg shadow-sm hover:shadow-lg transition-transform transform ${
                  selectedProduct?.id === product.id
                    ? "border-red-800 bg-orange-100 scale-105"
                    : "border-gray-300 hover:scale-105"
                } overflow-hidden`}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="object-cover"
                    layout="fill"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 mt-2">{product.description}</p>
                  <div className="mt-4 text-red-800 font-bold text-xl">
                    ${product.price}
                  </div>
                </div>
              </button>

              {selectedProduct?.id === product.id && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800">
                    Selected Product:
                  </h3>
                  <p className="text-gray-600 mt-2">
                    <strong>Name:</strong> {selectedProduct.name}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <strong>Description:</strong> {selectedProduct.description}
                  </p>
                  <p className="text-red-800 font-bold mt-2">
                    <strong>Price:</strong> ${selectedProduct.price}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}