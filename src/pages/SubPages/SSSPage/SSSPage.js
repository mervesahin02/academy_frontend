import React, { useState } from 'react';
import './SSSPage.css';

const sidebarCategories = [
    'Profil',
    'Portal Kullanımı',
    'Eğitimler',
    'Sınavlar',
    'Sertifika',
    '6 GB Kampanya',
    'Kullanıcı Destek'
];

const faqData = [
    { category: 'Profil', question: '16 Yaş Altı Kullanıcı / Şifrem E-posta Hesabıma İletilmedi, Ne Yapmalıyım?', answer: 'E-posta hesabınızın spam klasörünü kontrol edin. Hâlâ ulaşmadıysa destekle iletişime geçin.' },
    { category: 'Profil', question: '16 Yaş Altı Kullanıcı / Giriş Şifremi Unuttum, Ne Yapmalıyım?', answer: '“Şifremi Unuttum” seçeneğiyle yeni şifre talep edebilirsiniz.' },
    { category: 'Profil', question: 'Ad-Soyad Bilgilerimi Nasıl Güncelleyebilirim?', answer: 'Kimlik bilgileriniz Mernis üzerinden alınır, değiştirilemez.' },
    { category: 'Portal Kullanımı', question: 'BTK Akademi Portalı Nedir?', answer: 'BTK Akademi; teknoloji ve dijital okuryazarlık eğitimi sunan çevrimiçi bir platformdur.' },
    { category: 'Eğitimler', question: 'Çevrim İçi Eğitimlere Nasıl Katılırım?', answer: 'Eğitime başvuru yaptıktan sonra “Eğitimlerim” menüsünden erişebilirsiniz.' },
    { category: 'Eğitimler', question: 'Yüz Yüze Eğitimlerde Katılım Zorunlu mu?', answer: 'Evet, yüzde 80 devam zorunluluğu vardır.' },
    { category: 'Sertifika', question: 'Sertifikam Ne Zaman Gelir?', answer: 'Eğitim bitiminden sonra 7 iş günü içerisinde portal üzerinden erişilebilir.' },
    { category: 'Kullanıcı Destek', question: 'Teknik sorun yaşıyorum, ne yapmalıyım?', answer: 'Destek Talebi formunu doldurarak teknik ekibe ulaşabilirsiniz.' },
];

const SSSPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('Profil');

    const filteredFaqs = faqData.filter(faq =>
        faq.category === activeCategory &&
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <div className="sss-layout">
            <aside className="sss-sidebar">
                <h3>Kategoriler</h3>
                <ul>
                    {sidebarCategories.map((cat, idx) => (
                        <li
                            key={idx}
                            className={activeCategory === cat ? 'active' : ''}
                            onClick={() => {
                                setActiveCategory(cat);
                                setActiveIndex(null); // sorular sıfırlansın
                            }}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="sss-container">

                <h2></h2>

                <div className="sss-search">
                    <input
                        type="text"
                        placeholder="Sıkça Sorulan Sorular'da Ara"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {filteredFaqs.map((faq, index) => (
                    <div key={index} className={`sss-question ${activeIndex === index ? 'active' : ''}`}>
                        <button onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                            <span>{faq.question}</span>
                            <span className="arrow">{activeIndex === index ? '˅' : '›'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="sss-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}

                {filteredFaqs.length === 0 && (
                    <p className="sss-no-result">Sonuç bulunamadı.</p>
                )}
            </main>
        </div>
    );
};

export default SSSPage;
