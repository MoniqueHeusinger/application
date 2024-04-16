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



function App() {
  return (
    <>
      <Navigation />
      <Container className="mb-5 px-center-120">
        <Hero />
        <TechStack />

      </Container>


      <About />
      <ProfessionalData />

      <Application />
      <Certificates />
      <Footer />
    </>
  )
}

export default App
