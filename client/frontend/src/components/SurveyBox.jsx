import { Box, Typography, Button, Slider, TextField } from '@mui/material';
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

function SurveyBox({ closeSurvey }) {
    const [step, setStep] = useState(1);
    const [location, setLocation] = useState('');
    const [dateRange, setDateRange] = useState(null); 
    const [groupSize, setGroupSize] = useState(1);
    const [budget, setBudget] = useState(100); 
    const [selectedTags, setSelectedTags] = useState([]);
    const [customTag, setCustomTag] = useState('');
    const [rendezvousName, setRendezvousName] = useState('');
    const [description, setDescription] = useState('');

    const tags = [
        'Snowboarding',
        'Surfing',
        'Cuisine',
        'Hiking',
        'Photography',
        'Relaxing',
        'Shopping',
        'Sightseeing',
        'Adventure',
        'Culture',
        'Nightlife',
        'Other',
    ];

    const handleNext = () => {
        if (step === 1 && !location) {
            alert('Please enter a location!');
            return;
        }
        if (step === 3 && selectedTags.length === 0) {
            alert('Please select at least one tag!');
            return;
        }
        if (step === 4 && (!rendezvousName || !description)) {
            alert('Please provide a name and description!');
            return;
        }
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = async () => {
        const tagsArray = [...selectedTags];
        if (customTag) {
            tagsArray.push(customTag);
        }
    
        const data = {
            tags: tagsArray,
            location,
            timeFrame: {
                start: dateRange?.[0]?.toISOString(), 
                end: dateRange?.[1]?.toISOString(),  
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
            },
            budget,
            personCount: groupSize,
            rendezvousName,
            description,
        };
    
        try {
            // POST request to the backend
            const response = await axios.post('https://localhost', data);
            console.log('Survey submitted successfully:', response.data);
            closeSurvey();
        } catch (error) {
            console.error('Error submitting survey:', error);
            alert('Failed to submit the survey. Please try again.');
        }
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
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
                zIndex: 9999,
                p: '40px',
                width: '65vw',
                height: '65vh',
                overflowY: 'auto',
            }}
        >
            {/* Location Step */}
            {step === 1 && (
                < >
                    <Typography variant="h1" sx={{ mb: '25px', }}>
                        Location
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Box sx={{width: '65vw', height: '1px', bgcolor: '#003E33', mb: '42px'}}></Box>
                        <Typography variant="h3" sx={{ mb: 2,}}>
                            Type Where Your Rendevous Will Take Place:
                        </Typography>
                        <TextField
                            placeholder="Enter Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            sx={{
                                mb: 2,
                                width: '700px',
                                ".MuiInputLabel-root": {
                                    color: 'rgba(0, 62, 51, 0.4)',
                                    fontSize: '16px'
                                },
                                ".MuiOutlinedInput-root": {
                                    input:{
                                        fontFamily: 'Maven Pro',
                                        color: '#003E33',
                                        fontSize: '16px',
                                    },
                                    fieldset: {
                                        border: "1px solid rgba(0, 62, 51, 0.4)",
                                        borderRadius: "67px",
                                    },
                                    "&.Mui-focused fieldset": {
                                        border: "1px solid #003E33",
                                    }
                                }
                        }}/>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '140px', width: '100%'}}>
                            <Button variant="PillBox" onClick={closeSurvey} sx={{
                                width: '200px',
                                height: '75px',
                                fontSize: '35px'
                            }}>
                                Cancel
                            </Button>
                            <Button variant="PillBox" onClick={handleNext} sx={{
                                width: '200px',
                                height: '75px',
                                fontSize: '35px'
                            }}>
                                Next
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            {/* Logistics Step */}
            {step === 2 && (
                <>
                    <Typography variant="h1" sx={{ mb: 2, }}>
                        Logistics
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Box sx={{width: '65vw', height: '1px', bgcolor: '#003E33'}}></Box>
                        <Typography variant="h3" sx={{ mb: 2,}}>
                            Type Where Your Rendevous Will Take Place:
                        </Typography>
                        <Calendar
                            onChange={setDateRange}
                            value={dateRange}
                            selectRange={true}
                            sx={{ mb: 2 }}
                        />
                        <Typography sx={{ mt: 3, mb: 2, textAlign: 'center' }}>
                            Adjust the Range of People You Would Travel With:
                        </Typography>
                        <Slider
                            value={groupSize}
                            onChange={(e, value) => setGroupSize(value)}
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
                        <Typography sx={{ mt: 3, mb: 2, textAlign: 'center' }}>
                            Adjust Your Budget:
                        </Typography>
                        <Slider
                            value={budget}
                            onChange={(e, value) => setBudget(value)}
                            min={50}
                            max={5000}
                            step={50}
                            marks={[
                                { value: 50, label: '$50' },
                                { value: 5000, label: '$5000+' },
                            ]}
                            sx={{ mb: 2 }}
                        />
                        <Typography align="center" sx={{ fontSize: '14px', mb: 2 }}>
                            Budget is in USD
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outlined" onClick={handlePrevious}>
                                Back
                            </Button>
                            <Button variant="contained" onClick={handleNext}>
                                Next
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            {/* Plans Step */}
            {step === 3 && (
                <>
                    <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                        Plans
                    </Typography>
                    <Typography sx={{ mb: 2, textAlign: 'center' }}>
                        Select any of these tags according to what you want to do at your Rendezvous:
                    </Typography>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: 1.5,
                            mb: 2,
                        }}
                    >
                        {tags.map((tag) => (
                            <Button
                                key={tag}
                                variant={selectedTags.includes(tag) ? 'contained' : 'outlined'}
                                onClick={() =>
                                    setSelectedTags((prev) =>
                                        prev.includes(tag)
                                            ? prev.filter((t) => t !== tag)
                                            : [...prev, tag]
                                    )
                                }
                                sx={{
                                    textTransform: 'capitalize',
                                    borderRadius: '15px',
                                    backgroundColor: selectedTags.includes(tag) ? '#008E6A' : '#E0E0E0',
                                    color: selectedTags.includes(tag) ? '#FFFFFF' : '#000000',
                                    '&:hover': {
                                        backgroundColor: selectedTags.includes(tag)
                                            ? '#006F54'
                                            : '#CFCFCF',
                                    },
                                }}
                            >
                                {tag}
                            </Button>
                        ))}
                    </Box>
                    {selectedTags.includes('Other') && (
                        <TextField
                            placeholder="Enter your custom tag"
                            value={customTag}
                            onChange={(e) => setCustomTag(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" onClick={handlePrevious}>
                            Back
                        </Button>
                        <Button variant="contained" onClick={handleNext}>
                            Next
                        </Button>
                    </Box>
                </>
            )}

            {/* Description & Name Step */}
            {step === 4 && (
                <>
                    <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                        Final Details
                    </Typography>
                    <Typography sx={{ mb: 2, textAlign: 'center' }}>
                        Provide a name and description for your Rendezvous:
                    </Typography>
                    <TextField
                        placeholder="Enter Rendezvous Name"
                        value={rendezvousName}
                        onChange={(e) => setRendezvousName(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        placeholder="Enter a short description of your Rendezvous"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={4}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
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
