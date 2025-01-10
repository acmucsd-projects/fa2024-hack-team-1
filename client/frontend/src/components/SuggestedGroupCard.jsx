import React from 'react';
import { Box, Typography } from '@mui/material';


function SuggestedGroupCard({
  name,
  thumbnailLink,
  location,
  budget,
  personCount,
  description,
  timeFrame
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
    <Box
      sx={{
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        '&:hover': {
          filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
        },
        willChange: 'filter',
        transition: 'filter .1s ease-out',
        width: 'fit-content',
        border: '1px solid #003E33',
        borderRadius: '15px',
        backgroundColor: '#FFFFFF',
        padding: '15px'
      }}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailLink}
        alt={`${name} Thumbnail`}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />

      {/* Name */}
      <Typography variant="h3" display="block" sx={{ mt: '10px' }}>
        {name}
      </Typography>

      {/* Divider */}
      <Box
        sx={{
          width: '250px',
          height: '1px',
          bgcolor: '#003E33',
          mt: '15px',
          mb: '15px',
        }}
      />

      {/* Description */}
      <Typography variant="p" display="block" sx={{ fontSize: '14px' }}>
        {description}
      </Typography>

      {/* Divider */}
      <Box
        sx={{
          width: '250px',
          height: '1px',
          bgcolor: '#003E33',
          mt: '15px',
          mb: '15px',
        }}
      />

      {/* Location / People / Budget in 3 rows, center-aligned */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto auto auto',
          gap: '5px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Top row: Location */}
        <Typography variant="p" display="block" sx={{ fontSize: '15px' }}>
          <strong>{location}</strong>
        </Typography>

        {/* Middle row: People */}
        <Typography variant="p" display="block" sx={{ fontSize: '15px' }}>
          <strong>People:</strong> {personCount}
        </Typography>

        {/* Bottom row: Budget */}
        <Typography variant="p" display="block" sx={{ fontSize: '15px' }}>
          <strong>${budget} </strong>/ Person
        </Typography>
      </Box>

      {/* Dates */}
      {formattedStart && formattedEnd && (
        <Typography
          variant="p"
          display="block"
          sx={{ margin: '10px auto' }}
        >
          {formattedStart} – {formattedEnd}
        </Typography>
      )}
    </Box>
  );
}

export default SuggestedGroupCard;
