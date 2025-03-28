import React, { useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NewsCard from './NewsCard';
import './NewsSection.css';



const newsData = [
    {
        id: 1,
        image: "/images/4.jpg",
        title: "TBMM’de Halkla İlişkiler, Medya ve Dijital İletişim Becerileri Semineri Düzenlendik",
        date: "03 Aralık 2024"
    },
    {
        id: 2,
        image: "/images/9.jpg",
        title: "Teknolojiyi Eğitimle Şekillendirenler: Öğretmenler Günü Buluşması",
        date: "25 Kasım 2024"
    },
    {
        id: 3,
        image: "/images/7.jpg",
        title: "Yeni Eğitim Dönemi Başladı!",
        date: "10 Kasım 2024"
    },
    {
        id: 4,
        image: "/images/6.jpeg",
        title: "BTK Akademi ve Google İşbirliği ile Dijital Dönüşüm Semineri Gerçekleşti",
        date: "20 Ekim 2024"
    },
    {
        id: 5,
        image: "/images/3.jpg",
        title: "Online Eğitimlere İlgi Artıyor: 1 Milyon Kullanıcıya Ulaşıldı",
        date: "15 Eylül 2024"
    },
    {
        id: 6,
        image: "/images/1.jpg",
        title: "Yapay Zeka Alanında Kariyer Fırsatları Konferansı Gerçekleşti",
        date: "05 Eylül 2024"
    },
];

const NewsSection = () => {
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
                const cardWidth = container.children[0].offsetWidth + 20; // Kart genişliği + gap (20px)
                const maxScrollLeft = container.scrollWidth - container.clientWidth;

                if (container.scrollLeft >= maxScrollLeft) {
                    // Son karta geldiysek başa dön
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Değilse bir sonraki karta ilerle
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }
        }, 5000); // 5000ms = 5 saniye

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="news-section">
            <div className="news-header">
                <h2 className="news-section-title">Haberler</h2>
                <div className="news-pagination-buttons">
                    <button onClick={scrollLeft}><FaChevronLeft /></button>
                    <button onClick={scrollRight}><FaChevronRight /></button>
                </div>
            </div>
            <div className="news-cards-container" ref={carouselRef}>
                {newsData.map(news => (
                    <NewsCard
                        key={news.id}
                        image={news.image}
                        title={news.title}
                        date={news.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsSection;