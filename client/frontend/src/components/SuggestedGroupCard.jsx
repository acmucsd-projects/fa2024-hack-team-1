import React from 'react';
import './SuggestedGroupCard.css';
import { Typography, Box, } from '@mui/material';

function SuggestedGroupCard({ name, thumbnailLink, location, budget, personCount, description }) {
    return (
        <Box className="group-card">
            <img
            src={thumbnailLink}
            alt={`${name} Thumbnail`}
            className="group-card-thumbnail"
            />
            <Typography variant="h3" display='block' sx={{ mt: '10px', }}>{name}</Typography>
            <Box sx={{ width: '250px', height: '1px', bgcolor: '#003E33', mt: '10px', mb: '10px'}}></Box>
            <Typography variant="p" display='block' sx={{}}>{description}</Typography>
            <Box sx={{

            }}>
                <Typography variant="p" display='block' sx={{ margin: '5px 0', }}> <strong>Location: </strong> {location}</Typography>
                <Typography variant="p" display='block' sx={{ margin: '5px 0', }}> <strong>Budget:</strong> ${budget}</Typography>
                <Typography variant="p" display='block' sx={{ margin: '5px 0', }}> <strong>People:</strong> {personCount}</Typography>
            </Box>
        </Box>
    );
}

export default SuggestedGroupCard;
