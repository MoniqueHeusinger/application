import "./Application.css";
import studyCoding from "../../assets/img/study-coding.svg";
import realBag from "../../assets/img/real-bag.svg";
import handshake from "../../assets/img/handshake.png";
import bootcamp from "../../assets/img/bootcamp.svg";
import heartGIF from "../../assets/img/hearts.gif";

const Application = () => {
    return (
        <>
            <div className="container-full-width bg-beige mt-11 pb-5">
                <div className="row">
                    <h2 className="pt-5 pb-3">Bewerbung</h2>
                </div>
                <div className="row">
                    <div className="col-4 mx-auto">
                        <h5 className="lh-base">als <span className="text-uppercase">Frontend Developerin</span> bei der <span className="text-uppercase">Wertgarantie</span> Group</h5>
                    </div>
                </div>

            </div>
            <div className="row mx-auto px-center-120 mt-5">

                <div className="col-8 text-start align-self-center">
                    <p><strong>„the time is now“</strong> - nicht nur ein großartiger Songtitel, sondern auch mein Lebensmotto, das perfekt diesen Punkt in meiner beruflichen Laufbahn beschreibt.</p>
                </div>
                <div className="col">
                    <iframe src="https://open.spotify.com/embed/track/6h9AH81lpDbjcsBz2ClqAE?utm_source=generator&theme=0" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <div className="row mx-auto px-center-120 mt-5 align-items-center">
                <div className="col relative">
                    <img src={studyCoding} alt="Oecotrophologie + Coding = LOVE" className="custom-width-studyCoding" />
                    <img src={heartGIF} alt="" className="hearts-gif" />
                </div>

                <div className="col-8 text-end ps-7">
                    <p>Oecotrophologie studieren und eine Leidenschaft für Webentwicklung zu haben, mag auf den ersten Blick unkonventionell erscheinen. Doch schon während meiner Jugend entdeckte ich meine Begeisterung für kreative Ausdrucksformen am PC. </p>
                    <p>Meinen ersten Schritt in die Webentwicklung setzte ich während meiner Diplomarbeit, wo ich eine Webseite u.a. mit PHP und MySQL erstellte und damit meine Begeisterung für das Programmieren entdeckte.</p>
                </div>
            </div>

            <div className="row mx-auto px-center-120 mt-5 align-items-center">

                <div className="col-8 text-start">
                    <p>In den folgenden elf Jahren habe ich als Mitarbeiterin im Qualitätsmanagement bei der real GmbH meinen ausgeprägten Qualitätsanspruch unter Beweis gestellt.</p>
                    <p>Das kontinuierliche Einarbeiten von neuen rechtlichen Vorgaben gehörte dabei ebenso zu meinen Aufgaben, wie die Erstellung von gewissenhaften Dokumentationen.</p>
                </div>
                <div className="col">
                    <img src={realBag} alt="" />
                </div>
            </div>
            <div className="row mx-auto px-center-120 mt-5 ">
                <div className="col-12 shadow-box rounded-4 py-4 px-6">
                    <p>Jetzt ist der Moment gekommen, meinen Lebenstraum zu verfolgen und mich voll und ganz der Webentwicklung zu widmen.</p>
                </div>

            </div>
            <div className="row mx-auto px-center-120 mt-5 align-items-center">
                <div className="col">
                    <img src={bootcamp} alt="" />
                </div>
                <div className="col-8 text-end">
                    <p>In siebenundzwanzig Wochen absolvierte  ich ein intensives Vollzeit-Bootcamp zur Fullstack Web-Entwicklerin.</p>
                    <p>In diesen intensiven Monaten habe ich jeden Tag gecodet - sowohl selbstständig als auch im Team - und mein neues Wissen in Aufgaben oder Projekten angewandt. Dabei bringt mich auch ein Merge-Konflikt nicht mehr ins Schwitzen.</p>
                </div>
            </div>

            <div className="row mx-auto px-center-120 mt-5">

                <div className="col-8 text-start">
                    <p>Ich freue mich darauf in einem familiären und wertschätzenden Unternehmen wie der WERTGARANTIE Group zu arbeiten und dort in einem unterstützenden Team nicht nur meine Programmier-Fähigkeiten, sondern auch meine Gaming-Skills weiterzuentwickeln - im Feierabend selbstverständlich.</p>
                </div>
                <div className="col">
                    <img src={handshake} alt="" />
                </div>
            </div>
            <div className="row mx-auto px-center-120 mt-5">
                <div className="col-12 shadow-box rounded-4 py-4 px-6">
                    <p>So wie ihr die Produkte eurer Kunden absichert, garantiere ich dir: Mit Entschlossenheit und Kreativität schaffe ich Frontend-Lösungen von bleibendem Wert!</p>
                </div>
            </div>
        </>
    );
}

export default Application;