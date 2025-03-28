// events/EventCard.js
import React from 'react';
import './EventCard.css';
import { FaCalendarAlt, FaClock, FaUserGraduate, FaInfoCircle } from 'react-icons/fa';

const EventCard = ({ location, title, date, duration, level, code, deadline, image }) => {
    return (
        <div className="event-card-horizontal">
            <div className="event-img-box">
                <img src={image} alt={title} className="event-img" />
            </div>

            <div className="event-content">
                <div className="event-top">
                    <span className="event-location">{location}</span>
                    <h3 className="event-title">{title}</h3>
                </div>

                <div className="event-info">
                    <p><FaCalendarAlt className="icon" /> {date}</p>
                    <p><FaClock className="icon" /> {duration}</p>
                    <p><FaUserGraduate className="icon" /> {level}</p>
                </div>

                <div className="event-deadline">
                    <strong>Son Başvuru Tarihi:</strong> {deadline} <br />
                    Eğitim Kodu: {code}
                </div>

                <div className="event-actions-horizontal">
                    <button className="details-button">
                        <FaInfoCircle className="icon" /> Ayrıntıları İncele
                    </button>
                    <button className="apply-button">Başvur</button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
