import { useScrollContext } from "../../context/ScrollContext";
import "./ButtonClassic.css";
import Button from "react-bootstrap/esm/Button";

const ButtonClassic = ({ buttonText, btnVariant, onClick, url, additionalClassName, dataBsToggle, dataBsTarget, dataBsDismiss }) => {
    const { scrollToSection } = useScrollContext();

    const handleBtnClick = (event) => {
        if (url && url.startsWith("http")) {
            window.open(url, "_blank");
        } else {
            scrollToSection(url);
        }

        if (onClick) {
            onClick(event);
        }
        // if (url) {
        //     if (url.startsWith('http')) {
        //         window.open(url, '_blank');
        //     } else {

        // const element = document.body.querySelector(`#${url}`);
        // if (element) {
        //     element.scrollIntoView({ behavior: 'smooth' });
        // }
        // }
        // } else if (onClick) {
        //     onClick(event);
        // }
    };

    return (
        <Button className={`border border-1 rounded-pill mx-auto my-2 px-6 py-2 ${additionalClassName}`} variant={btnVariant} onClick={handleBtnClick} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} data-bs-dismiss={dataBsDismiss}>{buttonText}</Button>
    );
}

export default ButtonClassic;