import React from 'react';
import './SuggestedGroupCard.css';

function SuggestedGroupCard({
  name,
  thumbnailLink,
  location,
  budget,
  personCount,
  description,
  timeFrame, 
}) {
  let formattedStart = null;
  let formattedEnd = null;

  if (timeFrame?.start && timeFrame?.end) {
    const startDate = new Date(timeFrame.start);
    const endDate = new Date(timeFrame.end);

    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: timeFrame.timeZone, 
    };

    formattedStart = startDate.toLocaleString('en-US', options);
    formattedEnd = endDate.toLocaleString('en-US', options);
  }

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
        {/* Display the formatted start/end times if they exist */}
        {formattedStart && formattedEnd && (
          <p><strong>Dates:</strong> {formattedStart} – {formattedEnd}</p>
        )}
      </div>
    </div>
  );
}

export default SuggestedGroupCard;
