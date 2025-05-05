import React, { useState } from "react";
import "./TitlePage.css";
import { FaRegUser, FaClock, FaSearch } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const categories = [
    {
        title: "Yazılım Dünyası",
        sub: [
            "Blok Zincir",
            "İş Zekası ve Raporlama",
            "Mobil Uygulama",
            "Oyun Geliştirme",
            "Programlama Dilleri",
            "Veri Bilimi",
            "Veri Tabanı",
            "Yazılım Testi",
            "Web Geliştirme",
            "DevOps",
            "Atölye ve Uygulamalar"
        ]
    },
    {
        title: "Sistem Dünyası",
        sub: ["İşletim Sistemleri", "Siber Güvenlik", "Bulut Sistemler"]
    },
    {
        title: "İşletme Dünyası",
        sub: ["Girişimcilik", "Pazarlama", "Proje Yönetimi", "Ofis Programları"]
    },
    { title: "Kişisel Gelişim Dünyası" },
    { title: "K12 Dünyası" },
    { title: "Tasarım Dünyası" },
    { title: "Yapay Zeka Dünyası" },
    { title: "Güvenli İnternet" },
    { title: "Regülasyon Dünyası" },
    {
        title: "Temel Bilimler",
        sub: ["Matematik"]
    },
    {
        title: "Kariyer Yolu",
        sub: [
            "Bilgi Teknolojileri Giriş Programı",
            "Yazılım Geliştirici",
            "Web Geliştirici - Back-End",
            "Web Geliştirici - Front End",
            "Mobil Uygulama Geliştirici",
            "Oyun Geliştirici",
            "Veri Analisti",
            "İş Zekası Uzmanı",
            "Veri Bilimci",
            "Makine Öğrenmesi Uzmanı",
            "Veritabanı Yöneticisi",
            "Büyük Veri Yönetim Uzmanı",
            "Network Uzmanı",
            "Sistem Yöneticisi",
            "Veri Merkezi Uzmanı",
            "Sızma Testi Uzmanı",
            "Siber Güvenlik Uzmanı",
            "Adli Bilişim Uzmanı",
            "Zararlı Yazılım Uzmanı",
            "İş Analisti",
            "Yazılım Test Uzmanı",
            "DevOps Uzmanı",
            "Proje Yöneticisi",
            "Bilgi Güvenliği Uzmanı",
            "RPA Uzmanı",
            "Blokzincir Uzmanı",
            "CBS Yazılım Uzmanı",
            "Gömülü Sistemler Uzmanı"
        ]
    },
    {
        title: "Kurum ve Kuruluşlar",
        sub: ["Türk Patent ve Marka Kurumu", "Karayolları Genel Müdürlüğü"]
    },
    {
        title: "Eğitim Kanalı",
        sub: ["Sınıf içi", "E-Öğrenme", "Program"]
    },
    {
        title: "Eğitim Dili",
        sub: ["Türkçe"]
    },
    {
        title: "Eğitim Seviyesi",
        sub: ["Başlangıç", "Orta", "İleri", "Herkes İçin"]
    }
];

const courseList = [
    {
        id: 1,
        title: "Veri Bilimine Giriş",
        instructor: "Zeynep Güler",
        image: "/images/6.jpeg",
        level: "Orta Seviye",
        students: "2.411",
        duration: "3 Saat 20 Dakika",
        rating: 4.5,
        reviews: 165
    },
    {
        id: 2,
        title: "Makine Öğrenmesi",
        instructor: "Burak Kılıç",
        image: "/images/11.webp",
        level: "Orta  Seviye",
        students: "4.300",
        duration: "5 Saat",
        rating: 4.7,
        reviews: 180
    }
];

const renderStars = (rating) =>
    Array(5).fill(0).map((_, i) => (
        <AiFillStar
            key={i}
            style={{ color: i < Math.round(rating) ? "#f7b500" : "#ccc", fontSize: "14px" }}
        />
    ));

const TitlePage = () => {
    const [expanded, setExpanded] = useState({});
    const [selectedFilters, setSelectedFilters] = useState({});
    const [searchText, setSearchText] = useState("");

    const toggleExpand = (title) => {
        setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    const toggleFilter = (sub) => {
        setSelectedFilters((prev) => ({ ...prev, [sub]: !prev[sub] }));
    };

    const filteredCourses = courseList.filter((course) => {
        const matchTitle = course.title.toLowerCase().includes(searchText.toLowerCase());
        const activeFilters = Object.keys(selectedFilters).filter((key) => selectedFilters[key]);
        if (activeFilters.length === 0) return matchTitle;
        return matchTitle && activeFilters.some((filter) =>
            course.title.toLowerCase().includes(filter.toLowerCase())
        );
    });

    return (
        <div className="titlepage-container">
            <aside className="titlepage-sidebar">
                <h3>Kategoriler</h3>
                <div className="titlepage-categories">
                    {categories.map((cat, i) => (
                        <div className="titlepage-category" key={i}>
                            <div className="titlepage-category-header" onClick={() => toggleExpand(cat.title)}>
                                <span>{expanded[cat.title] ? "▾" : "▸"}</span> {cat.title}
                            </div>
                            {cat.sub && expanded[cat.title] && (
                                <ul className="titlepage-checkbox-list">
                                    {cat.sub.map((sub, j) => (
                                        <li key={j}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={!!selectedFilters[sub]}
                                                    onChange={() => toggleFilter(sub)}
                                                />
                                                {sub}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </aside>

            <main className="titlepage-main">
                <div className="titlepage-header">
                    <div>
                        <h2 className="titlepage-title">Eğitimler</h2>
                        <p className="titlepage-count">{filteredCourses.length} Eğitim Bulundu</p>
                    </div>
                    <div className="titlepage-tools">
                        <div className="titlepage-search">
                            <FaSearch />
                            <input
                                type="text"
                                placeholder="Arama yap"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                        <select className="titlepage-sort">
                            <option>En Yeni</option>
                            <option>En Popüler</option>
                            <option>Puan</option>
                        </select>
                    </div>
                </div>

                <div className="titlepage-grid">
                    {filteredCourses.map((course) => (
                        <div className="titlepage-card" key={course.id}>
                            <div className="titlepage-card-img">
                                <img src={course.image} alt={course.title} />
                            </div>
                            <div className="titlepage-card-body">
                                <div className="titlepage-card-level">{course.level}</div>
                                <div className="titlepage-card-stars">
                                    {renderStars(course.rating)}
                                    <span>{course.rating}</span>
                                    <span className="titlepage-card-reviews">({course.reviews})</span>
                                </div>
                                <h3 className="titlepage-card-title">{course.title}</h3>
                                <p className="titlepage-card-instructor">{course.instructor}</p>
                                <div className="titlepage-card-info">
                                    <span><FaRegUser /> {course.students}</span>
                                    <span><FaClock /> {course.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default TitlePage;
