import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css";
import { FaSearch, FaTimes } from "react-icons/fa"; // Arama simgesi için

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState("");

    return (
        <header className={`header ${theme}`}>
            {/* Üst Header */}
            <div className="header-top">
                <div className="left-section">
                    {/* BTK Akademi Logosu */}
                    <img
                        src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/bb2b1a79-8a7f-4c18-970c-6687a910b496/BTKAkademi-Normal.png?t=1739345573413"
                        alt="BTK Akademi"
                        className="btk-logo"
                    />

                    {/* Eğitimler Dropdown */}
                    <div className="dropdown">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="dropdown-button">
                            ☰ Eğitimler
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <button className="category-btn">📂 Tüm Kategoriler</button>
                                <button className="category-btn">💻 Yazılım Dünyası</button>
                                <button className="category-btn">🖥️ Sistem Dünyası</button>
                                <button className="category-btn">🏢 İşletme Dünyası</button>
                                <button className="category-btn">🌱 Kişisel Gelişim Dünyası</button>
                                <button className="category-btn">🏫 K12 Dünyası</button>
                                <button className="category-btn">🎨 Tasarım Dünyası</button>
                                <button className="category-btn">🤖 Yapay Zeka Dünyası</button>
                                <button className="category-btn">🔒 Güvenli İnternet</button>
                                <button className="category-btn">⚖️ Regülasyon Dünyası</button>
                                <button className="category-btn">🔬 Temel Bilimler</button>
                                <button className="category-btn">🚀 Kariyer Yolu</button>
                                <button className="category-btn">🏛️ Kurum ve Kuruluşlar</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Giriş Yap / Kaydol Butonları ve Arama Çubuğu birlikte */}
                <div className="auth-buttons">
                    <div className="search-box">
                        {searchOpen && (
                            <input
                                type="text"
                                placeholder="Ara..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                autoFocus
                            />
                        )}
                        <button className="search-button" onClick={() => setSearchOpen(!searchOpen)}>
                            {searchOpen ? <FaTimes /> : <FaSearch />}
                        </button>
                    </div>

                    <button className="login-button">Giriş Yap</button>
                    <button className="register-button">Kaydol</button>
                </div>
            </div>

            {/* Menü Bölümü */}
            <div className="header-bottom">
                <nav className="header-menu">
                    <a href="#">HAKKIMIZDA</a>
                    <a href="#">KARİYER REHBERİ</a>
                    <a href="#">HABERLER</a>
                    <a href="#">ETKİNLİKLER</a>
                    <a href="#">SIKÇA SORULAN SORULAR</a>
                    <a href="#">GÖNÜLLÜLÜK</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
