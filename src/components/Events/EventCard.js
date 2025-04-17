// events/EventCard.js
import React from 'react';
import './EventCard.css';
import { FaCalendarAlt, FaClock, FaUserGraduate, FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa';


const EventCard = ({ location, title, date, duration, level, code, deadline, image }) => {
    return (
        <div className="event-card-horizontal">
            <div className="event-top-section">
                <div className="event-image-box">
                    <img src={image} alt={title} className="event-img" />
                </div>
                <div className="event-header-content">
                    <div className="event-location-box">
                        <FaMapMarkerAlt className="icon location-icon" /> {location}
                    </div>
                    <div className="event-title-box">{title}</div>
                </div>
            </div>

            <div className="event-info-box">
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
