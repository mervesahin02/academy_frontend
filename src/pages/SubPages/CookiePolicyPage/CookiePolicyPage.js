import React from "react";
import "./CookiePolicyPage.css";

const CookiePolicyPage = () => {
    return (
        <div className="cookiePolicy-page-container">
            <h3 className="page-title">Çerez Politikası</h3>

            <div className="cookie-card">
                <p>
                    Bu Çerez Politikası, Bilgi Teknolojileri ve İletişim Kurumu'na (BTK) bağlı BTK Akademi platformunun kullanıcılarına ait kişisel verilerin korunmasına ilişkin bilgilendirme amacıyla hazırlanmıştır...
                </p>

                <h5>1. Çerez Nedir?</h5>
                <p>
                    Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza veya cihazınıza kaydedilen küçük metin dosyalarıdır.
                </p>

                <h5>2. Çerezlerin Kullanım Amaçları</h5>
                <ul>
                    <li>Platformun güvenli ve verimli bir şekilde çalışmasını sağlamak</li>
                    <li>Kullanıcı deneyimini iyileştirmek ve tercihlerinizin hatırlanmasını sağlamak</li>
                    <li>Trafik analizi yapmak ve platformun performansını optimize etmek</li>
                </ul>

                <h5>3. Kullanılan Çerez Türleri</h5>
                <ul>
                    <li><strong>Zorunlu Çerezler:</strong> Temel fonksiyonlar için gereklidir.</li>
                    <li><strong>Analitik Çerezler:</strong> Kullanım alışkanlıklarını anonim şekilde analiz eder.</li>
                    <li><strong>Fonksiyonel Çerezler:</strong> Tercihlerinizi hatırlar, kişiselleştirilmiş deneyim sunar.</li>
                </ul>

                <h5>4. Çerezleri Kontrol Etme ve Silme</h5>
                <p>
                    Tarayıcı ayarlarından çerezleri kabul edebilir veya reddedebilirsiniz. Ancak bazı fonksiyonlar bu durumda çalışmayabilir.
                </p>

                <h5>5. Değişiklikler</h5>
                <p>
                    Bu politika zaman zaman güncellenebilir. Yayınlandığı tarihte yürürlüğe girer. Takip etmeniz önerilir.
                </p>

                <h5>6. Çerezlerin Kullanımını Kontrol Etme</h5>
                <p>
                    Tarayıcı ayarlarınızdan çerez tercihlerinizi değiştirebilirsiniz. İşte popüler tarayıcılar ve servisler için çerez yönetim sayfaları:
                </p>

                <div className="cookie-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Çerez Adı</th>
                                <th>Bağlantı Linki</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adobe Analytics</td>
                                <td><a href="https://www.adobe.com/uk/privacy/opt-out.html" target="_blank" rel="noopener noreferrer">Adobe Analytics Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>AOL</td>
                                <td><a href="https://help.aol.com/articles/restore-security-settings-and-enable-cookie-settings-on-browser" target="_blank" rel="noopener noreferrer">AOL Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>Google Adwords</td>
                                <td><a href="https://support.google.com/My-Ad-Center-Help/answer/12155764?hl=en&visit_id=638815234934938114-1695260252&rd=1" target="_blank" rel="noopener noreferrer">Google Adwords Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>Google Analytics</td>
                                <td><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>Google Chrome</td>
                                <td><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer">Google Chrome Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>Internet Explorer</td>
                                <td><a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Internet Explorer Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>Mozilla Firefox</td>
                                <td><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectslug=Cookies&redirectlocale=en-US" target="_blank" rel="noopener noreferrer">Mozilla Firefox Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>Opera</td>
                                <td><a href="https://security.opera.com/en/" target="_blank" rel="noopener noreferrer">Opera Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>Safari</td>
                                <td><a href="https://support.apple.com/tr-tr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari Çerez Politikası</a></td>
                            </tr>
                            <tr>
                                <td>Yandex</td>
                                <td><a href="https://browser.yandex.com/help/personal-data-protection/cookies.html" target="_blank" rel="noopener noreferrer">Yandex Çerez Politikası</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicyPage;
