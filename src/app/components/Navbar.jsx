"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const getLinkClasses = (path) =>
    router.pathname === path
      ? "text-red-800 font-serif font-bold border-b-2 border-red-800"
      : "text-800e13 font-serif hover:text-red-800 transition";

  return (
    <nav className="bg-edf6f9 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-800e13 font-serif">Kara</h1>

        {/* Desktop Navigation Links */}
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

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            className="text-800e13 font-serif"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="bg-white px-4 py-3 space-y-2 md:hidden">
          <Link href="/" className={getLinkClasses("/")} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/our-services" className={getLinkClasses("/our-services")} onClick={() => setIsMenuOpen(false)}>
            Our Services
          </Link>
          <Link href="/appointment" className={getLinkClasses("/appointment")} onClick={() => setIsMenuOpen(false)}>
            Appointment
          </Link>
          <Link href="/product" className={getLinkClasses("/product")} onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          <Link href="/blog" className={getLinkClasses("/blog")} onClick={() => setIsMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact-us" className={getLinkClasses("/contact-us")} onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
