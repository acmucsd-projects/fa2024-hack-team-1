import React from 'react';
import { Box, Typography } from '@mui/material';


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
    <Box sx={{
        minHeight: '500px',          
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        '&:hover': {
            filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 50%))",
        },
        willChange: 'filter',
        transition: 'filter .1s ease-out',
        width: 'fit-content',
        border: ' 1px solid #003E33',
        borderRadius: '15px',
        backgroundColor: '#FFFFFF',
        padding: '15px'

    }}>
        <img
        src={thumbnailLink}
        alt={`${name} Thumbnail`}
        className="group-card-thumbnail"
        style={{
            width: '100%',
            height: '150px',       
            objectFit: 'cover',
            borderRadius: '10px',
        }}
        />
        <Typography variant="h3" display='block' sx={{ mt: '10px', }}>{name}</Typography>
        <Box sx={{ width: '250px', height: '1px', bgcolor: '#003E33', mt: '15px', mb: '15px',}}></Box>
        <Typography variant="p" display='block' sx={{ fontSize: '14px',}}>{description}</Typography>
        <Box sx={{ width: '250px', height: '1px', bgcolor: '#003E33', mt: '15px', mb: '15px',}}></Box>
        <Box sx={{
            display: 'grid',
            width: '100%',
            gap: '5px'
        }}>
            <Typography variant="p" display='block' sx={{gridColumnStart: 1, fontSize: '15px' }}> <strong>{location}</strong></Typography>
            <Typography variant="p" display='block' align='right' sx={{gridColumnStart: 2, fontSize: '15px' }}> ${budget} / Person</Typography>
            <Typography variant="p" display='block' align='left' sx={{fontSize: '15px' }}> <strong>People:</strong> {personCount}</Typography>
        </Box>
            {formattedStart && formattedEnd && (
                <Typography variant="p" display='block' sx={{ margin: '10px auto', }}>{formattedStart} – {formattedEnd}</Typography>
            )}
    </Box>
  );
}

export default SuggestedGroupCard;
