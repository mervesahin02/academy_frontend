import React from "react";
import "./Certificate.css";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
    const navigate = useNavigate();

    const certificates = [
        { type: "Katılım", name: "Proje Yönetimi", date: "15.05.2025" },
        { type: "Katılım", name: "Yazılım Test Süreçleri", date: "10.04.2025" },
        { type: "Katılım", name: "Veritabanı Yönetimi", date: "20.03.2025" },
        { type: "Katılım", name: "Frontend Geliştirme", date: "05.03.2025" },
        { type: "Katılım", name: "Veri Analitiği", date: "22.02.2025" },
    ];

    return (
        <div className="certificate-container">
            <h3>Sertifikalarım</h3>
            <table className="certificate-table">
                <thead>
                    <tr>
                        <th>Tür</th>
                        <th>Sertifika Adı</th>
                        <th>Tarih</th>
                        <th>Aksiyon</th>
                    </tr>
                </thead>
                <tbody>
                    {certificates.map((cert, index) => (
                        <tr key={index}>
                            <td>{cert.type}</td>
                            <td>{cert.name}</td>
                            <td>{cert.date}</td>
                            <td>
                                <button className="download-button">
                                    <i className="fa fa-download"></i> İndir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="back-button" onClick={() => navigate("/diger-giris-secenekleri")}>
                <i className="fa fa-arrow-left"></i> Profile Dön
            </button>
        </div>
    );
};

export default Certificate;
