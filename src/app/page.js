// Import the components
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import KaraInfo from './components/kara-info';
import OurServices from './components/ourservices';
import Footer from './components/footer';
import Appointment from './components/appointment';
import Contact from './components/contact-us'
import Products from './components/products';
import ViewServiceButton from './components/service-btn';
import ShopButton from './components/shop-btn';
import Testimonials from './components/testimonial';
import Gallary from './components/gallary';
import BusinessHours from './components/business-hrs';
import BlogPage from './components/blog';
import QRCodePage from './components/QR-code';
import VCardGenerator from './components/vcard';

// Define the Home function
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100" >
      <Navbar />
      <HeroSection />
      <KaraInfo />
      <Gallary/>
      <OurServices />
      <ViewServiceButton />
      <Products />
      <ShopButton />
      <Testimonials />
      <BusinessHours />
      <Appointment />
      <BlogPage />
      <QRCodePage />
      <Contact />
      <VCardGenerator />
      <Footer />
    </div>
  );
}
