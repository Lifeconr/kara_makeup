import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutCard from '../components/AboutCard';
import Footer from '../components/Footer';
import OurServices from './OurServices';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutCard />
      <Footer />
      <OurServices/>
    </div>
  );
};

  

export default Home;

