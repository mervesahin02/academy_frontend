/*import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <img src="/images/ziplama.png" alt="Yukarı Çık" />
            </button>
        )
    );
};

export default ScrollToTopButton; */
