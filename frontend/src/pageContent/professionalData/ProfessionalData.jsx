import "./ProfessionalData.css";
import ButtonClassic from "../../components/button/ButtonClassic";
import frontendAbschlussBild from "../../assets/img/frontend-abschluss-bild.png";
import backendAbschlussBild from "../../assets/img/eventpilot-cover.png";
import supercodeLogo from "../../assets/img/supercode-logo.svg";
import karriereTutorLogo from "../../assets/img/karrieretutor-logo.jpg";
import realLogo from "../../assets/img/real-logo.png";
import hsNiederrheinLogo from "../../assets/img/hs-niederrhein-logo.png";

const ProfessionalData = ({ scrollToCertificates }) => {
    const stackList = ["HTML", "CSS", "JavaScript(ES6)", "SCSS", "React", "Node.js", "Express", "MongoDB", "Mongoose", "RESTAPI", "Git", "Tailwind", "UX/UI", "Scrum/Kanban", "AntDesign", "Jest"];

    const stackListHtmlCss = ["Grundstruktur HTML5", "Grundstruktur CSS3", "Box-Modell", "Flexbox", "Grid", "Bilder", "Animationen", "Links", "Webfonts", "Selektoren", "Stylesheets", "Responsive Design", "Multimedia", "Planung", "Debugging", "Webseite Upload"];

    const tasksQM = ["Erstellung von Arbeitsanweisungen", "Koordination von Systemaudits und Zertifizierungen für den Lebensmittelhandel (Bio, g.g.A)", "Bearbeitung von Anfragen (u.a. Kunden, Behörden und Medien)", "Erstellung und Durchführung  von Schulungen", "Kommunikation mit Dienstleistern"];

    return (
        <>
            <div className="container my-7 px-center-default">
                <ul className="nav nav-tabs nav-justified" id="professionalDataTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link px-4 active" id="weiterbildung-tab" data-bs-toggle="tab" data-bs-target="#weiterbildung-tab-pane" type="button" role="tab" aria-controls="weiterbildung-tab-pane" aria-selected="true">Weiterbildung</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link px-6 " id="beruf-tab" data-bs-toggle="tab" data-bs-target="#beruf-tab-pane" type="button" role="tab" aria-controls="beruf-tab-pane" aria-selected="false">Beruf</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link px-6 " id="studium-tab" data-bs-toggle="tab" data-bs-target="#tabPaneHSNiederrhein" type="button" role="tab" aria-controls="tabPaneHSNiederrhein" aria-selected="false">Studium</button>
                    </li>
                </ul>
                <div className="tab-content text-start border border-top-0 border-style-first p-5" id="professionalDataTabContent">
                    <div className="tab-pane fade show active" id="weiterbildung-tab-pane" role="tabpanel" aria-labelledby="weiterbildung-tab" tabIndex="0">
                        <div className="row bg-beige-light p-5 rounded-4">
                            <div className="row">
                                <div className="col flex-grow-0" id="weiterbildungWrapper">
                                    <div className="basic-logo rounded-circle d-flex align-items-center justify-content-center">
                                        <img src={supercodeLogo} alt="" className="weiterbildung-logo" />
                                    </div>
                                </div>

                                <div className="col p-lg-3 ps-lg-5">
                                    {/* Accordion Bootcamp*/}
                                    <div className="accordion" id="accordionWeiterbildungSuperCode">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <p className="fw-light fs-5">09/2023 - 03/2024</p>
                                                <button className="accordion-button fs-5 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelSuperCode-collapseOne" aria-expanded="true" aria-controls="panelSuperCode-collapseOne">
                                                    Bootcamp Fullstack Web-Development
                                                </button>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div id="panelSuperCode-collapseOne" className="accordion-collapse collapse ">
                                    <div className="accordion-body mt-5">
                                        <p className="text-decoration-underline fw-semibold">Ablauf:</p>
                                        <p>Vollzeit <br />Täglich Live-Unterricht bis Mittag, im Anschluss  Coding-Challenges sowie kleinere und mittlere Projekte, die ich selbstständig oder im Team bearbeitet habe</p>

                                        <div className="row">
                                            <div className="col">
                                                <p className="text-decoration-underline fw-semibold">Frontend</p>
                                                <p>15 Wochen</p>
                                            </div>

                                            <div className="col">
                                                <p className="text-decoration-underline fw-semibold">Backend</p>
                                                <p>12 Wochen</p>
                                            </div>
                                        </div>

                                        <p className="text-decoration-underline fw-semibold">Inhalte u.a.:</p>
                                        <div className="container text-center tech-stack-container-small mt-3">
                                            <div className="row flex-wrap gap-2 justify-content-between align-items-center  fs-7 text-uppercase">
                                                {stackList.map((item, index) => (
                                                    <span key={index} className="d-block px-4 py-1 col rounded-1">{item}</span>
                                                ))}

                                            </div>
                                        </div>

                                        <p className="text-decoration-underline fw-semibold mt-4">Abschluss:</p>
                                        <div className="row align-items-center mb-4">
                                            <div className="col"><p>Web-App als Gruppenprojekt</p></div>

                                            {/* <div className="col"><ButtonClassic buttonText="zum Zeugnis" btnVariant="transparent-dark" onClick={scrollToCertificates} /></div> */}
                                        </div>
                                    </div>

                                    <div className="row row-gap-5">
                                        <div className="col">
                                            {/* Card Frontend */}
                                            <div className="card text-center mx-lg-3 h-100" id="free2gameCard">
                                                <img src={frontendAbschlussBild} className="card-img-top" alt="Frontend Abschlussprojekt" />
                                                <div className="card-body d-flex flex-column">
                                                    <p className="card-title fw-semibold pt-3 lh-sm">Frontend<br />Abschlussprojekt</p>
                                                    <h5 className="py-2">"Free2Game"</h5>
                                                    <p className="card-text flex-grow-1">Sammlung kostenloser Online-Games</p>
                                                    <ButtonClassic additionalClassName="px-5" btnVariant="transparent-dark" buttonText="zum Projekt" onClick={() => { }} url="https://github.com/aktastic/Free2Game" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col">
                                            {/* Card Backend */}
                                            <div className="card text-center mx-lg-3 h-100" id="eventPilotCard">
                                                <img src={backendAbschlussBild} className="card-img-top" alt="Backend Abschlussprojekt" />
                                                <div className="card-body d-flex flex-column">
                                                    <p className="card-title fw-semibold pt-3 lh-sm">Backend<br />Abschlussprojekt</p>
                                                    <h5 className="py-2">"EventPilot"</h5>
                                                    <p className="card-text">Events in der Nähe finden und Veröffentlichen von Events </p>
                                                    <ButtonClassic additionalClassName="px-5" btnVariant="transparent-dark" buttonText="zum Projekt" onClick={() => { }} url="https://eventpilot.onrender.com" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* karriere tutor */}
                        <div className="row my-7 bg-beige-light p-5 rounded-4">
                            <div className="row">
                                <div className="col flex-grow-0" id="karrieretutorLogoWrapper">
                                    <div className="basic-logo-light rounded-circle d-flex align-items-center justify-content-center">
                                        <img src={karriereTutorLogo} alt="" className="weiterbildung-logo" />
                                    </div>
                                </div>

                                <div className="col p-lg-3 ps-lg-5">
                                    {/* Accordion karriere tutor*/}
                                    <div className="accordion" id="accordionWeiterbildungKarrieretutor">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <p className="fw-light fs-5">05/2023 - 07/2023</p>
                                                <button className="accordion-button fs-5 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelKarriereTutor-collapseOne" aria-expanded="true" aria-controls="panelKarriereTutor-collapseOne">
                                                    HTML- & CSS-Kurs
                                                </button>
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div id="panelKarriereTutor-collapseOne" className="accordion-collapse collapse">
                                    <div className="accordion-body mt-5">
                                        <p className="text-decoration-underline fw-semibold">Ablauf:</p>
                                        <p>Vollzeit <br />Zwei Mal wöchentlich Live-Unterricht, den Rest der Woche Selbststudium und kleine Projekte, die ich selbstständig bearbeitet habe</p>
                                        <div className="row">
                                            <div className="col">
                                                <p className="text-decoration-underline fw-semibold">Dauer</p>
                                                <p>8 Wochen</p>
                                            </div>
                                        </div>
                                        <p className="text-decoration-underline fw-semibold">Inhalte u.a.:</p>
                                        <div className="container text-center tech-stack-container-small m-0">
                                            <div className="row flex-wrap gap-2 justify-content-between">
                                                {stackListHtmlCss.map((item, index) => (
                                                    <span key={index} className="d-block px-4 py-1 col rounded-1">{item}</span>
                                                ))}

                                            </div>
                                        </div>
                                        <p className="text-decoration-underline fw-semibold mt-4">Abschluss:</p>
                                        <div className="row align-items-center">
                                            <div className="col"><p>Prüfung (Note: 1,0)</p></div>

                                            {/* <div className="col"><ButtonClassic buttonText="zum Zeugnis" btnVariant="transparent-dark" onClick={scrollToCertificates} /></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Beruf */}
                    <div className="tab-pane fade" id="beruf-tab-pane" role="tabpanel" aria-labelledby="beruf-tab" tabIndex="0">
                        <div className="row bg-beige-light p-5 rounded-4">
                            <div className="row">
                                <div className="col flex-grow-0" id="realLogoWrapper">
                                    <div className="basic-logo-light rounded-circle d-flex align-items-center justify-content-center">
                                        <img src={realLogo} alt="" className="real-logo" />
                                    </div>
                                </div>

                                <div className="col p-lg-3 ps-lg-5">
                                    {/* Accordion Beruf*/}
                                    <div className="accordion" id="accordionReal">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <p className="fw-light fs-5">10/2011 - 06/2022</p>
                                                <button className="accordion-button fs-5 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelReal-collapseOne" aria-expanded="true" aria-controls="panelReal-collapseOne">
                                                    Mitarbeiterin Qualitätsmanagement
                                                </button>
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div id="panelReal-collapseOne" className="accordion-collapse collapse ">
                                    <div className="accordion-body mt-5">
                                        <p className="fw-regular fs-5 mb-5">real GmbH, Düsseldorf <br />Zentralverwaltung</p>
                                        <p className="text-decoration-underline fw-semibold">Aufgaben u.a.:</p>
                                        <div className="container text-center tech-stack-container-small my-3">
                                            <div className="row flex-wrap gap-2 justify-content-between">
                                                {tasksQM.map((item, index) => (
                                                    <div key={index} className="row flex-wrap gap-2 justify-content-between">
                                                        <p key={index} className="px-4 py-2 flex-grow-1 m-0">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {/* <ButtonClassic buttonText="zum Zeugnis" btnVariant="transparent-dark" onClick={scrollToCertificates} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" role="tabpanel" aria-labelledby="studium-tab" tabIndex="0" id="tabPaneHSNiederrhein">
                        <div className="row bg-beige-light p-5 rounded-4">
                            <div className="row">
                                <div className="col flex-grow-0 p-xs-0" id="hsNiederrheinLogoWrapper">
                                    <div className="basic-logo-light rounded-circle d-flex align-items-center justify-content-center">
                                        <img src={hsNiederrheinLogo} alt="Hochschule Niederrhein" className="hs-logo" id="hsNiederrheinLogo" />
                                    </div>
                                </div>

                                <div className="col p-sm-3 ps-lg-5">
                                    {/* Accordion Studium*/}
                                    <div className="accordion" id="accordionStudium">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <p className="fw-light fs-5">09/2005 - 08/2011</p>
                                                <button className="accordion-button fs-5 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#panelStudium-collapseOne" aria-expanded="true" aria-controls="panelStudium-collapseOne">
                                                    Diplom Oecotrophologie (FH)
                                                </button>
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div id="panelStudium-collapseOne" className="accordion-collapse collapse ">
                                    <div className="accordion-body mt-5">
                                        <p className="fw-regular fs-5 mb-5">Hochschule Niederrhein, Mönchengladbach</p>
                                        <p className="text-decoration-underline fw-semibold">Diplomarbeit:</p>
                                        <p>"Entwicklung einer
                                            beratenden und informierenden
                                            Website für Unternehmen zum
                                            Thema 'Arbeitsanalyse-verfahren'"</p>
                                        <p>(Webseite entwickelt mit HTML, CSS, PHP, MySQL)</p>
                                        <p>Note: gut</p>

                                        {/* <ButtonClassic buttonText="zum Zeugnis" btnVariant="transparent-dark" onClick={scrollToCertificates} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfessionalData;