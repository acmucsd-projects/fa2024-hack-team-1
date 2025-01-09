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
    const [coverImage, setCoverImage] = useState(null); // State for cover image

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
        if (step === 4 && (!rendezvousName || !description || !coverImage)) {
            alert('Please provide a name, description, and cover image!');
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

        // FormData for file upload
        const formData = new FormData();
        formData.append('tags', JSON.stringify(tagsArray));
        formData.append('location', location);
        formData.append('timeFrame[start]', dateRange?.[0]?.toISOString());
        formData.append('timeFrame[end]', dateRange?.[1]?.toISOString());
        formData.append('timeFrame[timeZone]', Intl.DateTimeFormat().resolvedOptions().timeZone);
        formData.append('budget', budget);
        formData.append('personCount', groupSize);
        formData.append('name', rendezvousName);
        formData.append('description', description);
        if (coverImage) {
            formData.append('coverImage', coverImage); // Append the cover image file
        }

        try {
            const response = await axios.post('http://localhost:3001/event/create', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
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
            {/* Step 1: Location */}
            {step === 1 && (
                <>
                    <Typography variant="h1" sx={{ mb: '25px' }}>
                        Location
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Box sx={{ width: '65vw', height: '1px', bgcolor: '#003E33', mb: '42px' }}></Box>
                        <Typography variant="h3" sx={{ mb: 2 }}>
                            Type Where Your Rendezvous Will Take Place:
                        </Typography>
                        <TextField
                            placeholder="Enter Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            sx={{
                                mb: 2,
                                width: '700px',
                                ".MuiOutlinedInput-root": {
                                    input: {
                                        fontFamily: 'Maven Pro',
                                        color: '#003E33',
                                        fontSize: '16px',
                                    },
                                    fieldset: {
                                        border: '1px solid rgba(0, 62, 51, 0.4)',
                                        borderRadius: '67px',
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: '1px solid #003E33',
                                    },
                                },
                            }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '140px', width: '100%' }}>
                            <Button
                                variant="PillBox"
                                onClick={closeSurvey}
                                sx={{ width: '200px', height: '75px', fontSize: '35px' }}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="PillBox"
                                onClick={handleNext}
                                sx={{ width: '200px', height: '75px', fontSize: '35px' }}
                            >
                                Next
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            {/* Step 2: Logistics */}
            {step === 2 && (
                <>
                    <Typography variant="h1" sx={{ mb: 2 }}>
                        Logistics
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <Box sx={{ width: '65vw', height: '1px', bgcolor: '#003E33', mb: '42px' }}></Box>
                        <Typography variant="h3" sx={{ mb: 2 }}>
                            Highlight the Days Your Rendezvous Will Take Place
                        </Typography>
                        <Calendar onChange={setDateRange} value={dateRange} selectRange={true} />
                        <Typography variant="h3" sx={{ mt: 3 }}>
                            Adjust the Range of People You Would Travel With:
                        </Typography>
                        <Typography variant="p" align="center" sx={{ mb: 2 }}>
                            (Not Including Yourself)
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
                            valueLabelDisplay="on"
                            sx={{
                                mb: 2,
                                color: '#005873',
                                '& .MuiSlider-markLabel': {
                                    color: '#003E33',
                                    fontFamily: 'Maven Pro',
                                    fontSize: '16px',
                                },
                            }}
                        />
                        <Typography variant="h3" sx={{ mt: 3 }}>
                            Adjust Your Budget:
                        </Typography>
                        
                        <Typography variant="p" sx={{ mb: 2,}}>
                            (Budget is in USD)
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
                            valueLabelDisplay="on"
                            sx={{
                                mb: 2,
                                color: '#005873',
                                '& .MuiSlider-markLabel': {
                                    color: '#003E33',
                                    fontFamily: 'Maven Pro',
                                    fontSize: '16px',
                                },
                            }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '140px', width: '100%' }}>
                            <Button
                                variant="PillBox"
                                onClick={handlePrevious}
                                sx={{ width: '200px', height: '75px', fontSize: '35px' }}
                            >
                                Back
                            </Button>
                            <Button
                                variant="PillBox"
                                onClick={handleNext}
                                sx={{ width: '200px', height: '75px', fontSize: '35px' }}
                            >
                                Next
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            {/* Step 3: Plans */}
            {step === 3 && (
                <>
                    <Typography variant="h1" sx={{mb: 2}}>
                        Plans
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <Box sx={{width: '65vw', height: '1px', bgcolor: '#003E33', mb: '42px'}}></Box>
                        <Typography variant="h3" sx={{mt: 3, mb: 2}}>
                            Select Any of These Tags According to What You Plan to do at Your Rendezvous:
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
                                        border: '1px solid #003E33',
                                        borderRadius: '15px',
                                        backgroundColor: selectedTags.includes(tag) ? '#AFD450' : '#F5F5F5',
                                        color: selectedTags.includes(tag) ? '#005873' : '#003E33',
                                        fontFamily: 'Maven Pro',
                                        fontSize: '20px',
                                        '&:hover': {
                                            backgroundColor: selectedTags.includes(tag)
                                                ? '#006F54'
                                                : '#CFCFCF',
                                        },
                                        width: '255px',
                                        height: '44px'

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
                                sx={{ 
                                    mb: 2,
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
                                            borderRadius: "13px",
                                        },
                                        "&.Mui-focused fieldset": {
                                            border: "1px solid #003E33",
                                        }
                                    }
                                }}
                            />
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                            <Button variant="PillBox" onClick={handlePrevious}sx={{
                                width: '200px',
                                height: '75px',
                                fontSize: '35px'
                            }}>
                                Back
                            </Button>
                            <Button variant="PillBox" onClick={handleNext}sx={{
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

            {/* Step 4: Final Details */}
            {step === 4 && (
                <>
                    <Typography variant="h1" sx={{ mb: 2, }}>
                        Final Details
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            sx={{
                                width: '65vw',
                                height: '1px',
                                bgcolor: '#003E33',
                                mb: '42px',
                            }}
                        ></Box>
                        <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
                            Provide a name, description, and upload a cover image for your Rendezvous:
                        </Typography>

                        {/* Rendezvous Name */}
                        <TextField
                            placeholder="Enter Rendezvous Name"
                            value={rendezvousName}
                            onChange={(e) => setRendezvousName(e.target.value)}
                            fullWidth
                            sx={{
                                mb: 2,
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
                                        borderRadius: "13px",
                                    },
                                    "&.Mui-focused fieldset": {
                                        border: "1px solid #003E33",
                                    }
                                }
                            }}
                        />

                        {/* Rendezvous Description */}
                        <TextField
                            placeholder="Enter a short description of your Rendezvous"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={4}
                            fullWidth
                            sx={{ 
                                mb: '42px',
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
                                        borderRadius: "17px",
                                    },
                                    "&.Mui-focused fieldset": {
                                        border: "1px solid #003E33",
                                    }
                                }
                            }}
                        />

                        {/* Cover Image Upload */}
                        <Box sx={{ mb: 3, width: '100%' }}>
    <Typography variant="h3" sx={{ mb: 1 }}>
        Upload Cover Image:
    </Typography>
    <Box
        sx={{
            width: '100%',
            height: '150px',
            border: '2px dashed rgba(0, 62, 51, 0.4)',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: coverImage ? '#E8F5E9' : 'transparent', // Change background when an image is uploaded
            cursor: 'pointer', // Indicate clickable area
        }}
        onClick={() => document.getElementById('coverImageInput').click()} // Trigger file input on click
    >
        {coverImage ? (
            <img
                src={URL.createObjectURL(coverImage)}
                alt="Cover Preview"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        ) : (
            <Typography
                sx={{
                    color: '#003E33',
                    fontSize: '16px',
                    textTransform: 'none',
                }}
            >
                Click to Upload Cover Image
            </Typography>
        )}
        <input
            type="file"
            accept="image/*"
            hidden
            id="coverImageInput"
            onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                    setCoverImage(file); // Save the file to state
                }
            }}
        />
    </Box>
</Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: '40px',
                                width: '100%',
                            }}
                        >
                            <Button
                                variant="PillBox"
                                onClick={handlePrevious}
                                sx={{
                                    width: '200px',
                                    height: '75px',
                                    fontSize: '35px',
                                }}
                            >
                                Back
                            </Button>
                            <Button
                                variant="PillBox"
                                onClick={handleSubmit}
                                sx={{
                                    width: '200px',
                                    height: '75px',
                                    fontSize: '35px',
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default SurveyBox;
