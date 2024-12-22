"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">Makeup Artist</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href='/our-services' className="hover:text-orange-500 transition">
            Our Services
          </Link>
          <Link href="/appointment" className="hover:text-orange-500 transition">
            Appointment
          </Link>
          <Link href="/product" className="hover:text-orange-500 transition">
            Products
          </Link>
          <Link href="/blog" className="hover:text-orange-500 transition">
            blog
          </Link>
          <Link href="/contact-us" className="hover:text-orange-500 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
