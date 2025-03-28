import React, { useState, useEffect, useRef } from "react";
import "./Banner.css";

const announcements = [
    { id: 1, image: "https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/04e7ede2-de3f-480a-8a3b-a19b6c189171/Banner%403x.png?t=1741941526186" },
    { id: 2, image: "https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/f3513a19-5a0f-454d-bcc6-3c14d81deae9/Banner%403x.png?t=1741869238076" },
    { id: 3, image: "https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/0efbce89-ae36-4f4e-be58-8bcecbcdc01a/s.s.s.png?t=1741086386055" },
    { id: 4, image: "https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/7e366946-0493-4feb-92e1-8b657c323aa1/etkinlik1.png?t=1722934404102" },
    { id: 5, image: "https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/1e694345-2df1-4851-8726-c8a1cc48fb8c/26Aralık-2MilyonBanner.png?t=1735221987116" },
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % announcements.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        const validIndex = (index + announcements.length) % announcements.length;
        setActiveIndex(validIndex);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || startX === null) return;

        const distance = e.clientX - startX;

        if (distance > 100) {
            goToSlide(activeIndex - 1);
            setIsDragging(false);
            setStartX(null);
        } else if (distance < -100) {
            goToSlide(activeIndex + 1);
            setIsDragging(false);
            setStartX(null);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setStartX(null);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setStartX(null);
    };

    return (
        <div
            className="banner-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            {announcements.map((item, index) => (
                <div
                    key={item.id}
                    className={`banner-slide ${index === activeIndex ? "active" : ""}`}
                    style={{ backgroundImage: `url(${item.image})` }}
                />
            ))}

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
