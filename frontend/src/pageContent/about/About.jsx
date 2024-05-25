import { useEffect, useState } from "react";
import "./About.css";

const About = () => {
    const [personalIsClicked, setPersonalIsClicked] = useState(false);
    const [goalsIsClicked, setGoalsIsClicked] = useState(false);
    const [funFactsIsClicked, setFunFactsIsClicked] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 576);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handlePersonalButtonClicked = (event) => {
        event.preventDefault();
        setPersonalIsClicked(!personalIsClicked);
    }

    const handleGoalsButtonClicked = (event) => {
        event.preventDefault();
        setGoalsIsClicked(!goalsIsClicked);
    }

    const handleFunFactsButtonClicked = (event) => {
        event.preventDefault();
        setFunFactsIsClicked(!funFactsIsClicked);
    }

    return (
        <div className="bg-beige text-center my-11 pb-5" id="about">
            <h2 className="py-5">Über mich</h2>

            {isSmallScreen && (<>
                <div className="col" id="personalColSM">
                    <button className={personalIsClicked ? "btn rounded-circle activated" : "btn rounded-circle"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsePersonalData" aria-expanded="false" aria-controls="collapsePersonalData" onClick={handlePersonalButtonClicked}>
                        Persönlich
                    </button>
                </div>
                {/* Collapse for "Persönlich" */}
                <div className="col">
                    <div className="collapse mt-2 mb-5 px-4" id="collapsePersonalData">
                        <div className="card card-body about-item text-start rounded-4">
                            <p><span className="fw-semibold fs-5">Monique Heusinger <br /></span>
                                38 Jahre, Stier</p>
                            <p><span className="fw-semibold">Heimat: <br /></span>aufgewachsen in Merseburg; <br />seit 19 Jahren ist Mönchengladbach mein Zuhause</p>
                            <p><span className="fw-semibold">Familienstatus: <br /></span>"wilde Ehe",<br /> 2 Kinder (Susanna & Jonas)</p>
                            <p><span className="fw-semibold">Sprachkenntnisse: <br /></span><span className="d-inline-block mt-2">I don't mind a conversation in English.<br /></span><span className="d-inline-block mt-3">&iquest;Dónde está la biblioteca?<br /></span><span className="d-inline-block mt-3">Мой русский немного заржавел.</span></p>
                        </div>
                    </div>
                </div>

                {/* Goals */}
                <div className="col" id="goalsColSM">
                    <button className={goalsIsClicked ? "btn rounded-circle activated" : "btn rounded-circle"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseGoalsData" aria-expanded="false" aria-controls="collapseGoalsData" onClick={handleGoalsButtonClicked}>
                        Ziele
                    </button>
                </div>

                {/* Collapse for "Ziele" */}
                <div className="col">
                    <div className="collapse mt-2 mb-5 px-4" id="collapseGoalsData">
                        <div className="card card-body about-item text-start rounded-4">
                            <p><span className="fw-semibold">Beruflich: <br /></span> Mit Leidenschaft und Begeisterung als Frontend Developer durchstarten und dabei meine Kreativität einsetzen.</p>
                            <p>Mich ständig weiterentwickeln und mich mit immer neuen spannenden Themen auseinander setzen.</p>
                            <p><span className="fw-semibold">Persönlich: <br /></span> Spaß im Leben haben, die Welt sehen. <br /> Meine Kinder zu tollen Erwachsenen heranwachsen sehen.</p>
                        </div>
                    </div>
                </div>

                {/* Fun facts */}
                <div className="col">
                    <button className={funFactsIsClicked ? "btn rounded-circle activated" : "btn rounded-circle"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFunFactsData" aria-expanded="false" aria-controls="collapseFunFactsData" onClick={handleFunFactsButtonClicked}>
                        Fun facts
                    </button>
                </div>

                {/* Collapse for "Fun facts" */}
                <div className="col">
                    <div className="collapse mt-2 mb-5 px-4" id="collapseFunFactsData">
                        <div className="card card-body about-item text-start rounded-4">
                            <p><span className="fw-semibold">Heldin:</span><br /> Linda Belcher</p>
                            <p><span className="fw-semibold">Lieblingstier:</span><br /> Zwerghamster</p>
                            <p><span className="fw-semibold">Lieblingssongs: <span className="fst-italic fw-medium">(wenn es um Musik geht, lege ich mich ungern fest</span> &#129392;) </span></p>
                            <ul>
                                <li><a href="https://youtu.be/Wt5DwYAu1ao?feature=shared" target="_blank">A Girl Like You - Tame Impala (Like A Version Cover)</a></li>
                                <li><a href="https://youtu.be/kOnde5c7OG8?si=i0I56xGtLubNjcgS" target="_blank" className="d-inline-block pt-1">More Than This - Roxy Music</a></li>
                                <li><a href="https://youtu.be/BNs8pnOgtEw?si=gLcEi16Jw-Hy_Xou" target="_blank" className="d-inline-block pt-1">Manila - Maribou State</a></li>
                                <li><a href="https://youtu.be/WvjuQaEBUoo?si=F4ql8U6C0iE-GWqc" target="_blank" className="d-inline-block pt-1">Cathy's Clown - The Everly Brothers</a></li>
                            </ul>

                            <p><span className="fw-semibold">Superkraft: <br /></span> "Crafting MacGyver" <br /> (Gib mir eine geladene Heißklebepistole und ich zaubere dir etwas Wundervolles)</p>
                        </div>
                    </div>
                </div>
            </>
            )}

            {!isSmallScreen && (<>
                <div className="row mx-auto px-center-default">
                    <div className="col">
                        <button className={personalIsClicked ? "btn rounded-circle activated" : "btn rounded-circle"} type="button" data-bs-toggle="collapse" data-bs-target="#collapsePersonalData" aria-expanded="false" aria-controls="collapsePersonalData" onClick={handlePersonalButtonClicked}>
                            Persönlich
                        </button>
                    </div>

                    <div className="col">
                        <button className={goalsIsClicked ? "btn rounded-circle activated" : "btn rounded-circle"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseGoalsData" aria-expanded="false" aria-controls="collapseGoalsData" onClick={handleGoalsButtonClicked}>
                            Ziele
                        </button>
                    </div>

                    <div className="col" id="FunFactsColSM">
                        <button className={funFactsIsClicked ? "btn rounded-circle activated" : "btn rounded-circle"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFunFactsData" aria-expanded="false" aria-controls="collapseFunFactsData" onClick={handleFunFactsButtonClicked}>
                            Fun facts
                        </button>
                    </div>
                </div>

                <div className="row mx-auto px-center-default">
                    <div className="col">
                        {/* Personal Data*/}
                        <div className="collapse mt-4" id="collapsePersonalData">
                            <div className="card card-body about-item text-start rounded-4">
                                <p><span className="fw-semibold fs-5">Monique Heusinger <br /></span>
                                    38 Jahre, Stier</p>
                                <p><span className="fw-semibold">Heimat: <br /></span>aufgewachsen in Merseburg; <br />seit 19 Jahren ist Mönchengladbach mein Zuhause</p>
                                <p><span className="fw-semibold">Familienstatus: <br /></span>"wilde Ehe",<br /> 2 Kinder (Susanna & Jonas)</p>
                                <p><span className="fw-semibold">Sprachkenntnisse: <br /></span><span className="d-inline-block mt-2">I don't mind a conversation in English.<br /></span><span className="d-inline-block mt-3">&iquest;Dónde está la biblioteca?<br /></span><span className="d-inline-block mt-3">Мой русский немного заржавел.</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        {/* Goals Data*/}
                        <div className="col">
                            <div className="collapse mt-4" id="collapseGoalsData">
                                <div className="card card-body about-item text-start rounded-4">
                                    <p><span className="fw-semibold">Beruflich: <br /></span> Mit Leidenschaft und Begeisterung als Frontend Developer durchstarten und dabei meine Kreativität einsetzen.</p>
                                    <p>Mich ständig weiterentwickeln und mich mit immer neuen spannenden Themen auseinander setzen.</p>
                                    <p><span className="fw-semibold">Persönlich: <br /></span> Spaß im Leben haben, die Welt sehen. <br /> Meine Kinder zu tollen Erwachsenen heranwachsen sehen.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        {/* Fun facts Data*/}
                        <div className="col">
                            <div className="collapse mt-4" id="collapseFunFactsData">
                                <div className="card card-body about-item text-start rounded-4">
                                    <p><span className="fw-semibold">Heldin:</span><br /> Linda Belcher</p>
                                    <p><span className="fw-semibold">Lieblingstier:</span><br /> Zwerghamster</p>
                                    <p><span className="fw-semibold">Lieblingssongs: <span className="fst-italic fw-medium">(wenn es um Musik geht, lege ich mich ungern fest</span> &#129392;) </span></p>
                                    <ul>
                                        <li>
                                            <a href="https://youtu.be/Wt5DwYAu1ao?feature=shared" target="_blank">A Girl Like You - Tame Impala (Like A Version Cover)</a>
                                        </li>
                                        <li><a href="https://youtu.be/kOnde5c7OG8?si=i0I56xGtLubNjcgS" target="_blank" className="d-inline-block pt-1">More Than This - Roxy Music</a></li>
                                        <li><a href="https://youtu.be/BNs8pnOgtEw?si=gLcEi16Jw-Hy_Xou" target="_blank" className="d-inline-block pt-1">Manila - Maribou State</a></li>
                                        <li><a href="https://youtu.be/WvjuQaEBUoo?si=F4ql8U6C0iE-GWqc" target="_blank" className="d-inline-block pt-1">Cathy's Clown - The Everly Brothers</a></li>
                                    </ul>

                                    <p><span className="fw-semibold">Superkraft: <br /></span> "Crafting MacGyver" <br /> (Gib mir eine geladene Heißklebepistole und ich zaubere dir etwas Wundervolles)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>)}
        </div>

    );
}

export default About;