import "./Certificates.css";
import realZeugnis from "../../assets/img/mh-real-zeugnis-1.jpg";
import fullstackZeugnis from "../../assets/img/mh-supercode-zeugnis.jpg";
import diplom from "../../assets/img/mh-diplom-zeugnis-1.jpg";
import htmlZeugnis from "../../assets/img/mh-html-css-zeugnis.jpg";
import ButtonClassic from "../../components/button/ButtonClassic";
import fullstackPDF from "../../assets/img/mh-fullstack.pdf";
import htmlCssPDF from "../../assets/img/mh-htmlCss.pdf";
import realPDF from "../../assets/img/mh-real-zeugnis.pdf";
import diplomPDF from "../../assets/img/mh-diplom-zeugnis.pdf";


const Certificates = () => {

    return (
        <>
            <div className="container-full-width bg-beige text-center my-11 pb-5" id="certificates">
                <h2 className="py-5">Zeugnisse</h2>

                <div className="row mx-auto px-center-120">
                    <div className="col m-3">
                        <div class="card mb-3 hover-scale">
                            <div class="row g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src={fullstackZeugnis} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Fullstack Web-Entwicklung</h5>
                                        <p class="card-text">Supercode GmbH</p>
                                        <p class="card-text"><small class="text-body-secondary">März 2023</small></p>
                                        <ButtonClassic btnVariant="transparent-dark" buttonText="anzeigen" dataBsToggle="modal" dataBsTarget="#zeugnisFullstackModal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col m-3">
                        <div className="col">
                            <div class="card mb-3 hover-scale">
                                <div class="row g-0 align-items-center">
                                    <div class="col-md-4">
                                        <img src={htmlZeugnis} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">HTML & CSS</h5>
                                            <p class="card-text">karriere tutor GmbH</p>
                                            <p class="card-text"><small class="text-body-secondary">Juli 2023</small></p>
                                            <ButtonClassic btnVariant="transparent-dark" buttonText="anzeigen" dataBsToggle="modal" dataBsTarget="#zeugnisHtmlModal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mx-auto px-center-120">
                    <div className="col m-3">
                        <div class="card mb-3 hover-scale">
                            <div class="row g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src={realZeugnis} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Arbeitszeugnis Qualitätsmanagement</h5>
                                        <p class="card-text">real GmbH</p>
                                        <p class="card-text"><small class="text-body-secondary">Juni 2022</small></p>
                                        <ButtonClassic btnVariant="transparent-dark" buttonText="anzeigen" dataBsToggle="modal" dataBsTarget="#zeugnisRealModal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col m-3">
                        <div className="col">
                            <div class="card mb-3 hover-scale">
                                <div class="row g-0 align-items-center">
                                    <div class="col-md-4">
                                        <img src={diplom} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Diplom Oecotrophologie</h5>
                                            <p class="card-text">Hochschule Niederrhein</p>
                                            <p class="card-text"><small class="text-body-secondary">Juli 2011</small></p>
                                            <ButtonClassic btnVariant="transparent-dark" buttonText="anzeigen" dataBsToggle="modal" dataBsTarget="#zeugnisDiplomModal" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Modal Fullstack */}
                <div class="modal fade" id="zeugnisFullstackModal" tabindex="-1" aria-labelledby="zeugnisFullstackModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content" style={{ height: "500px" }}>
                            <div class="modal-header">
                                <h5 class="modal-title text-danger" id="zeugnisFullstackModalLabel">PDF</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <iframe
                                    src={fullstackPDF}
                                    height="80%"
                                    width="80%"
                                ></iframe>
                            </div>
                            <div class="modal-footer">
                                <ButtonClassic btnVariant="transparent-dark" buttonText="schließen" dataBsDismiss="modal" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal HTML CSS */}
                <div class="modal fade" id="zeugnisHtmlModal" tabindex="-1" aria-labelledby="zeugnisHtmlModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content" style={{ height: "500px" }}>
                            <div class="modal-header">
                                <h5 class="modal-title text-danger" id="zeugnisHtmlModalLabel">PDF</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <iframe
                                    src={htmlCssPDF}
                                    height="80%"
                                    width="80%"
                                ></iframe>
                            </div>
                            <div class="modal-footer">
                                <ButtonClassic btnVariant="transparent-dark" buttonText="schließen" dataBsDismiss="modal" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal real */}
                <div class="modal fade" id="zeugnisRealModal" tabindex="-1" aria-labelledby="zeugnisRealModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content" style={{ height: "500px" }}>
                            <div class="modal-header">
                                <h5 class="modal-title text-danger" id="zeugnisRealModalLabel">PDF</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <iframe
                                    src={realPDF}
                                    height="80%"
                                    width="80%"
                                ></iframe>
                            </div>
                            <div class="modal-footer">
                                <ButtonClassic btnVariant="transparent-dark" buttonText="schließen" dataBsDismiss="modal" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal Diplom */}
                <div class="modal fade" id="zeugnisDiplomModal" tabindex="-1" aria-labelledby="zeugnisDiplomModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content" style={{ height: "500px" }}>
                            <div class="modal-header">
                                <h5 class="modal-title text-danger" id="zeugnisDiplomModalLabel">PDF</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <iframe
                                    src={diplomPDF}
                                    height="80%"
                                    width="80%"
                                ></iframe>
                            </div>
                            <div class="modal-footer">
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