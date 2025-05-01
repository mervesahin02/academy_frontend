// src/pages/CareerPage/NewsPage/NewsPage.js
import React from 'react';
import './NewsPage.css';

const NewsPage = () => {
    return (
        <div className="news-wrapper">
            <h3 className="page-title">Haberler</h3>
            {/* Üst Manşet Bölümü */}
            <section className="news-headline">
                <img
                    src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/337c3f28-8e8a-46c6-b04b-15ea32634c7b/kapak_haber.jpg?t=1735907953997"
                    alt="Başvuru Duyurusu"
                />
                <div className="headline-info">
                    <h1>Başvurular Açıldı, Harika Fırsatları Kaçırmayın!</h1>
                    <p>BTK Akademi, Türkiye’nin dört bir yanında eğitimler düzenleyerek teknolojiye ilgi duyan herkesi geleceğe hazırlıyor. Elazığ, İzmir, Tokat, Rize, Mersin, Trabzon ve Ankara gibi şehirlerde Python, C#, Mobil Geliştirme, Yapay Zeka, Arduino ve daha fazlası sizleri bekliyor. Tüm eğitimler ücretsiz ve sertifikalı!</p>
                    <ul>
                        <span>-</span> Elazığ: ROS ve Python Eğitimleri<br></br>
                        <span>-</span> Ankara: Yapay Zeka ve Java Eğitimi
                    </ul>
                </div>
            </section>

            {/* Mini Grid Haber Kartları */}
            <section className="mini-news-grid">
                <div className="mini-card">
                    <img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/8992a279-739a-4d0c-a048-41a264edc705/öğretmenler+günü+7.jpeg?t=1732522856124" alt="Öğretmenler Günü" />
                    <p className="category">Etkinlik</p>
                    <p>Teknolojiyi Eğitimle Şekillendirenler: Öğretmenler Günü Buluşması</p>
                </div>
                <div className="mini-card">
                    <img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/0627a435-6a65-4d9a-a7d2-a9edb99cd09c/kapak1.jpg?t=1745311433132" alt="Rektör Ziyareti" />
                    <p className="category">Ziyaret</p>
                    <p>Anadolu Üniversitesi Rektörü Sayın Prof. Dr. Yusuf Adıgüzel’i Ağırladık</p>
                </div>
                <div className="mini-card">
                    <img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/6cf5a232-34a8-4672-8d2d-87c240248174/iftar+6.jpg?t=1743071679182" alt="İftar Sofrası" />
                    <p className="category">Ramazan</p>
                    <p>Ramazan Ayının Bereketi BTK Akademi İftar Sofralarında Paylaşıldı</p>
                </div>
                <div className="mini-card">
                    <img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/5aee0b26-4775-4017-a2e9-3e0a12155b46/Kariyer+Fuarı+Kapak.jpg?t=1740471236175" alt="Kariyer Fuarı" />
                    <p className="category">Fuar</p>
                    <p>BTK Akademi Trakya ve İç Anadolu Kariyer Fuarlarında Gençlerle Buluştu!</p>
                </div>
            </section>

            {/* Çok Okunanlar & Gündem Alanı */}
            <section className="multi-section">
                <div className="cok-okunanlar">
                    <h2>Çok Okunanlar</h2>
                    <ul>
                        <li>- Marmara Denizi'nde 4,1 büyüklüğünde deprem</li>
                        <li>- BTK Akademi’den 2025 eğitim takvimi duyurusu</li>
                        <li>- Python ile Yapay Zeka geliştirme rehberi yayında</li>
                        <li>- Katılımcılardan büyük ilgi gören Arduino eğitimleri devam ediyor</li>
                    </ul>
                </div>

                <div className="gundem">
                    <h2>Gündem</h2>
                    <p>
                        <h3>“Teknolojiyi Eğitimle Şekillendirenler” Etkinliği</h3>
                        BTK Akademi’nin Öğretmenler Günü Buluşmasında, dijital geleceği şekillendiren eğitmenlerimizle bir araya geldik. BTK Başkanı Ömer Abdullah Karagözoğlu’nun açılış konuşmasıyla başlayan etkinlikte, eğitmenlere ödüller verildi. Eğitimde dijital dönüşüme katkı sağlayan eğitmenlere teşekkür edildi.
                    </p>
                </div>
            </section>

            <section className="duyurular-section">
                <h2>Duyurular</h2>
                <div className="duyurular-grid">
                    <div className="duyuru-card">
                        <img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/f37aa6d4-f19c-40f6-8b22-6a3f1d18268d/YapayZekaBanner%402x+%281%29.png?t=1745247996916" alt="Yapay Zeka Eğitimi" />
                        <div className="duyuru-overlay">
                            <p>Yapay Zeka Eğitimleri Başladı</p>
                        </div>
                    </div>
                    <div className="duyuru-card">
                        <img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/3e5248dd-8f2c-4423-916e-c082482c5439/Banner%403x.png?t=1745332248987" alt="Siber Güvenlik Eğitimi" />
                        <div className="duyuru-overlay">
                            <p>Siber Güvenlik Sertifika Programı</p>
                        </div>
                    </div>
                    <div className="duyuru-card">
                        <img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/7e366946-0493-4feb-92e1-8b657c323aa1/etkinlik1.png?t=1722934404102" alt="BTK Etkinlik" />
                        <div className="duyuru-overlay">
                            <p>BTK Akademi’de Etkinlik Zamanı</p>
                        </div>
                    </div>
                    <div className="duyuru-card">
                        <img src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/4bcf9bc7-05ec-4664-abf2-7924e2471dcc/mobiluygulama-banner.png?t=1722860311607" alt="Mobil Uygulama" />
                        <div className="duyuru-overlay">
                            <p>Yeni Mobil Uygulama Yayında</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default NewsPage;