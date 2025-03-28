import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./ImpactSection.css";

const ImpactSection = () => {
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("impact-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setStartCount(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="impact-section" className="impact-section">
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
                            <CountUp
                                start={startCount ? 0 : null}
                                end={Math.round(2576374 / 1000) * 1000}
                                duration={3}
                                separator=","
                                suffix="+"
                            />
                        </span>
                        <span className="label">Kullanıcı Sayısı</span>
                    </div>
                    <div className="stat">
                        <span className="number">
                            <CountUp
                                start={startCount ? 0 : null}
                                end={Math.round(315 / 10) * 10}
                                duration={3}
                                separator=","
                                suffix="+"
                            />
                        </span>
                        <span className="label">Mevcut Eğitim</span>
                    </div>
                    <div className="stat">
                        <span className="number">
                            <CountUp
                                start={startCount ? 0 : null}
                                end={Math.round(12 / 1) * 1}
                                duration={3}
                                separator=","
                                suffix="+"
                            />
                        </span>
                        <span className="label">Kategori</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
