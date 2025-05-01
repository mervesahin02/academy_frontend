import React from "react";
import "./CommunicationPage.css";

const CommunicationPage = () => {
    return (
        <div className="communication-page-container">
            <h3 className="page-title">İletişim Bilgileri</h3>

            <div className="contact-card">
                <p> BTK Akademi bilgi ve destek hattı <strong>ALO 120</strong></p>
                <p>
                    E-posta: <a href="mailto:destek@btkakademi.gov.tr">destek@btkakademi.gov.tr</a>
                </p>
                <p>
                    Bilgi Teknolojileri ve İletişim Kurumu Eskişehir Yolu 10.Km<br />
                    No: 276 Posta Kodu: 06530 Çankaya/Ankara
                </p>

                <div className="map-wrapper">
                    <iframe
                        title="BTK Harita"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.1132519728297!2d32.75484257653517!3d39.91142718950409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f1b6e40f3b7%3A0x94c78f3030c7bcfa!2sDumlup%C4%B1nar%20Blv.%20No%3A272%2C%2006530%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1714377787775!5m2!1str!2str"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default CommunicationPage;
