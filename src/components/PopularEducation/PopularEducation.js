import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PopularEducationCard from './PopularEducationCard';
import './PopularEducation.css';

const educationData = [
    {
        id: 1,
        title: "Flutter ile Mobil Uygulama Geliştirme",
        instructor: "Burak Demir",
        image: "/images/14.png",
        level: "Genel Seviye",
        levelClass: "popular-level-general",
        students: "771",
        rating: 4.5,
        reviews: 120,
        duration: "3 Saat 10 Dakika"
    },
    {
        id: 2,
        title: "Yazılım Geliştirme Araçları",
        instructor: "Canan Yıldız",
        image: "/images/15.jpeg",
        level: "Orta Seviye",
        levelClass: "popular-level-intermediate",
        students: "928",
        rating: 4.3,
        reviews: 98,
        duration: "2 Saat 50 Dakika"
    },
    {
        id: 3,
        title: "Unity Oyun Geliştirme Motoru",
        instructor: "Efe Tatar",
        image: "/images/16.webp",
        level: "Orta Seviye",
        levelClass: "popular-level-intermediate",
        students: "2.123",
        rating: 4.7,
        reviews: 150,
        duration: "4 Saat"
    },
    {
        id: 4,
        title: "Uygulamalı SPSS",
        instructor: "Dr. Cem Kaya",
        image: "/images/17.png",
        level: "Genel Seviye",
        levelClass: "popular-level-general",
        students: "2.278",
        rating: 4.2,
        reviews: 80,
        duration: "3 Saat 30 Dakika"
    },
    {
        id: 5,
        title: "Mobil Uygulama Geliştirme",
        instructor: "Zeynep Çelik",
        image: "/images/18.jpg",
        level: "İleri Seviye",
        levelClass: "popular-level-advanced",
        students: "912",
        rating: 4.8,
        reviews: 200,
        duration: "5 Saat"
    },
    {
        id: 6,
        title: "Python ile Veri Analizi",
        instructor: "Barış Korkmaz",
        image: "/images/19.webp",
        level: "Temel Seviye",
        levelClass: "popular-level-basic",
        students: "1.300",
        rating: 4.6,
        reviews: 170,
        duration: "3 Saat 20 Dakika"
    }
];

const PopularEducation = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const container = carouselRef.current;
            const cardWidth = container.children[0].offsetWidth + 20;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if (container.scrollLeft >= maxScrollLeft) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="popular-section">
            <div className="popular-header">
                <h2 className="popular-title">Popüler Eğitimler</h2>
                <div className="popular-buttons">
                    <button onClick={scrollLeft}><FaChevronLeft /></button>
                    <button onClick={scrollRight}><FaChevronRight /></button>
                </div>
            </div>
            <div className="popular-cards" ref={carouselRef}>
                {educationData.map(edu => (
                    <PopularEducationCard key={edu.id} {...edu} />
                ))}
            </div>
        </div>
    );
};

export default PopularEducation;
