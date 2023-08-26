import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layouts = ({ children, className }) => {
    return (
        <>
            <div className="font-monospace">
                <Navbar />
                <div className={className} style={{ minHeight: "450px" }}>{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layouts;
