import React, { useEffect, useState } from "react";
import CountUp from "react-countup"; // Sayıları dinamik artırmak için
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import "./ImpactSection.css";

const ImpactSection = () => {
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(false);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("impact-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setShowConfetti(true);
                    setStartCount(true); // Sayıları saymaya başlat
                } else {
                    setShowConfetti(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="impact-section" className="impact-section">
            {showConfetti && <Confetti width={width} height={height} />}

            <div className="impact-container">
                {/* Sol tarafta metin */}
                <div className="impact-text">
                    <h2>BTK Akademi'nin Etkisi</h2>
                    <p>
                        BTK Akademi, Bilgi Teknolojileri ve İletişim Kurumu (BTK) bünyesinde,
                        bilgi teknolojileri alanında eğitim ve gelişim fırsatları sunmak amacıyla
                        2017 yılında kurulmuştur. Platform, yazılım, siber güvenlik, veri analitiği ve
                        yapay zeka gibi birçok alanda ücretsiz eğitimler sağlamaktadır.
                    </p>
                </div>

                {/* Sağ tarafta dinamik sayılar */}
                <div className="impact-stats">
                    <div className="stat">
                        <span className="number">
                            <CountUp start={startCount ? 0 : null} end={2576374} duration={3} separator="," />
                        </span>
                        <span className="label">Kullanıcı Sayısı</span>
                    </div>
                    <div className="stat">
                        <span className="number">
                            <CountUp start={startCount ? 0 : null} end={315} duration={3} separator="," />
                        </span>
                        <span className="label">Mevcut Eğitim</span>
                    </div>
                    <div className="stat">
                        <span className="number">
                            <CountUp start={startCount ? 0 : null} end={12} duration={3} separator="," />
                        </span>
                        <span className="label">Kategori</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
