import React from 'react';
import "../style-sheets/Card.css"

const Card = ({ imageUrl, title, status , location , FirstSeen }) => {
    let status_ = status.split(" - ")[0].toLowerCase();
    
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <div>
            <span className="card-title ">{title}</span>
            <div className='status-container'>
                <div className={`status ${status_ === "alive" ? "alive" : (status_ === "dead" ? "dead" : "")}`}></div>
                <span className="smaller-font white-color ">{status}</span>
            </div>
        </div>
        <div>
            <span className="card-text">Last known Location:</span>
            <span className="big-font white-color ">{location}</span>
        </div>       
        <div>
            <span className="card-text ">First seen in:</span>
            <span className="big-font white-color ">{FirstSeen}</span>
        </div>      
      </div>
    </div>
  );
};

export default Card;
