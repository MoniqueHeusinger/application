import "./ButtonClassic.css";
import Button from "react-bootstrap/esm/Button";

const ButtonClassic = ({ buttonText, btnVariant, onClick, url, additionalClassName, dataBsToggle, dataBsTarget, dataBsDismiss }) => {
    const handleBtnClick = () => {

        if (url.startsWith('http')) {
            window.open(url, '_blank');
        } else {
            const element = document.body.querySelector(`#${url}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }


    };

    return (
        <Button className={`border border-1 rounded-pill my-2 px-6 py-2 ${additionalClassName}`} variant={btnVariant} onClick={handleBtnClick} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} data-bs-dismiss={dataBsDismiss}>{buttonText}</Button>
    );
}

export default ButtonClassic;