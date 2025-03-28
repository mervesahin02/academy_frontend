import React, { useState, useEffect } from "react";
import "./ScrollIndicator.css";
import { FaMoon, FaSun } from "react-icons/fa";

const ScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollPercentage(scrollPercent);;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [sunActive, setSunActive] = useState(true);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        setSunActive(!newMode); // güneş mi aktif kontrolü
        document.body.classList.toggle("dark-theme", newMode);
    };


    return (
        <div className="scroll-indicator">
            {/* 🌙☀️ Toggle */}
            <div className="theme-toggle" onClick={toggleTheme}>
                <div className={`toggle-circle ${darkMode ? "top" : "bottom"}`}></div>

                <FaMoon className={`toggle-icon moon-icon ${darkMode ? "active" : "inactive"}`} />
                <FaSun className={`toggle-icon sun-icon ${!darkMode ? "active" : "inactive"}`} />
            </div>

            {/* 🆙 Scroll to top yazısı */}
            {/* 🆙 Scroll to top yazısı */}
            <div className="scroll-text" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Başa Dön
            </div>


            {/* 📊 Scroll çizgisi */}
            <div className="scroll-track">
                <div className="scroll-bar" style={{ height: `${scrollPercentage}%` }}></div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
