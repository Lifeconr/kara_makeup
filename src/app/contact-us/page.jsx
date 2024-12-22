import Navbar from "../components/navbar";
import ContactUsPage from "../components/contact-us";
import QRCodePage from "../components/QR-code";
import VCardGenerator from "../components/vcard";
import BusinessHours from "../components/business-hrs";

export default function contactUsPage() {
  return (
    <>
      <Navbar />
      <ContactUsPage />
      <QRCodePage />
      <VCardGenerator />
      <BusinessHours />
    </>
  );
}
