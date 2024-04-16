import "./Footer.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
    return (
        <Container className="footer container-full-width">
            <p className="py-4 text-center">made with 🩷 by Monique Heusinger</p>
        </Container>
    );
}

export default Footer;