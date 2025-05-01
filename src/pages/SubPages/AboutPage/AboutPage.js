import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <h3 className="page-title">Hakkımızda</h3>

            <section className="about-section">
                <p>
                    <strong>BTK Akademi</strong>, Bilgi Teknolojileri ve İletişim Kurumu (BTK) bünyesinde bilgi teknolojileri alanında eğitim, gelişim fırsatları sunmak amacıyla Ulaştırma ve Altyapı Bakan Yardımcısı Sayın Dr. Ömer Fatih Sayan’ın öncülüğünde 2017 yılında kurulmuştur.
                    Kurulduğu günden bu yana dijital kariyere adım atmak isteyen herkese teknoloji dünyasında başarılı bir yolculuk için ihtiyacı olan tüm bilgi ve becerileri sunmaktadır. Hem yeni başlayanlar hem de profesyoneller için tasarlanmış eğitimlerle dijital dünyada sınır tanımayan, alanında öncü bir eğitim merkezidir.
                    Bu kapsamda düzenlediği sınıf içi ve online eğitim programlarıyla kamu ve özel sektörün ihtiyacı olan kaliteli iş gücünün üretilmesine katkı sağlamaktadır.
                    BTK Akademi, katılımcılarına her alanda derinlemesine bilgi ve pratik kazandırırken, en güncel teknolojik gelişmeleri de takip etmelerine olanak sağlamaktadır.
                </p>
                <p>
                    <strong>BTK Akademi çevrim içi eğitim portalı</strong>; 2.5 milyon+ kullanıcı, 160 bin+ dakikadan oluşan 315+ çevrim içi eğitim seçeneği ile Türkiye’nin yerli ve milli en büyük çevrim içi eğitim portalıdır.
                </p>
            </section>

            <section className="why-section">
                <h3>Neden BTK Akademi?</h3>
                <ul>
                    <li>Tüm eğitimler ücretsiz olarak sunulmaktadır.</li>
                    <li>Farklı seviyelerde ve konularda eğitim seçenekleri bulunmaktadır.</li>
                    <li>Alanında uzman eğitmenlerden eğitim alma imkânı sağlamaktadır.</li>
                    <li>Eğitim tamamlandığında sertifika alma fırsatı sağlamaktadır.</li>
                    <li>Dijital becerileri geliştirerek teknolojiye hakimiyet sağlamaktadır.</li>
                </ul>
            </section>

            <section className="vision-mission">
                <div>
                    <h1>BTK Akademi Vizyonu</h1>
                    <p>
                        Ulusal ve uluslararası düzeyde, dijital/yerinde eğitimlerle, etkinliklerle alanında öncü bir kurum haline gelmek; bireylerin ve kurumların dijital yetkinliklerini geliştirmek ve bilgi teknolojileri alanında güncel, pratik eğitimler sunarak Türkiye’nin dijital dönüşümüne katkıda bulunmaktır.
                    </p>
                </div>
                <div>
                    <h1>BTK Akademi Misyonu</h1>
                    <p>
                        Kaliteli, güncel ve kapsamlı eğitim içeriklerimizle bireylerin ve kurumların bilgi teknolojileri alanında bilgiye erişimini kolaylaştırmak hedeflenmektedir.
                    </p>
                </div>
            </section>

            <section className="leadership-section">
                <div className="leader-card">
                    <img
                        src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/bd7429d8-27be-4ba9-a323-aeaa6df704dd/baskan.jpg?t=1742970354473"
                        alt="Dr. Ömer Fatih Sayan"
                        className="leader-image"
                    />
                    <div className="leader-content">
                        <h2>Dr. Ömer Fatih SAYAN</h2>
                        <h4>T.C. Ulaştırma ve Altyapı Bakan Yardımcısı</h4>
                        <p><strong>Öğrenim:</strong> İstanbul Üniversitesi Elektronik Mühendisliği, Bahçeşehir Üniversitesi Hukuk, Oxford Üniversitesi Diplomasi Eğitimi</p>
                        <p><strong>Önceki Görev:</strong> İstanbul BŞB, özel sektör AR-GE, Silikon Vadisi girişimleri, üniversite dersleri, Başbakanlık Başmüşavirliği.</p>
                    </div>
                </div>

                <div className="leader-card">
                    <img
                        src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/32234ef9-4996-45ec-91c9-4564b472a51d/OmerKaragozoglu.jpg?t=1742903162417"
                        alt="Ömer Abdullah Karagözoğlu"
                        className="leader-image"
                    />

                    <div className="leader-content">
                        <h2>Ömer Abdullah KARAGÖZOĞLU</h2>
                        <h4>Bilgi Teknolojileri ve İletişim Kurumu Başkanı</h4>
                        <p><strong>Öğrenim:</strong> Doğu Akdeniz Üniversitesi, Mühendislik Fakültesi</p>
                        <p><strong>Önceki Görev:</strong> İSKİ ve BELBİM'de Yazılım/Proje yöneticiliği, 2016'dan itibaren BTK Başkan Danışmanı ve Kurul Üyesi</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
