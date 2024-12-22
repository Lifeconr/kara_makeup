// src/app/ourservices/page.jsx
// "use client"; // Add if using client-side logic

import OurServices from "../components/ourservices"; // Update path based on your structure
import Navbar from "../components/Navbar";

export default function OurServicesPage() {
  return (
    <>
      <Navbar />
      <OurServices />
    </>
  );
}
