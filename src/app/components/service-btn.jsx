"use client"; 
import Link from "next/link";

const ViewServiceButton = () => {
  return (
    <div className="flex justify-center mt-8 bg-gray-100">
      <Link
        href="/our-services"
        className="bg-red-800 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-900 transition"
      >
        View Service Menu
      </Link>
    </div>
  );
};

export default ViewServiceButton;
