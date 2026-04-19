import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <Booking />
      <Contact />
      <MapSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
