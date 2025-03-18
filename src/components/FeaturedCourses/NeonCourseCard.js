import React, { useState } from "react";
import "./NeonCourseCard.css";

const courses = [
    { id: 1, title: "Doğal Dil İşleme", image: "/images/6.jpeg", level: "İleri Seviye", levelClass: "level-advanced", students: "2.4K", views: 74 },
    { id: 2, title: "STM32 ile Gömülü Yazılım", image: "/images/7.jpg", level: "Temel Seviye", levelClass: "level-basic", students: "5.3K", views: 132 },
    { id: 3, title: "Derin Öğrenmeye Giriş", image: "/images/8.jpeg", level: "Orta Seviye", levelClass: "level-intermediate", students: "5.9K", views: 77 },
    { id: 4, title: "Veri Bilimine Giriş", image: "/images/9.jpg", level: "Temel Seviye", levelClass: "level-basic", students: "10.7K", views: 126 },
    { id: 5, title: "Sağlıkta Yapay Zeka", image: "/images/10.jpeg", level: "Orta Seviye", levelClass: "level-intermediate", students: "5.7K", views: 75 },
    { id: 6, title: "Makine Öğrenmesi", image: "/images/11.webp", level: "İleri Seviye", levelClass: "level-advanced", students: "4.3K", views: 90 },
    { id: 7, title: "Derin Sinir Ağları", image: "/images/12.jpeg", level: "Orta Seviye", levelClass: "level-intermediate", students: "3.1K", views: 64 },
    { id: 8, title: "Python ile Veri Bilimi", image: "/images/13.png", level: "Temel Seviye", levelClass: "level-basic", students: "8.5K", views: 220 }
];

const ITEMS_PER_PAGE = 4; // 5 öğe göstermek için ayarlıyoruz (kaymalı pencere için 4 seçiyoruz)

const NeonCourseCard = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // İlk sayfanın başlangıcı 0, diğer sayfaların başlangıcı bir önceki sayfanın son öğesi olacak
    const startIndex = currentPage === 0 ? 0 : currentPage * (ITEMS_PER_PAGE - 1);
    const visibleCourses = courses.slice(startIndex, startIndex + ITEMS_PER_PAGE + 1);

    const nextPage = () => {
        if (startIndex + ITEMS_PER_PAGE < courses.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="featured-courses-section">
            <h2 className="section-title animate__animated animate__headShake">Öne Çıkan Eğitimler</h2>
            <div className="course-list-container">
                <button className="nav-button left" onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>

                <div className="neon-courses-container">
                    {visibleCourses.map((course) => (
                        <div key={course.id} className={`neon-course-card ${course.levelClass}`}>
                            <div className="image-container">
                                <img src={course.image} alt={course.title} className="course-image" />
                                <div className="course-overlay">
                                    <h3 className="course-title">{course.title}</h3>
                                    <div className={`level-tag ${course.levelClass}`}>{course.level}</div>
                                    <div className="course-meta">
                                        <span>👀 {course.views}</span>
                                        <span>👨‍🎓 {course.students}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="nav-button right" onClick={nextPage} disabled={startIndex + ITEMS_PER_PAGE >= courses.length}>{">"}</button>
            </div>
        </div>
    );
};

export default NeonCourseCard;
