import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import Hero from "../src/pageContent/hero/Hero";
import TechStack from "./pageContent/techStack/TechStack";
import About from "./pageContent/about/About";
import Application from "./pageContent/application/Application";
import ProfessionalData from "./pageContent/professionalData/ProfessionalData";
import Contact from "./pageContent/contact/Contact";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import { BrowserRouter } from "react-router-dom";
import { CertificateProvider } from "./context/CertificateContext";
import { ScrollProvider } from "./context/ScrollContext";


function App() {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo(0, contactElement.offsetTop - 100);
    }
  };

  const scrollToCertificates = () => {
    const certificatesElement = document.getElementById('certificates');
    if (certificatesElement) {
      certificatesElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo(0, certificatesElement.offsetTop - 100);
    }
  };

  return (
    <ScrollProvider>
      <CertificateProvider>
        <BrowserRouter>
          <Navigation />
          {/* <Navigation scrollToCertificates={scrollToCertificates} /> */}
          {/* <Hero scrollToContact={scrollToContact} /> */}
          <Hero />
          <TechStack />
          <About />
          <ProfessionalData />
          {/* <ProfessionalData scrollToCertificates={scrollToCertificates} /> */}
          <Application />
          {/* <Application scrollToContact={scrollToContact} /> */}
          <Contact />
          <Footer />
          <ScrollToTopBtn />
        </BrowserRouter>
      </CertificateProvider>
    </ScrollProvider>

  )
}

export default App
