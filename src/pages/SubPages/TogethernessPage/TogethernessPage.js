import React from "react";
import "./TogethernessPage.css";

const TogethernessPage = () => {
    return (
        <div className="togetherness-page-container">
            <h3 className="page-title">İş Birliklerimiz</h3>

            <div className="togetherness-image-container">
                <img
                    src="https://assets-btkakademi-gov-tr.akamaized.net/api/gallery/51/0a8e2f6a-fc9e-4920-a110-c53652bf0d26/isbirliklerimiz.jpg?=1668163398228"
                    alt="İş Birliklerimiz"
                    className="togetherness-image"
                />
            </div>
        </div>
    );
};

export default TogethernessPage;
