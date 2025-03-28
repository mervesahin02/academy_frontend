import React from 'react';
import './NewsCard.css';
import { FaEye, FaHeart } from 'react-icons/fa';

const NewsCard = ({ image, title, date }) => {
    const views = Math.floor(Math.random() * 500) + 100;
    const likes = Math.floor(Math.random() * 50) + 1;

    return (
        <div className="news-section-card">
            <img src={image} alt={title} className="news-section-card-image" />
            <div className="news-section-card-content">
                <h3 className="news-section-card-title">{title}</h3>
                <p className="news-section-card-date">{date}</p>
                <div className="news-section-card-stats">
                    <span><FaEye className="icon" /> {views} Görüntülenme</span>
                    <span><FaHeart className="icon" /> {likes} Beğeni</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
