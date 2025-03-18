import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>KURUMSAL</h4>
                    <ul>
                        <li><a href="#">Hakkımızda</a></li>
                        <li><a href="#">İş Birliklerimiz</a></li>
                        <li><a href="#">Gizlilik ve Güvenlik Politikası</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>BTK AKADEMİ</h4>
                    <ul>
                        <li><a href="#">Kariyer Rehberi</a></li>
                        <li><a href="#">Etkinlikler</a></li>
                        <li><a href="#">Faydalı Linkler</a></li>
                        <li><a href="#">Sıkça Sorulan Sorular</a></li>
                        <li><a href="#">Gönüllülük</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>İLETİŞİM</h4>
                    <ul>
                        <li><a href="#">Adres Bilgisi</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <a href="#" className="social-icon"><FaFacebookF /></a>
                    <a href="#" className="social-icon"><FaInstagram /></a>
                    <a href="#" className="social-icon"><FaLinkedinIn /></a>
                    <a href="#" className="social-icon"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
