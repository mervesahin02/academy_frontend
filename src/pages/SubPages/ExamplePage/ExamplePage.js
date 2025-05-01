import React, { useState } from 'react';
import './ExamplePage.css';

const ExamplePage = () => {
    const [activeSection, setActiveSection] = useState(null);
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="volunteer-page">
            <h1 className="main-title">Btk Akademi Gönüllüsü Ol, Büyük Takıma Sen De Katıl</h1>
            <p className="intro-text">
                'BTK Akademi Gönüllüsü Ol Büyük Takıma Sen de Katıl’ programı ile 2 Milyonu aşan kullanıcı ile BTK Akademi ailesi daha da büyütüyoruz. Sürekli olarak kendini geliştirmeyi hedefleyen, yeniliklere açık olan, YAZILIM’ın ritmini tutan BTK Akademi’nin bir parçası da sen olmak ister misin? Tüm Türkiye’ye açılan bu proje ile kendini ait hissettiğin alanda sen de aktif olarak yer alabilir, eğitmen ya da kampüs gönüllüsü olabilirsin. Yapman gereken şey çok basit, aşağıda belirtilen alanlardan birini seç, ilgili koşulları sağla ve formu doldurarak başvurunu tamamla...
                <br>
                </br>
                <h1 className="amain-title"> Sizlerden Ne Bekliyoruz?</h1>
                <li>BTK Akademi'nin misyonu ve vizyonu doğrultusunda hareket etmek.</li>
                <li>İlgili konularda derin bilgi ve deneyime sahip olmak.</li>
                <li>Katılımcı odaklı bir yaklaşımla eğitim vermek.</li>
                <li>Yenilikçi eğitim metotlarına ve teknolojilere açık olmak.</li>
                <br>
                </br>

                <h1 className="amain-title">Gelişim Fırsatları</h1>
                <li>Kendi uzmanlık alanınızda ve eğitim becerilerinizde gelişim imkânı.</li>
                <li> Teknolojik olanakları kullanarak eğitim materyalleri oluşturma ve sunma becerilerinin geliştirilmesi.</li>
                <li>BTK Akademi'nin eğitim programlarını ve kaynaklarını kullanma fırsatı.</li>

                <br>
                </br>

                <h1 className="amain-title">Başvuru ve Seçim Süreci</h1>
                <li>Başvuru için online formu doldurabilirsiniz.</li>
                <li>Başvuruların değerlendirilmesi sonrasında uygun adaylarla mülakatlar yapılacaktır.</li>
                <li>Seçilen adaylar ‘BTK Akademi Eğitmen Ol’Programı'na katılmaya hak kazanacaktır.</li>
            </p>
            <br>
            </br>
            <div className="volunteer-button online" onClick={() => toggleSection('online')}>
                Çevrim İçi Eğitimlerde Gönüllü Ol
            </div>
            {activeSection === 'online' && (
                <div className={`info-box online`}>
                    <div className="info-box-content">
                        <h2>Çevrim İçi Eğitim İçin Eğitmen Başvuru Şartları</h2>
                        <ul>
                            <li>En az ön lisans mezunu olmak.</li>
                            <li>İlgili alanda eğitim almış olmak.</li>
                            <li>22 yaş ve üstü olmak.</li>
                            <li>En az 1 yıl online eğitmenlik deneyimi.</li>
                            <li>İletişim becerisi ve düzgün diksiyon sahibi olmak.</li>
                            <li>Online platformlara hakim olmak.</li>
                        </ul>
                    </div>
                </div>
            )}

            <div className="volunteer-button face" onClick={() => toggleSection('face')}>
                Yüz Yüze Eğitimlerde Gönüllü Ol
            </div>
            {activeSection === 'face' && (
                <div className={`info-box face`}>
                    <div className="info-box-content">
                        <h2>Yüz Yüze Eğitim İçin Eğitmen Başvuru Şartları</h2>
                        <ul>
                            <li>En az ön lisans mezunu olmak.</li>
                            <li>İlgili alanda eğitim almış olmak.</li>
                            <li>22 yaş ve üstü olmak.</li>
                            <li>Yüz yüze veya online eğitim deneyimi sahibi olmak.</li>
                            <li>İletişim ve anlatım becerisi güçlü olmak.</li>
                            <li>Diksiyonu düzgün olmak.</li>
                        </ul>
                    </div>
                </div>
            )}

            <div className="volunteer-button campus" onClick={() => toggleSection('campus')}>
                BTK Akademi Kampüs Gönüllüsü Ol
            </div>
            {activeSection === 'campus' && (
                <div className={`info-box campus`}>
                    <div className="info-box-content">
                        <h2>Kampüs Gönüllüsü Başvuru Şartları</h2>
                        <p>
                            Üniversitende veya şehrindeki etkinliklerde BTK Akademi'yi temsil etmek ister misin?
                            Katıl, büyüyen ekibin bir parçası ol!
                        </p>
                        <ul>
                            <li>Örgün eğitimde ön lisans/lisans öğrencisi olmak.</li>
                            <li>30 yaş altı olmak.</li>
                            <li>İletişim becerileri güçlü olmak.</li>
                            <li>Yazılım ve bilişim kulüplerine üyelik (tercih sebebidir).</li>
                        </ul>
                    </div>
                </div>
            )}

            <div className="volunteer-process">
                <h2>Eğitmen Başvuru ve Değerlendirme Aşamaları</h2>
                <h3>1) Başvurunun Alınması</h3>
                <p>Başvuru formu doldurulur. Ad, soyad, iletişim bilgileri online olarak alınır.</p>
                <h3>2) Ön Değerlendirme Süreci</h3>
                <p>Deneyim ve iletişim becerileri incelenir. Uygun adaylar mülakata çağrılır.</p>
            </div>

            <div className="volunteer-call">
                <h3>Sen de geleceği şekillendiren gönüllülerden biri ol!</h3>
                <p>
                    BTK Akademi çatısı altında bilgi paylaşmanın heyecanını yaşa, eğitimde dönüşümün bir
                    parçası ol. Kendini geliştir, etki yarat, binlerce insana ilham ver.
                </p>
                <p>
                    Hangi alan seni yansıtıyorsa, oradan başla.
                    <br />
                    <strong>Şimdi tam zamanı. Gönüllü ol, büyük takıma katıl!</strong>
                </p>
            </div>
        </div>
    );
};

export default ExamplePage;
