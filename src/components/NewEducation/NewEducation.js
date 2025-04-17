import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NewEducationCard from './NewEducationCard';
import './NewEducation.css';

const educationData = [
    {
        id: 1,
        title: "Doğal Dil İşleme",
        instructor: "Dr. Ahmet Yılmaz",
        image: "/images/6.jpeg",
        level: "İleri Seviye",
        levelClass: "newedu-level-advanced",
        students: "2.411",
        views: 74,
        duration: "3 Saat 20 Dakika",
        rating: 4.5,
        reviews: 165
    },
    {
        id: 2,
        title: "STM32 ile Gömülü Yazılım",
        instructor: "Mehmet Kaya",
        image: "/images/7.jpg",
        level: "Temel Seviye",
        levelClass: "newedu-level-basic",
        students: "5.345",
        views: 132,
        duration: "2 Saat 50 Dakika",
        rating: 4.2,
        reviews: 112
    },
    {
        id: 3,
        title: "Derin Öğrenmeye Giriş",
        instructor: "Elif Demir",
        image: "/images/8.jpeg",
        level: "Orta Seviye",
        levelClass: "newedu-level-intermediate",
        students: "5.912",
        views: 77,
        duration: "4 Saat 15 Dakika",
        rating: 4.8,
        reviews: 78
    },
    {
        id: 4,
        title: "Veri Bilimine Giriş",
        instructor: "Ali Can",
        image: "/images/9.jpg",
        level: "Temel Seviye",
        levelClass: "newedu-level-basic",
        students: "10.700",
        views: 126,
        duration: "3 Saat 10 Dakika",
        rating: 4.6,
        reviews: 140
    },
    {
        id: 5,
        title: "Sağlıkta Yapay Zeka",
        instructor: "Cem Aksoy",
        image: "/images/10.jpeg",
        level: "Orta Seviye",
        levelClass: "newedu-level-intermediate",
        students: "5.720",
        views: 75,
        duration: "3 Saat 30 Dakika",
        rating: 4.3,
        reviews: 95
    },
    {
        id: 6,
        title: "Makine Öğrenmesi",
        instructor: "Burak Kılıç",
        image: "/images/11.webp",
        level: "İleri Seviye",
        levelClass: "newedu-level-advanced",
        students: "4.300",
        views: 90,
        duration: "5 Saat",
        rating: 4.7,
        reviews: 180
    }
];

const NewEducation = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const container = carouselRef.current;
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
        <div className="newedu-news-section">
            <div className="newedu-news-header">
                <h2 className="newedu-news-section-title">Yeni Eğitimler</h2>
                <div className="newedu-news-pagination-buttons">
                    <button onClick={scrollLeft}><FaChevronLeft /></button>
                    <button onClick={scrollRight}><FaChevronRight /></button>
                </div>
            </div>
            <div className="newedu-news-cards-container" ref={carouselRef}>
                {educationData.map(edu => (
                    <NewEducationCard
                        key={edu.id}
                        image={edu.image}
                        title={edu.title}
                        instructor={edu.instructor}
                        level={edu.level}
                        levelClass={edu.levelClass}
                        students={edu.students}
                        duration={edu.duration}
                        rating={edu.rating}
                        reviews={edu.reviews}
                    />

                ))}
            </div>
        </div>
    );
};

export default NewEducation;
