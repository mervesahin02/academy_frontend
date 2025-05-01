import React from "react";
import { Link } from "react-router-dom";  // ✅ Bunu ekledik!
import "./HeaderBar.css";

const HeaderBar = () => {
    return (
        <div className="header-bottom">
            <nav className="header-menu">
                <Link to="/hakkimizda">Hakkımızda</Link>
                <Link to="/kariyer">Kariyer Rehberi</Link>
                <Link to="/haberler">Haberler</Link>
                <Link to="/etkinlikler">Etkinlikler</Link>
                <Link to="/sss">Sıkça Sorulan Sorular</Link>
                <Link to="/gonulluluk">Gönüllülük</Link>
            </nav>
        </div>
    );
};

export default HeaderBar;
