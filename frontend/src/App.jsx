import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import Container from "react-bootstrap/esm/Container";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import Hero from "../src/pageContent/hero/Hero";
import TechStack from "./pageContent/techStack/TechStack";
import About from "./pageContent/about/About";
import Application from "./pageContent/application/Application";
import ProfessionalData from "./pageContent/professionalData/ProfessionalData";
import Certificates from "./pageContent/certificates/Certificates";
import Contact from "./pageContent/contact/Contact";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import { BrowserRouter, Routes } from "react-router-dom";



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
    <>
      <BrowserRouter>
        <Navigation />
        <Container className="mb-5 px-center-120">
          <Hero />
          <TechStack />

        </Container>


        <About />
        <ProfessionalData scrollToCertificates={scrollToCertificates} />

        <Application scrollToContact={scrollToContact} />
        <Certificates />
        <Contact />
        <Footer />
        <ScrollToTopBtn />
      </BrowserRouter>


    </>
  )
}

export default App
