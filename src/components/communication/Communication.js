import React from 'react';
import './Communication.css';
import { FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';

const Communication = () => {
    return (
        <section className="communication">
            <div className="container">
                <h2 className="title">Aklına bir şey mi takıldı ?</h2>
                <p className="subtitle">
                    Aklınıza takılan herhangi bir konuda destek ekibimiz her zaman yanınızda.
                    Hemen bizimle iletişime geçin, aklınızdaki sorulara hızlıca cevap verelim,
                    ihtiyaç duyduğunuz her an yardımınıza koşalım.
                </p>

                <div className="cards">
                    <div className="card">
                        <FaPhoneAlt className="com-icon" />
                        <h3 className="label">Alo 123</h3>
                        <hr />
                        <p className="description">
                            Hemen bizimle iletişime geçin aklınıza takılan ne varsa çözelim.
                        </p>
                    </div>

                    <div className="card">
                        <FaEnvelopeOpenText className="com-icon" />
                        <h3 className="label">destek@btkakademi.gov.tr</h3>
                        <hr />
                        <p className="description">
                            Hemen bizimle iletişime geçin aklınıza takılan ne varsa çözelim.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Communication;
