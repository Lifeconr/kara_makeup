// Import the components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutCard from './components/AboutCard';
import OurServices from './pages/OurServices';
import Footer from './components/Footer';
import Appointment from './pages/Appointment';
import Contact from './pages/ContactUs'
import Products from './pages/Product';
import index from './pages/index'

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
