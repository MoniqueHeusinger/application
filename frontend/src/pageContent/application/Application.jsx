import "./Application.css";
import studyCoding from "../../assets/img/study-coding.svg";
import realBag from "../../assets/img/real-bag.svg";
import handshake from "../../assets/img/handshake.png";
import bootcamp from "../../assets/img/bootcamp.svg";
import heartGIF from "../../assets/img/hearts.gif";
import ButtonClassic from "../../components/button/ButtonClassic";
import { useCertificateContext } from "../../context/CertificateContext";
import Certificates from "../certificates/Certificates";
import { useEffect } from "react";
import { useScrollContext } from "../../context/ScrollContext";

const Application = () => {
    const { certificatesComponentVisible } = useCertificateContext();
    const { scrollToSection } = useScrollContext();

    useEffect(() => {
        if (certificatesComponentVisible) {
            scrollToSection("certificates");
        }
    }, [certificatesComponentVisible])

    return (
        <>
            <div className="bg-beige mt-11 pb-5" id="application">
                <div className="row">
                    <h2 className="pt-5">Bewerbung</h2>
                </div>
            </div>
            <div className="row mx-auto px-center-default mt-5">

                <div className="col-8 text-start align-self-center">
                    <p><strong>„the time is now“</strong> - nicht nur ein großartiger Songtitel, sondern auch mein Lebensmotto, das perfekt diesen Punkt in meiner beruflichen Laufbahn beschreibt.</p>
                </div>
                <div className="col">
                    <iframe src="https://open.spotify.com/embed/track/6h9AH81lpDbjcsBz2ClqAE?utm_source=generator&theme=0" width="100%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <div className="row mx-auto px-center-default mt-5 align-items-center">
                <div className="col relative">
                    <img src={studyCoding} alt="Oecotrophologie + Coding = LOVE" className="custom-width-studyCoding" />
                    <img src={heartGIF} alt="" className="hearts-gif" />
                </div>

                <div className="col-md-8 text-end ps-7 pt-3">
                    <p>Oecotrophologie studieren und eine Leidenschaft für Webentwicklung zu haben, mag auf den ersten Blick unkonventionell erscheinen. Doch schon während meiner Jugend entdeckte ich meine Begeisterung für kreative Ausdrucksformen am PC. </p>
                    <p>In meiner Freizeit liebe ich es mit Bildbearbeitungssoftware tolle Designs zu erstellen. Meinen ersten Schritt in die Webentwicklung setzte ich während meiner Diplomarbeit, bei der ich eine Webseite erstellte und meine Affinität für das Programmieren entdeckte.</p>
                </div>
            </div>

            <div className="row mx-auto px-center-default mt-5 align-items-center">

                <div className="col-md-8 text-start">
                    <p>In den folgenden elf Jahren habe ich als Mitarbeiterin im Qualitätsmanagement bei der real GmbH meinen ausgeprägten Qualitätsanspruch unter Beweis gestellt. Dabei gehörte die Pflege des QM-Handbuchs zu meinen Hauptaufgaben. Ich habe komplexe (rechtliche oder interne) Vorgaben analysiert, um sie anschließend in praktikable interne Prozesse umzuwandeln.</p>
                    <p>Während meiner Zeit im real-Qualitätsmanagement war ich hauptverantwortlich für die Koordination der Bio-Audits für die real-Märkte. Neben der Vorbereitung und Begleitung des Audits der Zentrale, habe ich ebenfalls die Märkte bei der Vor- und Nachbereitung von Audits unterstützt.</p>
                    <p>Bei der Bearbeitung von zum Teil kritischen Anfragen von Kunden, Behörden oder Medien habe ich gelernt mit unterschiedlichen Personenkreisen zu kommunizieren und auch unter Zeitdruck den Fokus auf das Wesentliche zu setzen.</p>
                    <p>Neben den wechselnden fachlichen Herausforderungen hat mir die Arbeit im Team und die interdisziplinäre Zusammenarbeit mit Kollegen besonders gut gefallen.</p>
                </div>
                <div className="col">
                    <img src={realBag} alt="" />
                </div>
            </div>
            <div className="row mx-auto px-center-default mt-5 ">
                <div className="col-12 shadow-box rounded-4 py-4 px-6">
                    <h6 className="lh-base">Jetzt ist der Moment gekommen, meinen Lebenstraum zu verfolgen und mich voll und ganz der Webentwicklung zu widmen.</h6>
                </div>

            </div>
            <div className="row mx-auto px-center-default mt-5 align-items-center">
                <div className="col">
                    <img src={bootcamp} alt="" />
                </div>
                <div className="col-md-8 pt-3 text-end">
                    <p>Die Liquidation der real GmbH habe ich als Chance gesehen mich weiterzubilden und so meine Begeisterung für die Webentwicklung zu meinem Beruf zu machen.</p>
                    <p>In siebenundzwanzig Wochen absolvierte  ich ein intensives Vollzeit-Bootcamp zur Full Stack Web-Entwicklerin. Die täglichen Aufgaben und Projekte habe ich genutzt, um - sowohl selbstständig als auch im Team - meine Programmierkenntnisse stetig zu vertiefen. Hierbei lege ich viel Wert auf sorgfältige Planung und kontinuierliches Testing meines Codes.</p>
                </div>
            </div>

            <div className="row mx-auto px-center-default mt-5">

                <div className="col-md-8 text-start">
                    <p>Hochmotiviert und fest entschlossen, mich in diese dynamische Welt einzubringen, bin ich gespannt in neue Technologien einzutauchen und mein Wissen kontinuierlich zu erweitern.</p>
                </div>
                <div className="col">
                    <img src={handshake} alt="" />
                </div>
            </div>

            <div className="row mx-auto px-center-default mt-5 flex-column" id="getInContact">
                <h3>Ihr wollt mich persönlich kennenlernen?</h3>
                <ButtonClassic btnVariant="transparent-dark" buttonText="zu meinen Kontaktdaten" url="contact" />
            </div>

            {/* Render Certificates */}
            {certificatesComponentVisible && <Certificates />}
        </>
    );
}

export default Application;