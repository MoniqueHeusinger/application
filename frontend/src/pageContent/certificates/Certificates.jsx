import "./Certificates.css";
import realZeugnis from "../../assets/img/mh-real-zeugnis-s.jpg";
import fullstackZeugnis from "../../assets/img/mh-supercode-zeugnis-s.jpg";
import diplom from "../../assets/img/mh-diplom-zeugnis-s.jpg";
import htmlZeugnis from "../../assets/img/mh-html-css-zeugnis-s.jpg";
import ButtonClassic from "../../components/button/ButtonClassic";
import fullstackPDF from "../../assets/img/mh-fullstack_wz.pdf";
import htmlCssPDF from "../../assets/img/mh-htmlCss_wz.pdf";
import realPDF from "../../assets/img/mh-real-zeugnis_wz.pdf";
import diplomPDF from "../../assets/img/mh-diplom-zeugnis_wz.pdf";


const Certificates = () => {

    return (
        <>
            <div className="bg-beige text-center my-11 pb-5" id="certificates">
                <h2 className="py-5">Zeugnisse</h2>

                <div className="row mx-auto px-center-default">
                    <div className="col m-3">
                        <div className="card mb-3 hover-scale">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                    <img src={fullstackZeugnis} className="img-fluid rounded-start" alt="Fullstack Developer Zeugnis" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Fullstack Web-Entwicklung</h5>
                                        <p className="card-text">Supercode GmbH</p>
                                        <p className="card-text"><small className="text-body-secondary">März 2024</small></p>
                                        <ButtonClassic btnVariant="transparent-dark" buttonText="anzeigen" dataBsToggle="modal" dataBsTarget="#zeugnisFullstackModal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col m-3">
                        <div className="col">
                            <div className="card mb-3 hover-scale">
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-4">
                                        <img src={htmlZeugnis} className="img-fluid rounded-start" alt="HTML & CSS Zertifikat" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">HTML & CSS</h5>
                                            <p className="card-text">karriere tutor GmbH</p>
                                            <p className="card-text"><small className="text-body-secondary">Juli 2023</small></p>
                                            <ButtonClassic btnVariant="transparent-dark" buttonText="anzeigen" dataBsToggle="modal" dataBsTarget="#zeugnisHtmlModal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mx-auto px-center-default">
                    <div className="col m-3">
                        <div className="card mb-3 hover-scale">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                    <img src={realZeugnis} className="img-fluid rounded-start" alt="real Arbeitszeugnis" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Arbeitszeugnis Qualitätsmanagement</h5>
                                        <p className="card-text">real GmbH</p>
                                        <p className="card-text"><small className="text-body-secondary">Juni 2022</small></p>
                                        <ButtonClassic btnVariant="transparent-dark" buttonText="anzeigen" dataBsToggle="modal" dataBsTarget="#zeugnisRealModal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col m-3">
                        <div className="col">
                            <div className="card mb-3 hover-scale">
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-4">
                                        <img src={diplom} className="img-fluid rounded-start" alt="Diplomzeugnis" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Diplom Oecotrophologie</h5>
                                            <p className="card-text">Hochschule Niederrhein</p>
                                            <p className="card-text"><small className="text-body-secondary">Juli 2011</small></p>
                                            <ButtonClassic btnVariant="transparent-dark" buttonText="anzeigen" dataBsToggle="modal" dataBsTarget="#zeugnisDiplomModal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Modal Fullstack */}
                <div className="modal fade" id="zeugnisFullstackModal" tabIndex="-1" aria-labelledby="zeugnisFullstackModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content" style={{ height: "500px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="zeugnisFullstackModalLabel">PDF</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    src={fullstackPDF}
                                    height="80%"
                                    width="80%"
                                ></iframe>
                            </div>
                            <div className="modal-footer">
                                <ButtonClassic btnVariant="transparent-dark" buttonText="schließen" dataBsDismiss="modal" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal HTML CSS */}
                <div className="modal fade" id="zeugnisHtmlModal" tabIndex="-1" aria-labelledby="zeugnisHtmlModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content" style={{ height: "500px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="zeugnisHtmlModalLabel">PDF</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    src={htmlCssPDF}
                                    height="80%"
                                    width="80%"
                                ></iframe>
                            </div>
                            <div className="modal-footer">
                                <ButtonClassic btnVariant="transparent-dark" buttonText="schließen" dataBsDismiss="modal" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal real */}
                <div className="modal fade" id="zeugnisRealModal" tabIndex="-1" aria-labelledby="zeugnisRealModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content" style={{ height: "500px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="zeugnisRealModalLabel">PDF</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    src={realPDF}
                                    height="80%"
                                    width="80%"
                                ></iframe>
                            </div>
                            <div className="modal-footer">
                                <ButtonClassic btnVariant="transparent-dark" buttonText="schließen" dataBsDismiss="modal" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Diplom */}
                <div className="modal fade" id="zeugnisDiplomModal" tabIndex="-1" aria-labelledby="zeugnisDiplomModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content" style={{ height: "500px" }}>
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="zeugnisDiplomModalLabel">PDF</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    src={diplomPDF}
                                    height="80%"
                                    width="80%"
                                ></iframe>
                            </div>
                            <div className="modal-footer">
                                <ButtonClassic btnVariant="transparent-dark" buttonText="schließen" dataBsDismiss="modal" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Certificates;