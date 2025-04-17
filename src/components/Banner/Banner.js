import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';

const banners = [
    'https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/2572f220-d535-4af7-9288-6e250cbade90/Banner%401.5x.png?t=1743075398023',
    'https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/4bcf9bc7-05ec-4664-abf2-7924e2471dcc/mobiluygulama-banner.png?t=1722860311607',
    'https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/459c71d5-38a1-4038-9d5f-3a8939c19e47/Banner%403x%2810%29.png?t=1740991951955',
    'https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/4ca70aac-f3c3-4afa-a640-bb8b2c95f8a0/sosyalmedyabanner.jpeg?t=1702648016506'
];

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progressKey, setProgressKey] = useState(0);
    const startX = useRef(null);
    const isDragging = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
            setProgressKey((prevKey) => prevKey + 1);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
        setProgressKey((prev) => prev + 1);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        setProgressKey((prev) => prev + 1);
    };

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
    };

    const handleMouseUp = (e) => {
        if (!isDragging.current) return;
        const diff = e.clientX - startX.current;

        if (diff > 50) goToPrevious(); // sola çektiyse
        else if (diff < -50) goToNext(); // sağa çektiyse

        isDragging.current = false;
    };

    const handleMouseLeave = () => {
        isDragging.current = false;
    };

    return (
        <div
            className="banner-area"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <div className="banner-content">
                <img
                    src={banners[currentIndex]}
                    alt={`Banner ${currentIndex + 1}`}
                    className="banner-image"
                    draggable="false"
                />
            </div>

            <div key={progressKey} className="progress-wrapper">
                <div className="progress-bar"></div>
            </div>
        </div>
    );
}

export default Banner;
