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
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-bold text-red-800 font-serif">
          KARA
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#gallery" className={getLinkClasses("#gallery")}>
            Gallery
          </a>
          <a href="#our-services" className={getLinkClasses("#our-services")}>
            Our Services
          </a>
          <a href="#products" className={getLinkClasses("#products")}>
            Products
          </a>
          <a href="#testimonials" className={getLinkClasses("#testimonials")}>
            Testimonials
          </a>
          <a href="#business-hours" className={getLinkClasses("#business-hours")}>
            Business Hours
          </a>
          <a href="#appointment" className={getLinkClasses("#appointment")}>
            Appointment
          </a>
          <a href="#blog" className={getLinkClasses("#blog")}>
            Blog
          </a>
          <a href="#qr-code" className={getLinkClasses("#qr-code")}>
            QR Code
          </a>
          <a href="#contact" className={getLinkClasses("#contact")}>
            Contact
          </a>
          <a href="#vcard" className={getLinkClasses("#vcard")}>
            VCard Generator
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-red-800 text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-start p-4">
            <a
              href="#gallery"
              className={`${getLinkClasses("#gallery")} py-2`}
              onClick={toggleMenu}
            >
              Gallery
            </a>
            <a
              href="#our-services"
              className={`${getLinkClasses("#our-services")} py-2`}
              onClick={toggleMenu}
            >
              Our Services
            </a>
            <a
              href="#products"
              className={`${getLinkClasses("#products")} py-2`}
              onClick={toggleMenu}
            >
              Products
            </a>
            <a
              href="#testimonials"
              className={`${getLinkClasses("#testimonials")} py-2`}
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a
              href="#business-hours"
              className={`${getLinkClasses("#business-hours")} py-2`}
              onClick={toggleMenu}
            >
              Business Hours
            </a>
            <a
              href="#appointment"
              className={`${getLinkClasses("#appointment")} py-2`}
              onClick={toggleMenu}
            >
              Appointment
            </a>
            <a
              href="#blog"
              className={`${getLinkClasses("#blog")} py-2`}
              onClick={toggleMenu}
            >
              Blog
            </a>
            <a
              href="#qr-code"
              className={`${getLinkClasses("#qr-code")} py-2`}
              onClick={toggleMenu}
            >
              QR Code
            </a>
            <a
              href="#contact"
              className={`${getLinkClasses("#contact")} py-2`}
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a
              href="#vcard"
              className={`${getLinkClasses("#vcard")} py-2`}
              onClick={toggleMenu}
            >
              VCard Generator
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
