import React, { useEffect, useState } from "react";
import "./Entrance.css";
import { useNavigate } from "react-router-dom";

const Entrance = () => {
    const navigate = useNavigate();

    const initialCourses = [
        { name: "PHP", icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", progress: 80 },
        { name: "SQL Öğreniyorum", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", progress: 65 },
        { name: "Unity ", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg", progress: 50 },
        { name: "İleri Seviye Java", icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", progress: 40 },
        { name: "Algoritma Tasarımı", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png", progress: 70 },
        { name: "Mobil Uygulama Geliştirme", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", progress: 30 },
    ];

    const [animatedCourses, setAnimatedCourses] = useState(
        initialCourses.map(course => ({ ...course, animatedProgress: 0 }))
    );

    const [usageValues, setUsageValues] = useState(
        ["Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım"].map(month => ({
            month,
            value: Math.floor(Math.random() * 100),
            animatedValue: 0,
        }))
    );
    const notifications = [
        { icon: "https://cdn-icons-png.flaticon.com/512/1827/1827301.png", text: "Yeni eğitim eklendi", date: "15.05.2025" },
        { icon: "https://cdn-icons-png.flaticon.com/512/1827/1827367.png", text: "Sertifikan hazır", date: "14.05.2025" },
    ];
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimatedCourses(initialCourses.map(c => ({ ...c, animatedProgress: c.progress })));
            setUsageValues(values => values.map(v => ({ ...v, animatedValue: v.value })));
        }, 200); // hafif gecikme efekti

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="dashboard-layout">
            <div className="top-navigation">
                {["Sertifikalarım", "Eğitimler", "İstatistiklerim", "Notlarım", "İletişim", "Çıkış"].map((label, index) => (
                    <div
                        key={index}
                        className="nav-item"
                        onClick={() => {
                            if (label === "Çıkış") {
                                navigate("/login");
                            } else {
                                navigate(`/${label.toLowerCase()}`);
                            }
                        }}
                    >
                        {label}
                    </div>
                ))}
            </div>

            <div className="profile-section">
                <div className="profile-picture"></div>
                <h3>Seyyide Merve Şahin</h3>
                <p>Doğum Tarihi<br></br>05.12.2002</p>
                <p>Cinsiyet<br></br>Kadın</p>
                <p>E-Posta<br></br>sydmervesihin@gmail.com</p>
                <button className="update-button">Profili Güncelle</button>
            </div>

            <div className="stats-section">
                <StatCard color="green" title="TAMAMLANAN EĞİTİM SAYISI" number={17} desc="Çevrim içi ders tamamladın." />
                <StatCard color="orange" title="KAYITLI EĞİTİM SAYISI" number={23} desc="Çevrim içi derse katıldın." />
                <StatCard color="yellow" title="DEVAM EDEN EĞİTİM SAYISI" number={34} desc="Devam eden eğitimin var." />
            </div>

            <div className="usage-section">
                <h3>Kullanım Süresi</h3>
                {usageValues.map((item, idx) => (
                    <div key={idx} className="usage-item">
                        <div className="usage-info">
                            <span>{item.month}</span>
                        </div>
                        <div className="cprogress-bar">
                            <div className="cprogress-fill" style={{ width: `${item.animatedValue}%` }}></div>
                        </div>
                        <span>%{item.animatedValue}</span>
                    </div>
                ))}
            </div>

            <div className="notification-section">
                <h3>Bildirimler</h3>
                {notifications.length === 0 ? (
                    <div className="empty-notification">
                        <p>Kayıt bulunamadı</p>
                    </div>
                ) : (
                    notifications.map((notification, idx) => (
                        <div key={idx} className="notification-item">
                            <div className="notification-content">
                                <img src={notification.icon} alt="icon" className="notification-icon" />
                                <span>{notification.text}</span>
                            </div>
                            <span className="notification-date">{notification.date}</span>
                        </div>
                    ))
                )}
            </div>

            <div className="courses-section">
                <h3>Güncel Eğitimler</h3>
                {animatedCourses.map((course, idx) => (
                    <div key={idx} className="course-item">
                        <div className="course-info">
                            <img src={course.icon} alt={course.name} />
                            <span>{course.name}</span>
                        </div>
                        <div className="cprogress-bar">
                            <div className="cprogress-fill" style={{ width: `${course.animatedProgress}%` }}></div>
                        </div>
                        <span>%{course.animatedProgress}</span>
                    </div>
                ))}
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
        <span>%{value}</span>
    </div>
);

export default Entrance;
