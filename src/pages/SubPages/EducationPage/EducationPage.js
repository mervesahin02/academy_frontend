import React, { useState } from 'react';
import './EducationPage.css';
import { FaUser, FaClock, FaHeart } from 'react-icons/fa';

const EducationPage = () => {
    const [activeTab, setActiveTab] = useState("description");

    const curriculum = [
        "Giriş",
        "Temel Kavramlar",
        "Büyük Veri Bileşenleri",
        "Büyük Veri Yönetimi",
        "Büyük Veri Teknolojileri",
        "Vaka Çalışmaları",
        "Büyük Veride Kariyer",
        "Eğitim Sonu-Kapanış"
    ];

    const similarCourses = [
        { title: "Veri Modelle", level: "Temel Seviye" },
        { title: "Büyük Veri Uygulamaları", level: "İleri Seviye" },
        { title: "Veri Bilimi ve Makine Öğrenmesi Atölyesi", level: "Genel Seviye" },
        { title: "Veri Bilimine Giriş", level: "Temel Seviye" },
        { title: "Yapay Zekaya Giriş", level: "Temel Seviye" }
    ];

    return (
        <div className="edu-container">
            <div className="edu-top">
                <div className="edu-left">
                    <img src="/images/edu-banner.png" alt="Eğitim" className="edu-image" />
                </div>
                <div className="edu-center">
                    <h2>Büyük Veriye Giriş</h2>
                    <div className="edu-meta">
                        <span><FaHeart /> 16</span>
                        <span><FaUser /> 1K Katılımcı</span>
                        <span><FaClock /> 06:11:23</span>
                    </div>
                    <div className="edu-cert">KATILIM SERTİFİKALI</div>
                </div>
                <div className="edu-right">
                    <p>Eğitime başlamak için lütfen giriş yapınız.</p>
                    <button className="edu-button">Giriş Yap</button>
                    <div className="edu-instructor-card">
                        <h4>Eğitmenler</h4>
                        <div className="edu-instructor">
                            <img src="/images/instructor.jpg" alt="Eğitmen" />
                            <span>TALHA KILIÇ</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="edu-tabs">
                <button onClick={() => setActiveTab("description")} className={activeTab === "description" ? "active" : ""}>Açıklama</button>
                <button onClick={() => setActiveTab("faq")} className={activeTab === "faq" ? "active" : ""}>SSS</button>
                <button onClick={() => setActiveTab("resources")} className={activeTab === "resources" ? "active" : ""}>Kaynaklar</button>
                <button onClick={() => setActiveTab("comments")} className={activeTab === "comments" ? "active" : ""}>Yorumlar (0)</button>
            </div>

            <div className="edu-tab-content">
                {activeTab === "description" && (
                    <div className="edu-desc">
                        <div className="edu-box red">
                            <strong>Önemli Uyarı!</strong>
                            <p>Bu eğitimin tüm videolarında %50 tamamlama şartı bulunmaktadır. Süre tamamlandığında videonuza yeşil tik gelecektir.</p>
                        </div>
                        <div className="edu-box">
                            <h4>Eğitim Amacı</h4>
                            <p>Büyük veri kavramlarını ve temel bileşenleri anlatır, uygulama örnekleri sunar.</p>
                        </div>
                        <div className="edu-box">
                            <h4>Eğitim Özeti</h4>
                            <p>Bu eğitimde Hadoop, Spark, NoSQL ve büyük veri teknolojileriyle gerçek dünya uygulamaları anlatılır.</p>
                        </div>
                        <div className="edu-box">
                            <h4>Hedef Kitle</h4>
                            <ul>
                                <li>Lise ve üniversite öğrencileri</li>
                                <li>Büyük veriye ilgi duyanlar</li>
                            </ul>
                        </div>
                        <div className="edu-box">
                            <h4>Kazanımlar</h4>
                            <ul>
                                <li>Büyük veriyi kavrar ve uygulamaları bilir</li>
                                <li>Hadoop, Spark, Kafka gibi araçları tanır</li>
                            </ul>
                        </div>
                        <div className="edu-box">
                            <h4>Gereksinimler</h4>
                            <ul><li>Bilgisayar okuryazarlığı</li></ul>
                        </div>
                    </div>
                )}
            </div>

            <div className="edu-curriculum">
                <h3>Müfredat</h3>
                <ul>
                    {curriculum.map((topic, index) => (
                        <li key={index}>
                            <span>{index + 1}. {topic}</span>
                            <span>0/2</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="edu-similar">
                <h3>Benzer Eğitimler</h3>
                <div className="edu-similar-list">
                    {similarCourses.map((item, index) => (
                        <div key={index} className="edu-card">
                            <img src="/images/placeholder.jpg" alt={item.title} />
                            <p>{item.title}</p>
                            <span className="edu-level">{item.level}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationPage;
