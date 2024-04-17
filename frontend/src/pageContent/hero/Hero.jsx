import ButtonClassic from "../../components/button/ButtonClassic";
import "./Hero.css";
import Stack from "react-bootstrap/esm/Stack";

const Hero = ({ scrollToContact }) => {
    return (
        <>
            <Stack className="mx-auto mt-250 pt-10 px-5 pb-3 bg-beige rounded-4 relative" gap={3}>
                <div className="hero-img rounded-circle"></div>
                <div className="">
                    <h1 className="font-thin mb-4">Hi, ich bin <br />
                        Monique Heusinger und <br />
                        Fullstack Developerin!</h1>
                </div>
                <div className=""><p>Ich freue mich, dass du mehr über mich erfahren möchtest.</p><p>Anstelle eines trockenen Lebenslaufes zeige ich dir hier, wer ich bin, was ich kann und, was ich bisher erreicht habe - und noch mehr ;)</p><p>Du möchtest mit mir Kontakt aufnehmen? Kein Problem!</p>
                    <ButtonClassic btnVariant="transparent-light" buttonText="Kontakt" onClick={scrollToContact} /></div>

            </Stack >

        </>
    );
}

export default Hero;