"use client"; // Ensures the component is client-side
import Link from "next/link";

const ShopButton = () => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        href="/product"
        className="bg-red-800 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-900 transition"
      >
        Shop Now
      </Link>
    </div>
  );
}
export default ShopButton;