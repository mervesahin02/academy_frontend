// events/EventSection.js
import React, { useRef, useEffect } from 'react';
import './EventSection.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import EventCard from './EventCard';

const eventData = [
    {
        id: 1,
        location: "ANKARA",
        title: "Sızma Testi ve Olay Müdahale Eğitimi",
        date: "14 Eylül 2024 - 6 Ekim 2024",
        duration: "48 Saat",
        level: "Lisans, Doktora, Ön Lisans, Yüksek Lisans",
        code: "101",
        deadline: "8 Eylül 2024",
        image: "/images/20.png",
    },
    {
        id: 2,
        location: "BURSA",
        title: "Yapay Zeka için Python Programlama Eğitimi",
        date: "16 Eylül 2024 - 20 Eylül 2024",
        duration: "48 Saat",
        level: "Lisans, Doktora, Ön Lisans, Yüksek Lisans",
        code: "102",
        deadline: "8 Eylül 2024",
        image: "/images/21.png",
    },
    {
        id: 3,
        location: "MERSİN",
        title: "Front-End Web Geliştirme Atölyesi",
        date: "14 Eylül 2024 - 6 Ekim 2024",
        duration: "48 Saat",
        level: "Lisans, Doktora, Ön Lisans, Yüksek Lisans",
        code: "103",
        deadline: "15 Eylül 2024",
        image: "/images/22.png",
    },
    {
        id: 5,
        location: "ANKARA",
        title: "Sızma Testi ve Olay Müdahale Eğitimi",
        date: "14 Eylül 2024 - 6 Ekim 2024",
        duration: "48 Saat",
        level: "Lisans, Doktora, Ön Lisans, Yüksek Lisans",
        code: "101",
        deadline: "8 Eylül 2024",
        image: "/images/20.png",
    },
    {
        id: 5,
        location: "BURSA",
        title: "Yapay Zeka için Python Programlama Eğitimi",
        date: "16 Eylül 2024 - 20 Eylül 2024",
        duration: "48 Saat",
        level: "Lisans, Doktora, Ön Lisans, Yüksek Lisans",
        code: "102",
        deadline: "8 Eylül 2024",
        image: "/images/21.png",
    },
    {
        id: 6,
        location: "MERSİN",
        title: "Front-End Web Geliştirme Atölyesi",
        date: "14 Eylül 2024 - 6 Ekim 2024",
        duration: "48 Saat",
        level: "Lisans, Doktora, Ön Lisans, Yüksek Lisans",
        code: "103",
        deadline: "15 Eylül 2024",
        image: "/images/22.png",
    },
];

const EventSection = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const container = carouselRef.current;
            if (container) {
                const cardWidth = container.children[0].offsetWidth + 20;
                const maxScrollLeft = container.scrollWidth - container.clientWidth;

                if (container.scrollLeft >= maxScrollLeft) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="event-section">
            <div className="event-header">
                <h2 className="event-section-title">Etkinlikler</h2>
                <div className="event-pagination-buttons">
                    <button onClick={scrollLeft}><FaChevronLeft /></button>
                    <button onClick={scrollRight}><FaChevronRight /></button>
                </div>
            </div>

            <div className="event-cards-container" ref={carouselRef}>
                {eventData.map(event => (
                    <div key={event.id} className="event-card-wrapper">
                        <EventCard {...event} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventSection;
