import React from "react";
import { Link } from "react-router-dom"; // BURAYI UNUTMA!
import "./Footer.css";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-columns">
                    <div className="footer-section">
                        <h4>Kurumsal</h4>
                        <ul>
                            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                            <li><Link to="/is-birliklerimiz">İş Birliklerimiz</Link></li>
                            <li><Link to="/gizlilik-politikasi">Gizlilik Politikası ve Aydınlatma Metni</Link></li>
                            <li><Link to="/cerez-politikasi">Çerez Politikası</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>BTK Akademi</h4>
                        <ul>
                            <li><Link to="/kariyer-rehberi">Kariyer Rehberi</Link></li>
                            <li><Link to="/etkinlikler">Etkinlikler</Link></li>
                            <li><Link to="/faydali-linkler">Faydalı Linkler</Link></li>
                            <li><Link to="/sss">Sıkça Sorulan Sorular</Link></li>
                            <li><Link to="/gonulluluk">Gönüllülük</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>İletişim</h4>
                        <ul>
                            <li><Link to="/iletisim">İletişim Bilgileri</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-right">
                    <img
                        src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/bb2b1a79-8a7f-4c18-970c-6687a910b496/BTKAkademi-Normal.png?t=1739345573413"
                        alt="BTK Akademi"
                        className="footer-logo"
                    />
                    <div className="footer-apps">
                        <a href="#"><img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/78e5e9d0-8ff6-4cc2-ac6f-64bfda53156b/Appstore%404x.png?t=1739346154118" alt="App Store" /></a>
                        <a href="#"><img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/23cd79b1-63fc-48c3-a2e7-0f01a0e4761c/playstore%404x.png?t=1739346154119" alt="Play Store" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
