"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-edf6f9 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-800e13 font-serif">KARA</h1>

        {/* Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          <Link href="/" className="text-800e13 font-serif hover:text-red-800 transition">
            Home
          </Link>
          <Link href="/our-services" className="text-800e13 font-serif hover:text-red-800 transition">
            Our Services
          </Link>
          <Link href="/appointment" className="text-800e13 font-serif hover:text-red-800 transition">
            Appointment
          </Link>
          <Link href="/product" className="text-800e13 font-serif hover:text-red-800 transition">
            Products
          </Link>
          <Link href="/blog" className="text-800e13 font-serif hover:text-red-800 transition">
            Blog
          </Link>
          <Link href="/contact-us" className="text-800e13 font-serif hover:text-red-800 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu (optional, toggle button) */}
        <div className="md:hidden">
          <button className="text-800e13 font-serif">Menu</button>
          {/* Add functionality to toggle the mobile menu */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
