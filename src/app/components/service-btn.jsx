"use client"; // Ensures client-side behavior
import Link from "next/link";

const ViewServiceButton = () => {
  return (
    <div className="flex justify-center mt-8">
      <Link
        href="/our-services"
        className="bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-600 transition"
      >
        View Service Menu
      </Link>
    </div>
  );
};

export default ViewServiceButton;
