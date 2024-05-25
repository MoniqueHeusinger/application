import "./Navigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect, useState } from "react";
import ModalFooter from "react-bootstrap/esm/ModalFooter";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/esm/ModalBody";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import ButtonClassic from "../button/ButtonClassic.jsx";
import Form from "react-bootstrap/Form";
import { backendUrl } from "../../api/index.js";
import { useCertificateContext } from "../../context/CertificateContext.jsx";
import { useScrollContext } from "../../context/ScrollContext.jsx";




// function ModalCertificatesAccess(props, { scrollToCertificatesSection, setScrollToCertificatesSection }) {
//NEU:
function ModalCertificatesAccess({ onHide, setScrollToCertificatesSection }) {
    const [lastnameInput, setLastnameInput] = useState("");
    const [accessCodeInput, setAccessCodeInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [certificatesVisible, setCertificatesVisible] = useState(false);
    const [closeModal, setCloseModal] = useState(false);

    const { setCertificatesComponentVisible } = useCertificateContext();

    const handleAccessGranted = () => {
        setCertificatesComponentVisible(true);
        setScrollToCertificatesSection(true);
        //NEU:
        onHide();
    }

    const requestAccess = () => {
        if (!accessCodeInput) {
            setErrorMessage("Bitte gib einen Zugriffscode ein!");
            return;
        }


        fetch(backendUrl + "/api/user/verifyAccess", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lastname: lastnameInput, accessCode: accessCodeInput })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Fehler beim Zugriff überprüfen: " + response.statusText);
                }
            })
            .then(data => {
                if (data.success) {
                    setCertificatesVisible(true);
                    setCloseModal(true);
                    setErrorMessage("");
                    handleAccessGranted();
                    handleClose();
                } else {
                    setErrorMessage("Ungültige Zugangsdaten!");
                }
            })
            .catch(error => {
                console.error("Fehler beim Zugriff überprüfen: ", error);
                setErrorMessage("Fehler beim Überprüfen des Zugriffs!");
            });
    }

    const handleClose = () => {
        setCloseModal(false);
        onHide();
    }

    return (
        <>
            {/* <Modal {...props} size="lg" closeButton centered onHide={handleClose}> */}
            {/* Neu: */}
            <Modal size="lg" closeButton centered onHide={handleClose}>
                <ModalHeader closeButton>
                </ModalHeader>

                <ModalBody className="mx-5 p-3">
                    <h5 className="lh-base">Um Zugriff auf meine Zeugnisse zu erhalten, gib bitte einen gültigen 6-stelligen Code ein.</h5>
                    <p className="mt-4">Diesen hast du vorab per E-Mail von mir erhalten.</p>

                    <Form.Label className="mt-2 h4"><strong>Zugriffscode:</strong></Form.Label>
                    <a href="#" data-bs-toggle="tooltip" title="Nachname eingeben"><Form.Control size="lg" type="text" className="mx-auto mt-1 mb-4 text-center" value={lastnameInput} onChange={(e) => setLastnameInput(e.target.value)} autoFocus placeholder="Nachname" id="lastnameInput" /></a>

                    <a href="#" data-bs-toggle="tooltip" title="6-stelligen Code eingeben"><Form.Control size="lg" type="text" className="mx-auto mt-1 mb-4 text-center" placeholder="Code" value={accessCodeInput} onChange={(e) => setAccessCodeInput(e.target.value)} id="accessCodeInputField" /></a>
                    <ButtonClassic btnVariant="transparent-dark" buttonText="Zeugnisse anzeigen" onClick={() => requestAccess()} url="certificates" />
                    {/* <ButtonClassic btnVariant="transparent-dark" buttonText="Zeugnisse anzeigen" onClick={(event) => requestAccess(event)} url="certificates" /> */}
                    {/* Neu: */}
                    {/* <ButtonClassic btnVariant="transparent-dark" buttonText="Zeugnisse anzeigen" onClick={requestAccess} /> */}
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                </ModalBody>

                <ModalFooter className="mt-3 flex-column">
                    <p className="">Neu hier oder Code vergessen?</p>
                    <ButtonClassic btnVariant="transparent-light" buttonText="neuen Code anfordern" />
                </ModalFooter>
            </Modal>
        </>
    );
}


const Navigation = () => {
    const [modalCertificatesAccessShow, setModalCertificatesAccessShow] = useState(false);
    const [scrollToCertificatesSection, setScrollToCertificatesSection] = useState(false);

    const { scrollToSection } = useScrollContext();

    const handleBtnClick = (sectionID) => {
        scrollToSection(sectionID)
    }

    const handleCertificatesClick = () => {
        setModalCertificatesAccessShow(true);
        setScrollToCertificatesSection(true);
    }

    const handleCloseModalCertificatesAccess = () => {
        setModalCertificatesAccessShow(false);
    };

    useEffect(() => {
        if (scrollToCertificatesSection) {
            handleBtnClick("certificates");
        }
    }, [scrollToCertificatesSection]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <a className="navbar-brand ps-4" href="#">MH</a>
                <button className="navbar-toggler me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <a className="offcanvas-title" onClick={handleBtnClick("about")} id="offcanvasNavbarLabel" data-bs-dismiss="offcanvas">MH</a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link px-4 py-3" onClick={() => handleBtnClick("about")} aria-current="page" data-bs-dismiss="offcanvas">Über mich</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-4 py-3" onClick={() => handleBtnClick("application")} aria-current="page" data-bs-dismiss="offcanvas">Bewerbung</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-4 py-3" onClick={() => handleCertificatesClick()} aria-current="page" data-bs-dismiss="offcanvas">Zeugnisse</a>
                                {/* <a className="nav-link px-4 py-3" onClick={handleCertificatesClick} aria-current="page" data-bs-dismiss="offcanvas">Zeugnisse</a> */}
                                {/* <a className="nav-link px-4 py-3" onClick={() => { setModalCertificatesAccessShow(true); handleBtnClick("application") }} aria-current="page" data-bs-dismiss="offcanvas">Zeugnisse</a> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-4 py-3" onClick={() => handleBtnClick("contact")} aria-current="page" data-bs-dismiss="offcanvas">Kontakt</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            {/* Neu: */}
            <ModalCertificatesAccess show={modalCertificatesAccessShow} onHide={handleCloseModalCertificatesAccess} setScrollToCertificatesSection={setScrollToCertificatesSection} scrollToCertificatesSection={scrollToCertificatesSection} />


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