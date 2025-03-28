import React from "react";
import "./HeaderBar.css";

const HeaderBar = () => {
    return (
        <div className="header-bottom">
            <nav className="header-menu">
                <a href="#">Hakkımızda</a>
                <a href="#">Kariyer Rehberi</a>
                <a href="#">Haberler</a>
                <a href="#">Etkinlikler</a>
                <a href="#">Sıkça Sorulan Sorular</a>
                <a href="#">Gönüllülük</a>
            </nav>
        </div>
    );
};

export default HeaderBar;
