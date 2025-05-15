import React from "react";
import "./EducationPage.css";

const EducationPage = () => {
    return (
        <div className="edu-container">
            <div className="edu-grid">

                <main className="edu-detail-info">
                    <h1>C# Programlama Eğitimi</h1>

                    <section>
                        <h2>Eğitim Amacı</h2>
                        <p>
                            Bu eğitim, katılımcılara C# programlama dilinin temel özelliklerini öğretmeyi ve yazılım geliştirme süreçlerinde profesyonel beceriler kazandırmayı hedeflemektedir. Başlangıç seviyesinde başlayarak herhangi bir programlama bilgisi olmayan kişilerin C# dilinin temel özelliklerini kolayca öğrenmelerine olanak sağlar. Eğitim, C# dilinin temel kavramlarını öğretmeye odaklanmaktadır.
                        </p>
                    </section>

                    <section>
                        <h2>Eğitim Özeti</h2>
                        <p>
                            Bu eğitim, yazılım geliştirme sürecine sağlam bir temel atmayı ve profesyonel düzeyde backend yazılım geliştirme becerileri kazandırmayı amaçlamaktadır. İçerik, programlamaya girişten başlayarak, veri tipleri, döngüler gibi temel konuları kapsar ve kurumsal yazılım mimarileri, tasarım desenleri gibi ileri düzey tekniklerle devam eder. Katılımcılar, sektördeki kurumsal organizasyonlar tarafından kullanılan backend yazma tekniklerini, gerçek dünya projeleri üzerinden öğrenirken, hayat kurtarıcı best practice'lerle donatılacaktır. Eğitimin bir diğer önemli özelliği, SOLID prensiplerine dayalı sürdürülebilir yazılım mimarisi kurmaya yönelik derinlemesine bilgiler sunmasıdır.
                        </p>
                        <p>
                            Eğitim, yazılım geliştirme sürecinde Ne-Ne Zaman-Nerede-Niçin gibi sorulara odaklanarak, sadece syntax bilgisi yerine doğru teknik yaklaşım ve stratejileri öğrenmeye odaklanmaktadır. Bu, katılımcıların yazılım geliştirme sürecinde doğru kararlar verebilmelerini sağlayacak bilgi ve becerileri kazanmalarını hedefler. Eğitim, backend yazma tekniklerinin ileri düzey bölümleriyle profesyonel bir yazılımcı olarak kariyerlerine önemli bir katkı sağlayacaktır.
                        </p>
                    </section>

                    <section>
                        <h2>Hedef Kitle</h2>
                        <p>Yazılım geliştirmeye sıfırdan başlayıp profesyonel teknikler öğrenmek isteyenler.</p>
                    </section>

                    <section>
                        <h2>Kazanımlar</h2>
                        <ul>
                            <li>Doğru tekniklerle en baştan C# öğrenecek</li>
                            <li>Her konuyu gerçek projelerde nasıl kullanacağını öğrenecek</li>
                            <li>Tasarım desenlerini öğrenecek</li>
                            <li>Etkili araçları kullanacak ve öğrenecek</li>
                            <li>Kurumsal mimarileri öğrenecek</li>
                            <li>Katmanlı mimarileri SOLID prensiplerle öğrenecek</li>
                            <li>Java, Python gibi dilleri kısa sürede öğrenecek bir altyapıya sahip olacak</li>
                            <li>Repository Desenlerini öğrenecek</li>
                            <li>Yazılımda soyutlamanın önemini kavrayacak ve uygulayacak</li>
                            <li>Tak-çalıştır sistemleri yazacak</li>
                            <li>Aspect Oriented Programming tekniklerini öğrenecek</li>
                            <li>Entity Framework ve NHibernate uygulamasını öğrenecek</li>
                            <li>Sürdürülebilir ve okunabilir yazılım yapmayı öğrenecek</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Gereksinimler</h2>
                        <p>Temel algoritma bilgisi</p>
                    </section>

                    <section>
                        <h2>Kullanılacak Programlar</h2>
                        <p>Visual Studio Code</p>
                    </section>
                </main>

                <aside className="edu-sidebar">
                    <div className="edu-sticky-card">
                        <img
                            src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/e94740dd-aed8-488d-85ad-c38d448dcbd6/72_yeni_0x400.png?t=1736248529882"
                            alt="Eğitim Görseli"
                            className="edu-card-image"
                        />
                        <h2>₺4.750</h2>
                        <p>👍 2668 | 👎 274</p>
                        <p>Katılımcı: 186.2K+</p>
                        <p>Süre: 45:24:36</p>
                        <p>Sertifika: Katılım Sertifikalı</p>
                        <p>Eğitim Şekli: Uzaktan</p>
                        <button className="edu-cta-btn">Eğitime Başla</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default EducationPage;
