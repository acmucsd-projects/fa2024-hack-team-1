import React from 'react';
import './SuggestedGroupCard.css';

function SuggestedGroupCard({ name, thumbnailLink, location, budget, personCount, description }) {
  return (
    <div className="group-card">
      <img
        src={thumbnailLink}
        alt={`${name} Thumbnail`}
        className="group-card-thumbnail"
      />
      <h3 className="group-card-title">{name}</h3>
      <p className="group-card-description">{description}</p>
      <div className="group-card-info">
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>People:</strong> {personCount}</p>
      </div>
    </div>
  );
}

export default SuggestedGroupCard;
