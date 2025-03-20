import React, { useState, useEffect } from "react";
import "./Banner.css";
import { FaYoutube, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";

const announcements = [
    { id: 1, title: "Duyuru 1", image: "/images/1.jpg" },
    { id: 2, title: "Duyuru 2", image: "/images/2.jpg" },
    { id: 3, title: "Duyuru 3", image: "/images/3.jpg" },
    { id: 4, title: "Duyuru 4", image: "/images/4.jpg" },
    { id: 5, title: "Duyuru 5", image: "/images/5.jpeg" },
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        }, 5000); // Otomatik geçiş süresi
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="banner-container">
            {announcements.map((item, index) => (
                <div
                    key={item.id}
                    className={`banner-slide ${index === activeIndex ? "active" : ""}`}
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    <div className="banner-overlay">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}

            {/* Noktalı Navigasyon */}
            <div className="pagination-dots">
                {announcements.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? "active-dot" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>

        </div>
    );
};

export default Banner;
