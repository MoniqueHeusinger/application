import "./ScrollToTopBtn.css";
import { useEffect, useState } from "react";
import scrollToTopIcon from "../../assets/img/up.png";
import { useLocation } from "react-router-dom";

const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const location = useLocation();

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // reset scroll position when the route changes
        setIsVisible(false);
        scrollToTop();
    }, [location.pathname]);

    return (
        isVisible && (
            <a href="#" className="to-top" onClick={scrollToTop}>
                <img src={scrollToTopIcon} alt="up" />
            </a>
        )
    );
};

export default ScrollToTopBtn;