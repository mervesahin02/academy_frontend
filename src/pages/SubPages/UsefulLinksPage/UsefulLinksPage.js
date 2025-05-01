import React from "react";
import "./UsefulLinksPage.css";

const links = [
    {
        src: "https://www.btkakademi.gov.tr/api/gallery/51/6f901664-f7a2-4299-8c94-b478263e3aca/guvenli-internet.png",
        alt: "Güvenli İnternet",
        title: "Güvenli İnternet Merkezi",
    },
    {
        src: "https://www.btkakademi.gov.tr/api/gallery/51/ab43a53b-f344-42ea-9eca-6d19ac4a557e/guvenli-web.png",
        alt: "Güvenli Web",
        title: "Güvenli Web",
    },
    {
        src: "https://www.btkakademi.gov.tr/api/gallery/51/7a525f9b-ccf2-45bd-80f8-e8688ce70ed1/guvenli-cocuk.png",
        alt: "Güvenli Çocuk",
        title: "Güvenli Çocuk",
    },
    {
        src: "https://www.btkakademi.gov.tr/api/gallery/51/1c36b317-2240-45f2-bff6-5642493a5382/internet-yardim.png",
        alt: "İnternet Yardım",
        title: "İnternet Yardım",
    },
    {
        src: "https://www.btkakademi.gov.tr/api/gallery/51/83f120eb-7e15-4e9c-829c-093b7005fce9/ihbar-web.png",
        alt: "İhbar Web",
        title: "İhbar Web",
    },
    {
        src: "https://www.btkakademi.gov.tr/api/gallery/51/d6a9704d-573c-4b7d-9b85-d1798a6efd0e/usom.png",
        alt: "USOM",
        title: "USOM",
    },
];

const UsefulLinksPage = () => {
    return (
        <div className="usefulLinks-page-container">
            <h3 className="page-title">Faydalı Linkler</h3>
            <div className="links-box">
                {links.map((link, index) => (
                    <div className="link-item" key={index}>
                        <img src={link.src} alt={link.alt} />
                        <p>{link.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsefulLinksPage;
