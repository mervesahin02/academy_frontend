import React, { useState, useEffect } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollPercentage(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="scroll-indicator">
            <div className="scroll-bar" style={{ height: `${scrollPercentage}%` }}></div>
        </div>
    );
};

export default ScrollIndicator;
