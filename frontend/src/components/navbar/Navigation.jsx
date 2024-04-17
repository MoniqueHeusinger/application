import "./Navigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation = () => {
    const scrollToArea = (id, event) => {
        event.preventDefault();
        const area = document.getElementById(id);
        if (area) {
            area.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollTo(0, area.offsetTop - 100);
        }
    };

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <a class="navbar-brand ps-4" href="#">MH</a>
                <button class="navbar-toggler me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div class="offcanvas-header">
                        <a class="offcanvas-title" onClick={(event) => scrollToArea('about', event)} id="offcanvasNavbarLabel" data-bs-dismiss="offcanvas">MH</a>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link px-4 py-3" onClick={(event) => scrollToArea('about', event)} aria-current="page" data-bs-dismiss="offcanvas">Über mich</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-4 py-3" onClick={(event) => scrollToArea('application', event)} aria-current="page" data-bs-dismiss="offcanvas">Bewerbung</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-4 py-3" onClick={(event) => scrollToArea('certificates', event)} aria-current="page" data-bs-dismiss="offcanvas">Zeugnisse</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link px-4 py-3" onClick={(event) => scrollToArea('contact', event)} aria-current="page" data-bs-dismiss="offcanvas">Kontakt</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


            {/* {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary fixed-top mb-4">
                    <Container fluid className="px-center-default">
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
            ))} */}
        </>
    );
}

export default Navigation;