import { Box, Typography, Button, Slider } from '@mui/material';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

function SurveyBox({ closeSurvey }) {
    const [step, setStep] = useState(1);
    const [location, setLocation] = useState('');
    const [dateRange, setDateRange] = useState(null); // Start and end dates
    const [groupSize, setGroupSize] = useState(1);

    const handleLocationChange = (e) => setLocation(e.target.value);

    const handleNext = () => {
        if (step === 1 && !location) {
            alert('Please enter a location!');
            return;
        }
        setStep(step + 1);
    };

    const handlePrevious = () => setStep(step - 1);

    const handleGroupSizeChange = (e, value) => setGroupSize(value);

    const handleSubmit = () => {
        console.log('Survey completed with data:', { location, dateRange, groupSize });
        closeSurvey();
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                zIndex: 9999,
                p: '30px',
                width: '400px',
            }}
        >
            {step === 1 && (
                <>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Location
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        Click where your rendezvous will take place or enter the location below.
                    </Typography>
                    <input
                        type="text"
                        placeholder="Enter Location"
                        value={location}
                        onChange={handleLocationChange}
                        style={{
                            width: '100%',
                            padding: '10px',
                            marginBottom: '20px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" onClick={closeSurvey}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleNext}>
                            Next
                        </Button>
                    </Box>
                </>
            )}
            {step === 2 && (
                <>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Logistics
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        Highlight the days of your Travel:
                    </Typography>
                    <Calendar
                        onChange={setDateRange} // Sets the selected range
                        value={dateRange}
                        selectRange={true} // Enables range selection
                        tileClassName={({ date, view }) => {
                            // Add class to highlighted dates in the range
                            if (
                                dateRange &&
                                date >= dateRange[0] &&
                                date <= dateRange[1]
                            ) {
                                return 'highlight';
                            }
                            return null;
                        }}
                        sx={{ mb: 2 }}
                    />
                    <Typography sx={{ mt: 3, mb: 2 }}>
                        Adjust the Range of People You Would Travel With:
                    </Typography>
                    <Slider
                        value={groupSize}
                        onChange={handleGroupSizeChange}
                        min={1}
                        max={20}
                        marks={[
                            { value: 1, label: '1' },
                            { value: 20, label: '20+' },
                        ]}
                        sx={{ mb: 2 }}
                    />
                    <Typography align="center" sx={{ fontSize: '14px', mb: 2 }}>
                        (Not Including Yourself)
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" onClick={handlePrevious}>
                            Back
                        </Button>
                        <Button variant="contained" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default SurveyBox;
