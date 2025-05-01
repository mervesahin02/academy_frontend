import React from 'react';
import './EventsPage.css';

const EventCard = ({
    month,
    day,
    year,
    weekday,
    title,
    conductor,
    artist,
    description,
    timePlace,
    image,
    showApply = true,
}) => {
    return (
        <div className="custom-event-card">
            <div className="left-date-box">
                <div className="month">{month}</div>
                <div className="day">{day}</div>
                <div className="year">{year}</div>
                <div className="weekday">{weekday}</div>
                {showApply && <button className="ticket-button">İncele</button>}
            </div>

            <div className="middle-info-box">
                <h3>{title}</h3>
                <p className="person">{conductor}</p>
                <p className="person">{artist}</p>
                <p className="desc">{description}</p>
                <p className="time">{timePlace}</p>
            </div>

            <div className="image-box">
                <img src={image} alt={title} />
            </div>
        </div>
    );
};

const EventsPage = () => {
    return (
        <div className="event-page-wrapper">
            <h3 className="page-title">Etkinlikler</h3>
            <EventCard
                month="MAYIS" day="10" year="2025" weekday="CUMA"
                title="Python Programlama Atölyesi"
                conductor="24 Saat - Lise"
                artist="Eğitim Kodu: 201"
                description="ANKARA"
                timePlace="10 Mayıs 2025 - 31 Mayıs 2025 / Son Başvuru: 4 Mayıs 2025"
                image="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/9a613f9f-40c2-4cf3-8a70-d176cd0043a2/230x150%403x.png"
            />
            <EventCard
                month="NİSAN" day="04" year="2025" weekday="PERŞEMBE"
                title="Uygulamalarla Makine Öğrenmesi ve Derin Öğrenme Atölyesi"
                conductor="70 Saat - Yüksek Lisans, Lisans, Ön Lisans, Doktora"
                artist="Eğitim Kodu: 201"
                description="MANİSA"
                timePlace="4 Nisan 2025 - 4 Mayıs 2025 / Son Başvuru: 23 Mart 2025"
                image="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/fc1de868-7a3d-4e39-8f0a-b6a5d1032de6/230x150%403x.png"
            />
            <EventCard
                month="NİSAN" day="05" year="2025" weekday="CUMA"
                title="Yapay Zeka Okuryazarlığı ve Üretken Yapay Zeka Atölyesi"
                conductor="64 Saat - Yüksek Lisans, Doktora"
                artist="Eğitim Kodu: 201"
                description="ANTALYA"
                timePlace="5 Nisan 2025 - 27 Nisan 2025 / Son Başvuru: 23 Mart 2025"
                image="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/8a2808c6-806d-44a6-9bae-37cb153f0b23/230x150%403x.png"
            />
            <EventCard
                month="NİSAN" day="06" year="2025" weekday="CUMARTESİ"
                title="Uygulamalı Figma Atölyesi"
                conductor="48 Saat - Lisans"
                artist="Eğitim Kodu: 201"
                description="İSTANBUL"
                timePlace="6 Nisan 2025 - 5 Mayıs 2025 / Son Başvuru: 25 Mart 2025"
                image="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/e24af3a7-bbd0-499a-8371-8ae10f95334e/230x150%403x.png"
            />
            <EventCard
                month="ŞUBAT" day="22" year="2025" weekday="CUMARTESİ"
                title="Büyük Dil Modelleri (LLMs) Tabanlı Uygulama Geliştirme Atölyesi"
                conductor="80 Saat - Yüksek Lisans, Lisans, Ön Lisans"
                artist="Eğitim Kodu: 201"
                description="ANTALYA"
                timePlace="22 Şubat 2025 - 23 Mart 2025 / Son Başvuru: 16 Şubat 2025"
                image="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/5569c3de-f574-403c-8183-f127fb7168b9/230x150%403x.png"
            />
            <EventCard
                month="ŞUBAT" day="18" year="2025" weekday="SALI"
                title="Python Programlama Eğitimi"
                conductor="36 Saat - Yüksek Lisans, Lisans, Ön Lisans, Doktora"
                artist="Eğitim Kodu: 101"
                description="TOKAT"
                timePlace="18 Şubat 2025 - 2 Mart 2025 / Son Başvuru: 9 Şubat 2025"
                image="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/a578c179-0fc4-4871-8dac-abd47df13b27/230x150%403x.png"
            />
            <EventCard
                month="ŞUBAT" day="15" year="2025" weekday="CUMARTESİ"
                title="Rize Yapay Zeka Araçlarının Kullanımı Eğitimi"
                conductor="60 Saat - Yüksek Lisans, Lisans, Ön Lisans"
                artist="Eğitim Kodu: 101"
                description="RİZE"
                timePlace="15 Şubat 2025 - 16 Mart 2025 / Son Başvuru: 9 Şubat 2025"
                image="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/26cfef42-69ca-41ad-b66f-2e690a8aabdd/230x150%403x.png"
            />
        </div>
    );
};

export default EventsPage;
