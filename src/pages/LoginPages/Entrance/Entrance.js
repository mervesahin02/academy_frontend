import React from "react";
import "./Entrance.css";
import { useNavigate } from "react-router-dom";

const Entrance = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-layout">
            {/* Üst Navigasyon */}
            <div className="top-navigation">
                {[
                    { label: "Sertifikalarım", link: "/sertifikalarim" },
                    { label: "Eğitimler", link: "/egitimler" },
                    { label: "İstatistiklerim", link: "/istatistikler" },
                    { label: "Notlarım", link: "/notlarim" },
                    { label: "Destek", link: "/destek" },
                    { label: "Çıkış", link: "/cikis" },
                ].map((item, index) => (
                    <div key={index} className="nav-item" onClick={() => navigate(item.link)}>
                        {item.label}
                    </div>
                ))}
            </div>

            {/* Sol Profil Alanı */}
            <div className="profile-section">
                <div className="profile-picture"></div>
                <h3>Mahmut İbrahim AYKAÇ</h3>
                <p>miaykac@gmail.com</p>
                <button className="update-button">Profili Güncelle</button>
            </div>

            {/* Eğitim Kartları */}
            <div className="stats-section">
                <StatCard color="green" title="TAMAMLANAN EĞİTİM SAYISI" number={17} desc="Çevrim içi ders tamamladın." />
                <StatCard color="orange" title="KAYITLI EĞİTİM SAYISI" number={23} desc="Çevrim içi derse katıldın." />
                <StatCard color="yellow" title="DEVAM EDEN EĞİTİM SAYISI" number={34} desc="Devam eden eğitimin var." />
            </div>

            {/* Kullanım Süresi */}
            <div className="usage-section">
                <h3>Kullanım Süresi</h3>
                <div className="usage-bars">
                    {["Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım"].map((month, idx) => (
                        <UsageBar key={idx} month={month} value={Math.floor(Math.random() * 100)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ color, title, number, desc }) => (
    <div className={`stat-card ${color}`}>
        <p className="stat-title">{title}</p>
        <h2 className="stat-number">{number}</h2>
        <p className="stat-desc">{desc}</p>
    </div>
);

const UsageBar = ({ month, value }) => (
    <div className="usage-bar">
        <span>{month}</span>
        <div className="bar-container">
            <div className="bar-fill" style={{ height: `${value}%` }}></div>
        </div>
    </div>
);

export default Entrance;
