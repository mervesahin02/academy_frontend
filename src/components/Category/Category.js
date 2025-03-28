import React, { useState } from "react";
import "./Category.css";

const categories = [
    { title: "Yazılım Dünyası", icon: "/images/YazilimDünyasi.png" },
    { title: "Sistem Dünyası", icon: "/images/SistemDünyasi.png" },
    { title: "İşletme Dünyası", icon: "/images/İşletmeDünyasi.png" },
    { title: "Kişisel Gelişim", icon: "/images/KisiselGelişiDünyasi.png" },
    { title: "K12 Dünyası", icon: "/images/K12Dünyasi.png" },
    { title: "Tasarım Dünyası", icon: "/images/TasarimDünyasi.png" },
    { title: "Yapay Zeka Dünyası", icon: "/images/YZDünyasi.png" },

    // Yeni eklenenler 👇
    { title: "Güvenli İnternet", icon: "/images/YazilimDünyasi.png" },
    { title: "Regülasyon Dünyası", icon: "/images/SistemDünyasi.png" },
    { title: "Temel Bilimler", icon: "/images/İşletmeDünyasi.png" },
    { title: "Kariyer Yolu", icon: "/images/K12Dünyasi.png" },
    { title: "Kurum ve Kuruluşlar", icon: "/images/YZDünyasi.png" }
];

const Category = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="category-section">
            <div className="category-wrapper">
                <h2 className="category-title">Tüm Eğitim Kategorileri</h2>
                <div className="category-container">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`category-card ${hoveredIndex !== null && hoveredIndex !== index ? "blurred" : ""}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={cat.icon} alt={cat.title} className="category-icon" />
                            <span className="category-name">{cat.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
