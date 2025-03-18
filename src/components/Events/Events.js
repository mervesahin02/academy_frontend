import React, { useState } from "react";
import "./Events.css";

const events = [
    {
        id: 1,
        location: "MANİSA",
        title: "Uygulamalarla Makine Öğrenmesi ve Derin Öğrenme Atölyesi",
        date: "4 Nisan 2025 - 4 Mayıs 2025",
        duration: "70 Saat",
        level: "Yüksek Lisans, Lisans, Doktora, Ön Lisans",
        code: "201",
        deadline: "23 Mart 2025",
        image: "/images/20.png"
    },
    {
        id: 2,
        location: "ANTALYA",
        title: "Yapay Zeka Okuryazarlığı ve Üretken Yapay Zeka Atölyesi",
        date: "5 Nisan 2025 - 27 Nisan 2025",
        duration: "64 Saat",
        level: "Doktora, Yüksek Lisans",
        code: "201",
        deadline: "23 Mart 2025",
        image: "/images/21.png"
    },
    {
        id: 3,
        location: "İSTANBUL",
        title: "Uygulamalı Figma Atölyesi",
        date: "6 Nisan 2025 - 5 Mayıs 2025",
        duration: "48 Saat",
        level: "Lisans",
        code: "201",
        deadline: "25 Mart 2025",
        image: "/images/22.png"
    }
];

const Events = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 1; // Her sayfada bir etkinlik göstermek için

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const visibleEvents = events.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const nextPage = () => {
        if (startIndex + ITEMS_PER_PAGE < events.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="events-section">
            <h2 className="section-title">Gelecek Etkinlikler</h2>
            <div className="event-container">
                {visibleEvents.map((event) => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.title} className="event-image" />
                        <div className="event-content">
                            <h3 className="event-location">{event.location}</h3>
                            <h2 className="event-title">{event.title}</h2>
                            <p className="event-info">{event.date}</p>
                            <p className="event-info">{event.duration}</p>
                            <p className="event-info">{event.level}</p>
                            <p className="event-code">Eğitim Kodu: {event.code}</p>
                            <p className="event-deadline">Son Başvuru Tarihi: {event.deadline}</p>
                            <div className="event-buttons">
                                <button className="event-details">Ayrıntıları İncele</button>
                                <button className="event-apply">Başvuru Yap</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="event-navigation">
                <button className="nav-button" onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>
                <button className="nav-button" onClick={nextPage} disabled={startIndex + ITEMS_PER_PAGE >= events.length}>{">"}</button>
            </div>
        </div>
    );
};

export default Events;
