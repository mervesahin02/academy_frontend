import React, { useState, useEffect } from "react";
import "./Banner.css";

const announcements = [
    { id: 1, title: "Duyuru 1", image: "/images/1.jpg" },
    { id: 2, title: "Duyuru 2", image: "/images/2.jpg" },
    { id: 3, title: "Duyuru 3", image: "/images/3.jpg" },
    { id: 4, title: "Duyuru 4", image: "/images/4.jpg" },
    { id: 5, title: "Duyuru 5", image: "/images/5.jpeg" },
];

const Banner = () => {
    const [activeId, setActiveId] = useState(null);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        let timer;
        if (hoveredId !== null) {
            timer = setTimeout(() => {
                setActiveId(hoveredId);
            }, 1000); //  saniye sonra büyüt
        }
        return () => clearTimeout(timer);
    }, [hoveredId]);

    return (
        <div className="banner-container">
            {announcements.map((item) => (
                <div
                    key={item.id}
                    className={`banner-item ${activeId === item.id ? "active" : ""}`}
                    onClick={() => setActiveId(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <span className={`number ${hoveredId === item.id ? "fill" : ""}`}>
                        {item.id}
                    </span>
                    <img src={item.image} alt={item.title} />
                </div>
            ))}
        </div>
    );
};

export default Banner;
