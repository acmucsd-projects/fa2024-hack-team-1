import React from 'react';
import './SuggestedGroupCard.css';

function SuggestedGroupCard({ title, hostInfo, location, pricePerPerson, nights }) {
  return (
    <div className="group-card">
      <h3>{title}</h3>
      <p>{hostInfo}</p>
      <p>{location}</p>
      <p>{pricePerPerson}</p>
      <p>{nights}</p>
    </div>
  );
}

export default SuggestedGroupCard;