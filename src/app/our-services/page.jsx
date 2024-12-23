// src/app/ourservices/page.jsx
// "use client"; // Add if using client-side logic

import OurServices from "../components/ourservices"; // Update path based on your structure
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function OurServicesPage() {
  return (
    <>
      <Navbar />
      <OurServices />
      <Footer />
    </>
  );
}
