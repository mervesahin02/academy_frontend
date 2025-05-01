import React from "react";
import "./SecurityPage.css";

const SecurityPage = () => {
    return (
        <div className="security-page-container">
            <h3 className="page-title">Gizlilik Politikası ve Aydınlatma Metni</h3>
            <div className="security-card">
                <h4>Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni</h4>

                <h5>1. Veri Sorumlusunun Kimliği</h5>
                <p>
                    BTK Akademi olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) çerçevesinde,
                    kişisel verilerinizin güvenliğine azami önem vermekteyiz...
                </p>

                <h5>2. İşlenen Kişisel Veriler ve Toplama Yöntemleri</h5>
                <ul>
                    <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası, doğum tarihi vb.</li>
                    <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi vb.</li>
                    <li><strong>Eğitim Bilgileri:</strong> Katıldığınız kurs ve program bilgileri, başarı durumunuz vb.</li>
                    <li><strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, kullanıcı giriş/çıkış bilgileri, çerez verileri vb.</li>
                </ul>

                <h5>3. Kişisel Verilerin İşlenme Amaçları</h5>
                <ul>
                    <li>Kamu hizmeti kapsamında eğitim ve bilgilendirme faaliyetleri yürütmek</li>
                    <li>Kayıt oluşturmak ve takibini sağlamak</li>
                    <li>Yasal yükümlülükleri yerine getirmek</li>
                    <li>Kullanıcı deneyimini iyileştirmek</li>
                    <li>Raporlama ve analiz yapmak</li>
                </ul>

                <h5>4. Kişisel Verilerin Aktarılması</h5>
                <ul>
                    <li><strong>Yetkili Kurumlarla:</strong> Mahkemeler, kolluk kuvvetleri gibi mercilere yasal zorunluluk halinde</li>
                    <li><strong>Hizmet Sağlayıcılarla:</strong> Yazılım hizmeti gibi teknik destek sunan iş ortakları</li>
                </ul>

                <h5>5. Hukuki Sebepler ve İşleme Süresi</h5>
                <p>
                    Kişisel verileriniz, 6698 sayılı KVKK’nın 5. ve 6. maddelerine dayanarak, kamu hizmeti yürütme,
                    yasal yükümlülükleri yerine getirme ve meşru menfaatler doğrultusunda işlenmektedir.
                </p>

                <h5>6. Kişisel Veri Sahibinin Hakları</h5>
                <ul>
                    <li>İşlenip işlenmediğini öğrenme</li>
                    <li>Bilgi talep etme</li>
                    <li>Düzeltme, silme ve yok etme</li>
                    <li>Aktarıldığı üçüncü kişileri bilme</li>
                    <li>İtiraz ve zarar tazmini isteme</li>
                </ul>

                <h5>7. Başvuru Yolları</h5>
                <p>
                    KVKK kapsamındaki taleplerinizi destek@btkakademi.gov.tr adresine iletebilir,
                    en geç 30 gün içinde yanıt alabilirsiniz.
                </p>
            </div>
        </div>
    );
};

export default SecurityPage;
