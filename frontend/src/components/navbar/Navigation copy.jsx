import "./Navigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation = () => {
    const scrollToArea = (id) => {
        const area = document.getElementById(id);
        if (area) {
            area.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollTo(0, area.offsetTop - 100);
        }
    };

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary fixed-top mb-4">
                    <Container fluid className="px-center-120">
                        <Navbar.Brand href="#">MH</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Nav.Link href="#">Monique Heusinger</Nav.Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1">
                                    <Nav.Link onClick={() => scrollToArea('about')} className="px-4 py-3">Über mich</Nav.Link>
                                    <Nav.Link onClick={() => scrollToArea('application')} className="px-4 py-3">Bewerbung</Nav.Link>
                                    <Nav.Link onClick={() => scrollToArea('certificates')} className="px-4 py-3">Zeugnisse</Nav.Link>
                                    <Nav.Link onClick={() => scrollToArea('contact')} className="px-4 py-3">Kontakt</Nav.Link>

                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navigation;