import React, { useState } from "react";
import "./NeonCourseCard.css";

const courses = [
    { id: 1, title: "Doğal Dil İşleme", instructor: "Dr. Ahmet Yılmaz", image: "/images/6.jpeg", level: "İleri Seviye", levelClass: "level-advanced", students: "2.4K", views: 74, duration: "3 Saat 20 Dakika" },
    { id: 2, title: "STM32 ile Gömülü Yazılım", instructor: "Mehmet Kaya", image: "/images/7.jpg", level: "Temel Seviye", levelClass: "level-basic", students: "5.3K", views: 132, duration: "2 Saat 50 Dakika" },
    { id: 3, title: "Derin Öğrenmeye Giriş", instructor: "Elif Demir", image: "/images/8.jpeg", level: "Orta Seviye", levelClass: "level-intermediate", students: "5.9K", views: 77, duration: "4 Saat 15 Dakika" },
    { id: 4, title: "Veri Bilimine Giriş", instructor: "Ali Can", image: "/images/9.jpg", level: "Temel Seviye", levelClass: "level-basic", students: "10.7K", views: 126, duration: "3 Saat 10 Dakika" },
    { id: 5, title: "Sağlıkta Yapay Zeka", instructor: "Cem Aksoy", image: "/images/10.jpeg", level: "Orta Seviye", levelClass: "level-intermediate", students: "5.7K", views: 75, duration: "3 Saat 30 Dakika" },
    { id: 6, title: "Makine Öğrenmesi", instructor: "Burak Kılıç", image: "/images/11.webp", level: "İleri Seviye", levelClass: "level-advanced", students: "4.3K", views: 90, duration: "5 Saat" }
];

const ITEMS_PER_PAGE = 6;

const NeonCourseCard = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const visibleCourses = courses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
            <h2 className="section-title">Öne Çıkan Eğitimler</h2>
            <div className="course-list-container">
                <button className="nav-button left" onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>

                <div className="course-grid">
                    {visibleCourses.map((course) => (
                        <div key={course.id} className="course-card">
                            <img src={course.image} alt={course.title} className="course-image" />
                            <div className="course-content">
                                <div className={`level-badge ${course.levelClass}`}>
                                    {course.level}
                                </div>
                                <div className="rating">
                                    {"★".repeat(Math.floor(course.rating))}{"☆".repeat(5 - Math.floor(course.rating))}
                                </div>
                                <h3 className="course-title">{course.title}</h3>
                                <span className="instructor-name">{course.instructor}</span>
                                <div className="course-meta">
                                    <span>🎓 {course.students}</span>
                                    <span>⏳ {course.duration}</span>
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
