import ContactUsPage from "../components/contact-us";
import QRCodePage from "../components/qr-code";
import VCardGenerator from "../components/vcard";
import BusinessHours from "../components/business-hrs";

export default function contactUsPage() {
  return (
    <>
      <ContactUsPage />
      <QRCodePage />
      <VCardGenerator />
      <BusinessHours />
    </>
  );
}
