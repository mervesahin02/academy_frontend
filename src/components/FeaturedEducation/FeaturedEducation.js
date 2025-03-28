import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import FeaturedEducationCard from './FeaturedEducationCard';
import './FeaturedEducation.css';

const educationData = [
    {
        id: 1,
        title: "STM32 ile Gömülü Yazılım",
        instructor: "Mehmet Kaya",
        image: "/images/7.jpg",
        level: "Temel Seviye",
        levelClass: "featured-level-basic",
        students: "5.374",
        rating: 4.2,
        reviews: 112,
        duration: "2 Saat 50 Dakika"
    },
    {
        id: 2,
        title: "Yazılım Geliştirme Araçları",
        instructor: "Canan Yıldız",
        image: "/images/15.jpeg",
        level: "Orta Seviye",
        levelClass: "featured-level-intermediate",
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
        levelClass: "featured-level-intermediate",
        students: "245",
        rating: 4.7,
        reviews: 150,
        duration: "4 Saat"
    },
    {
        id: 4,
        title: "Veri Bilimine Giriş",
        instructor: "Ali Can",
        image: "/images/9.jpg",
        level: "Temel Seviye",
        levelClass: "featured-level-basic",
        students: "10.700",
        rating: 4.6,
        reviews: 140,
        duration: "3 Saat 10 Dakika"
    },
    {
        id: 5,
        title: "Sağlıkta Yapay Zeka",
        instructor: "Cem Aksoy",
        image: "/images/10.jpeg",
        level: "Orta Seviye",
        levelClass: "featured-level-intermediate",
        students: "5.778",
        rating: 4.3,
        reviews: 95,
        duration: "3 Saat 30 Dakika"
    },
    {
        id: 6,
        title: "Makine Öğrenmesi",
        instructor: "Burak Kılıç",
        image: "/images/11.webp",
        level: "İleri Seviye",
        levelClass: "featured-level-advanced",
        students: "4.314",
        rating: 4.7,
        reviews: 180,
        duration: "5 Saat"
    }
];

const FeaturedEducation = () => {
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
        <div className="featured-section">
            <div className="featured-header">
                <h2 className="featured-title">Öne Çıkan Eğitimler</h2>
                <div className="featured-buttons">
                    <button onClick={scrollLeft}><FaChevronLeft /></button>
                    <button onClick={scrollRight}><FaChevronRight /></button>
                </div>
            </div>
            <div className="featured-cards" ref={carouselRef}>
                {educationData.map(edu => (
                    <FeaturedEducationCard key={edu.id} {...edu} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedEducation;
