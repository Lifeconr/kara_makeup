"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const getLinkClasses = (path) =>
    currentPath === path
      ? "text-red-800 font-serif font-bold border-b-2 border-red-800"
      : "text-800e13 font-serif hover:text-red-800 transition";

  return (
    <nav className="bg-edf6f9 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-red-800 font-serif">Kara</h1>

        {/* Navigation Links */}
        <div className="space-x-8 hidden md:flex">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>
          <Link href="/our-services" className={getLinkClasses("/our-services")}>
            Our Services
          </Link>
          <Link href="/appointment" className={getLinkClasses("/appointment")}>
            Appointment
          </Link>
          <Link href="/product" className={getLinkClasses("/product")}>
            Products
          </Link>
          <Link href="/blog" className={getLinkClasses("/blog")}>
            Blog
          </Link>
          <Link href="/contact-us" className={getLinkClasses("/contact-us")}>
            Contact Us
          </Link>
        </div>        
      </div>
    </nav>
  );
};

export default Navbar;
