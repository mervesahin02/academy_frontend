import React from "react";
import "./CareerGuide.css";

const CareerGuide = () => {
    return (
        <div className="career-section">
            <div className="career-container">
                <div className="career-left">
                    <img src="/images/kariyerr.png" alt="Kariyer Rehberi" className="career-image" />
                </div>
                <div className="career-right">
                    <h2 className="career-title">Kariyer Rehberi Nedir?</h2>
                    <p className="career-text">
                        Teknoloji ve bilişim alanında çalışmak isteyen veya yeni şeyler öğrenmek isteyenlere
                        rehberlik etmeye yardımcı olmak amacıyla sizler için yol haritaları ve eğitim içerikleri oluşturduk.
                        Kariyer hedefini seç, gelişim programını takip et!
                    </p>
                    <button className="career-start-btn">Hadi Başlayalım!</button>
                </div>
            </div>
        </div>
    );
};

export default CareerGuide;
