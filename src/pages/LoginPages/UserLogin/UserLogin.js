import React from "react";
import "./UserLogin.css";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    const navigate = useNavigate();

    return (
        <div className="userlogin-container">
            <h2 className="userlogin-title">Giriş Yap</h2>
            <button className="userlogin-button e-devlet" onClick={() => alert("E-Devlet ile giriş yapılıyor...")}>
                <span className="usere-devlet-icon"></span> E-Devlet ile giriş yap
            </button>
            <button className="userlogin-button under-16" onClick={() => alert("16 Yaş altı giriş yapılıyor...")}>
                16 Yaş altı giriş
            </button>
            <button
                className="userlogin-button other-options"
                onClick={() => navigate("/diger-giris-secenekleri")}
            >
                Diğer giriş seçenekleri
            </button>
        </div>
    );
};

export default UserLogin;
