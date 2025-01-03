// Import the components
import HeroSection from './components/hero';
import KaraInfo from './components/kara-info';
import OurServices from './components/ourservices';
import Appointment from './components/Appointment';
import Products from './components/products';
import Testimonials from './components/testimonial';
import Gallary from './components/gallary';
import BlogPage from './components/blog';
import QRCodePage from './components/QR-code';
import Payment from './components/payment';

// Home function
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100" >
      <HeroSection />
      <KaraInfo />
      <Gallary/>
      <OurServices />
      <Products />
      <Testimonials />
      <Appointment />
      <BlogPage />
      <Payment />
      <QRCodePage />
    </div>
  );
}
