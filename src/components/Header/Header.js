import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css";
import { FaSearch, FaTimes, FaChevronRight } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

// Ana kategoriler
const categories = [
    { title: "Tüm Eğitimler", submenu: [] },
    { title: "Kariyer Yolu", submenu: ["Sistem Yöneticisi", "Veri Merkezi Uzmanı", "Sızma Testi Uzmanı", "Siber Güvenlik Uzmanı", "Adli Bilişim Uzmanı", "Zararlı Yazılım Uzmanı", "İş Analisti", "Yazılım Test Uzmanı", "DevOps Uzmanı", "Proje Yöneticisi", "Bilgi Güvenliği Uzmanı", "RPA Uzmanı", "Blokzincir Uzmanı", "CBS Yazılım Uzmanı", "Gömülü Sistemler Uzmanı"] },
    { title: "Sistem Dünyası", submenu: ["İşletim Sistemleri", "Siber Güvenlik", "Bulut Sistemler"] },
    { title: "İşletme Dünyası", submenu: ["Girişimcilik", "Pazarlama", "Proje Yönetimi", "Ofis Programları"] },
    { title: "Kişisel Gelişim Dünyası", submenu: [] },
    { title: "K12 Dünyası", submenu: [] },
    { title: "Tasarım Dünyası", submenu: [] },
    { title: "Yapay Zeka Dünyası", submenu: [] },
    { title: "Güvenli İnternet", submenu: [] },
    { title: "Regülasyon Dünyası", submenu: [] },
    { title: "Temel Bilimler", submenu: ["Matematik"] },
    { title: "Yazılım Dünyası", submenu: ["Blok Zincir", "İş Zekası ve Raporlama", "Mobil Uygulama", "Oyun Geliştirme", "Programlama Dilleri"] },
    { title: "Kurum ve Kuruluşlar", submenu: ["Türk Patent ve Marka Kurumu", "Karayolları Genel Müdürlüğü"] }
];

// Arama kutusu altında önerilecek başlıklar
const suggestedCategories = [
    "Tüm Eğitimler",
    "Yapay Zeka",
    "İngilizce",
    "Python",
    "Veri Tabanı",
    "Excel",
    "Mobil Geliştirme",
    "İşletim Sistemleri",
    "Web Tasarımı"
];

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const [isSticky, setIsSticky] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [submenuPosition, setSubmenuPosition] = useState({ left: "250px", top: "0px" });

    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (index, event) => {
        if (activeSubmenu !== index) {
            setActiveSubmenu(null);
            setTimeout(() => setActiveSubmenu(index), 50);
        }
        const rect = event.currentTarget.getBoundingClientRect();
        setSubmenuPosition({
            left: `${rect.left + rect.width}px`,
            top: `${rect.top - 70}px`
        });
    };

    const handleMouseLeave = (index) => {
        if (categories[index].submenu.length > 0) {
            return;
        }
        setActiveSubmenu(null);
    };

    return (
        <>
            <header className={`header ${theme} ${isSticky ? "sticky-header" : ""}`}>
                <div className="header-top">
                    {/* Sol Kısım */}
                    <div className="left-section">
                        <img
                            src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/bb2b1a79-8a7f-4c18-970c-6687a910b496/BTKAkademi-Normal.png?t=1739345573413"
                            alt="BTK Akademi"
                            className="btk-logo"
                        />

                        <div
                            className="dropdown"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => {
                                setDropdownOpen(false);
                                setActiveSubmenu(null);
                            }}
                        >
                            <button className="dropdown-button">☰ Kategoriler</button>
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className={`dropdown-item ${category.submenu.length > 0 ? "has-submenu" : ""}`}
                                            onMouseEnter={(event) => category.submenu.length > 0 && handleMouseEnter(index, event)}
                                            onMouseLeave={() => handleMouseLeave(index)}
                                        >
                                            {category.title}
                                            {category.submenu.length > 0 && <FaChevronRight className="arrow-icon" />}
                                            {activeSubmenu === index && (
                                                <div
                                                    className="submenu"
                                                    style={{ left: submenuPosition.left, top: submenuPosition.top }}
                                                    onMouseEnter={() => setActiveSubmenu(index)}
                                                >
                                                    {category.submenu.map((sub, idx) => (
                                                        <div key={idx} className="submenu-item">{sub}</div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sağ Kısım: Arama ve Giriş Butonları */}
                    <div className="auth-buttons">
                        <div className="search-box">
                            {searchOpen && (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Ne öğrenmek istiyorsunuz?"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                        autoFocus
                                    />
                                    <div className="search-suggestions">
                                        <h4>En Çok Aratılanlar</h4>
                                        <ul>
                                            {suggestedCategories.map((cat, index) => (
                                                <li key={index}>
                                                    <FiTrendingUp style={{ marginRight: "6px", color: "#00a859" }} /> {/* 🔄 Güncellendi */}
                                                    {cat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                            <button className="search-button" onClick={() => setSearchOpen(!searchOpen)}>
                                {searchOpen ? <FaTimes /> : <FaSearch />}
                            </button>
                        </div>

                        <button className="login-button">Giriş Yap</button>
                    </div>
                </div>


            </header>

            {/* İçeriği aşağı kaydırmak için boşluk */}
            <div className="page-content"></div>
        </>
    );
};

export default Header;
