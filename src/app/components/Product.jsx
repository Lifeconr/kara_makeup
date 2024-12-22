// src/app/pages/Products.jsx
"use client";

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
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Products</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4 text-orange-500 font-bold text-xl">${product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
