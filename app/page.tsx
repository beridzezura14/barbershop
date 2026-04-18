import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Booking />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
