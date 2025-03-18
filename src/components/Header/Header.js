import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className={`header ${theme}`}>

            {/* Üst Header - Logo, Eğitimler, Arama ve Giriş Yap */}
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
                                <button className="category-btn">Tüm Kategoriler</button>
                                <button className="category-btn">Yazılım Dünyası</button>
                                <button className="category-btn">Sistem Dünyası</button>
                                <button className="category-btn">İşletme Dünyası</button>
                                <button className="category-btn">Kişisel Gelişim Dünyası</button>
                                <button className="category-btn">K12 Dünyası</button>
                                <button className="category-btn">Tasarım Dünyası</button>
                                <button className="category-btn">Yapay Zeka Dünyası</button>
                                <button className="category-btn">Güvenli İnternet</button>
                                <button className="category-btn">Regülasyon Dünyası</button>
                                <button className="category-btn">Temel Bilimler</button>
                                <button className="category-btn">Kariyer Yolu</button>
                                <button className="category-btn">Kurum ve Kuruluşlar</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Arama Çubuğu */}
                <div className="search-box">
                    <input type="text" placeholder="Ara..." />
                    <button className="search-button">🔍</button>
                </div>

                {/* Giriş Yap Butonu */}
                <button className="login-button">🔑 Giriş Yap</button>
            </div>

            {/* Menü Bölümü - Alt Header */}
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
