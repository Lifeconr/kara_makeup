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
          <Link href='/OurServices' className="hover:text-orange-500 transition">
            Our Services
          </Link>
          <Link href="/appointment" className="hover:text-orange-500 transition">
            Appointment
          </Link>
          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
