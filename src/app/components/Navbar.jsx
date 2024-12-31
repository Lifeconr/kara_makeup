"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const getLinkClasses = (path) =>
    currentPath === path
      ? "text-red-800 font-serif font-bold border-b-2 border-red-800"
      : "text-gray-800 font-serif hover:text-red-800 transition";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Menu Icon */}
        <button
          className="text-red-800 text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Logo */}
        <h1 className="text-lg font-bold text-red-800 font-serif ml-4">
          KARA
        </h1>

        {/* Overlay for Sidebar */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:flex md:space-x-8 md:w-auto md:h-auto md:bg-transparent md:shadow-none`}
        >
          <div className="flex flex-col p-6 md:flex-row md:p-0">
            <a
              href="#gallery"
              className={`${getLinkClasses("#gallery")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              Gallery
            </a>
            <a
              href="#our-services"
              className={`${getLinkClasses("#our-services")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              Our Services
            </a>
            <a
              href="#products"
              className={`${getLinkClasses("#products")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              Products
            </a>
            <a
              href="#testimonials"
              className={`${getLinkClasses("#testimonials")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#business-hours"
              className={`${getLinkClasses("#business-hours")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              Business Hours
            </a>
            <a
              href="#appointment"
              className={`${getLinkClasses("#appointment")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              Appointment
            </a>
            <a
              href="#blog"
              className={`${getLinkClasses("#blog")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a
              href="#qr-code"
              className={`${getLinkClasses("#qr-code")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              QR Code
            </a>
            <a
              href="#contact"
              className={`${getLinkClasses("#contact")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="#vcard"
              className={`${getLinkClasses("#vcard")} py-2 md:py-0`}
              onClick={toggleMenu}
            >
              VCard Generator
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
