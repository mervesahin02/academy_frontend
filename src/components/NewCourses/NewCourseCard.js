import React, { useState } from "react";
import "../FeaturedCourses/NeonCourseCard.css";



const courses = [
    { id: 1, title: "Flutter ile Mobil Uygulama Geliştirme", image: "/images/14.png", level: "Orta Seviye", levelClass: "level-intermediate", students: "771", views: 13 },
    { id: 2, title: "Yazılım Geliştirme Araçları", image: "/images/15.jpeg", level: "Orta Seviye", levelClass: "level-intermediate", students: "928", views: 17 },
    { id: 3, title: "Unity Oyun Geliştirme Motoru", image: "/images/16.webp", level: "Orta Seviye", levelClass: "level-intermediate", students: "2K", views: 48 },
    { id: 4, title: "Uygulamalı SPSS", image: "/images/17.png", level: "Orta Seviye", levelClass: "level-intermediate", students: "2.2K", views: 48 },
    { id: 5, title: "Jetpack Compose ile Android Mobil Uygulama Geliştirme", image: "/images/18.jpg", level: "İleri Seviye", levelClass: "level-advanced", students: "912", views: 21 },
    { id: 6, title: "Python ile Veri Analizi", image: "/images/19.webp", level: "Temel Seviye", levelClass: "level-basic", students: "1.3K", views: 64 },
];

const ITEMS_PER_PAGE = 4;

const NewCourseCard = () => {
    const [currentPage, setCurrentPage] = useState(0);

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
            <h2 className="section-title animate__animated animate__headShake">En Yeni Eğitimler</h2>
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
                                        <span>👍 {course.views}</span>
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

export default NewCourseCard;
