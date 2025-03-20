import React, { useState } from "react";
import "../FeaturedCourses/NeonCourseCard.css";


const courses = [
    { id: 1, title: "Flutter ile Mobil Uygulama Geliştirme", instructor: "Burak Demir", image: "/images/14.png", level: "Orta Seviye", levelClass: "level-intermediate", students: "771", views: 13, duration: "3 Saat 10 Dakika" },
    { id: 2, title: "Yazılım Geliştirme Araçları", instructor: "Canan Yıldız", image: "/images/15.jpeg", level: "Orta Seviye", levelClass: "level-intermediate", students: "928", views: 17, duration: "2 Saat 50 Dakika" },
    { id: 3, title: "Unity Oyun Geliştirme Motoru", instructor: "Efe Tatar", image: "/images/16.webp", level: "Orta Seviye", levelClass: "level-intermediate", students: "2K", views: 48, duration: "4 Saat" },
    { id: 4, title: "Uygulamalı SPSS", instructor: "Dr. Cem Kaya", image: "/images/17.png", level: "Orta Seviye", levelClass: "level-intermediate", students: "2.2K", views: 48, duration: "3 Saat 30 Dakika" },
    { id: 5, title: "Jetpack Compose ile Android Mobil Uygulama Geliştirme", instructor: "Zeynep Çelik", image: "/images/18.jpg", level: "İleri Seviye", levelClass: "level-advanced", students: "912", views: 21, duration: "5 Saat" },
    { id: 6, title: "Python ile Veri Analizi", instructor: "Barış Korkmaz", image: "/images/19.webp", level: "Temel Seviye", levelClass: "level-basic", students: "1.3K", views: 64, duration: "3 Saat 20 Dakika" }
];


const ITEMS_PER_PAGE = 6;

const NewCourseCard = () => {
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
            <h2 className="section-title">En Yeni Eğitimler</h2>
            <div className="course-list-container">
                <button className="nav-button left" onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>

                <div className="course-grid">
                    {visibleCourses.map((course) => (
                        <div className="course-card">
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

export default NewCourseCard;
