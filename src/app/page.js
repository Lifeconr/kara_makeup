// Import the components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutCard from './components/AboutCard';
import OurServices from './components/ourservices';
import Footer from './components/Footer';
import Appointment from './components/Appointment';
import Contact from './components/ContactUs'
import Products from './components/Product';
import index from './components/index'

// Define the Home function
export default function Home() {
  return (
    <div>
      {/* Add the imported components in order */}
      <Navbar />
      <HeroSection />
      <AboutCard />
      <OurServices />
      <Products />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  );
}
