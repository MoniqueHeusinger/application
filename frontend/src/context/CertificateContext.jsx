import React, { createContext, useState, useContext } from "react";

export const CertificateContext = createContext([]);

export const CertificateProvider = ({ children }) => {
    const [certificatesComponentVisible, setCertificatesComponentVisible] = useState(false);

    return (
        <CertificateContext.Provider value={{ certificatesComponentVisible, setCertificatesComponentVisible }}>
            {children}
        </CertificateContext.Provider>
    );
};

export const useCertificateContext = () => useContext(CertificateContext);