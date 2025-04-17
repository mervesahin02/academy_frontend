import React, { useState, useEffect } from "react";
import "./SocialMediaIcons.css";
import { FaYoutube, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const SocialMediaIcons = () => {
    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const bannerHeight = 400;
            setShowIcons(window.scrollY > bannerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`social-media-container ${showIcons ? "visible" : "hidden"}`}>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter size={24} /></a>
        </div>
    );
};

export default SocialMediaIcons;
