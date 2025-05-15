import React from "react";
import { useNavigate } from "react-router-dom";
import "./Statistics.css";

const Statistics = () => {
    const navigate = useNavigate();

    const data = [
        { name: "Flutter ile Mobil Uygulama Geliştirme", status: "Kayıtlı", progress: 0 },
        { name: "PyTorch ile Derin Öğrenme Algoritmaları", status: "Kayıtlı", progress: 0 },
        { name: "React Js İleri Seviye", status: "Kayıtlı", progress: 0 },
        { name: "Proje Paydaş Yönetimi", status: "Tamamlandı", progress: 100 },
        { name: "Proje Tedarik Yönetimi 2", status: "Tamamlandı", progress: 100 },
        { name: "Proje Tedarik Yönetimi 1", status: "Tamamlandı", progress: 100 },
    ];

    return (
        <div className="statistics-container">
            <div className="statistics-header">
                <h3>Eğitime Katılım İstatistikleri</h3>
                <button className="cback-button" onClick={() => navigate("/diger-giris-secenekleri")}>
                    <i className="fa fa-arrow-left"></i> Profile Dön
                </button>
            </div>

            <div className="statistics-filters">
                <input type="text" placeholder="Eğitim Ara" className="search-input" />
                <select className="status-filter">
                    <option>Tüm Durumlar</option>
                    <option>Kayıtlı</option>
                    <option>Tamamlandı</option>
                </select>
                <select className="page-size-filter">
                    <option>6 / Sayfa</option>
                    <option>10 / Sayfa</option>
                    <option>20 / Sayfa</option>
                </select>
            </div>

            <table className="statistics-table">
                <thead>
                    <tr>
                        <th>Eğitim Adı</th>
                        <th>Katılım Durumu</th>
                        <th>Tamamlama durumu</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            <td>
                                <div className={`progress-bar ${item.progress === 100 ? "completed" : ""}`}>
                                    <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                                    <span>%{item.progress}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="statistics-footer">
                <button className="download-excel">
                    <i className="fa fa-file-excel-o"></i> İndir
                </button>
                <div className="pagination">
                    <button>{"<"}</button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>...</button>
                    <button>5</button>
                    <button>{">"}</button>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
