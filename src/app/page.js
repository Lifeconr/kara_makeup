// Import the components
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import AboutCard from './components/about-card';
import OurServices from './components/ourservices';
import Footer from './components/footer';
import Appointment from './components/appointment';
import Contact from './components/contact-us'
import Products from './components/products';
import index from './components/index'
import ViewServiceButton from './components/service-btn';
import ShopButton from './components/shop-btn';
import Testimonials from './components/testimonial';

// Define the Home function
export default function Home() {
  return (
    <div>
      {/* Add the imported components in order */}
      <Navbar />
      <HeroSection />
      <AboutCard />
      <OurServices />
      <ViewServiceButton />
      <Products />
      <Testimonials />
      <ShopButton />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
}
