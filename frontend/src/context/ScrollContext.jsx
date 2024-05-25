import { createContext, useContext } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            window.scrollTo(0, element.offsetTop - 100);
        }
    };

    const scrollContextValue = { scrollToSection };

    return (
        <ScrollContext.Provider value={scrollContextValue}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => useContext(ScrollContext);