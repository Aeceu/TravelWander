import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { GoogleSection } from "../components/sections/GoogleSection";
import { ContactSection } from "../components/sections/ContactSection";
import { CarSection } from "../components/sections/CarSection";
import { InfoSection } from "../components/sections/InfoSection";

const Home = () => {
  return (
    <div className="relative w-full h-full flex flex-col origin">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <CarSection />
      <GoogleSection />
      <InfoSection />
      <ContactSection />
    </div>
  );
};

export default Home;
