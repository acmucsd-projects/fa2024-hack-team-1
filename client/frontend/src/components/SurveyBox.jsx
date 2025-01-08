import { Box, Typography, Button, Slider, TextField, IconButton } from '@mui/material';
import Calendar from 'react-calendar';
import { useState, useRef } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import 'react-calendar/dist/Calendar.css';

function SurveyBox({ closeSurvey }) {
    const [step, setStep] = useState(1);
    const [location, setLocation] = useState('');
    const [dateRange, setDateRange] = useState(null); // Start and end dates
    const [groupSize, setGroupSize] = useState(1);
    const [selectedTags, setSelectedTags] = useState([]);
    const [customTag, setCustomTag] = useState('');
    const [description, setDescription] = useState(''); // For the description
    const [transportLinks, setTransportLinks] = useState(['']);
    const [stayLinks, setStayLinks] = useState(['']);
    const [rendezvousName, setRendezvousName] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [otherImages, setOtherImages] = useState([]);

    const coverImageRef = useRef(null);
    const otherImagesRef = useRef(null);

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
        if (step === 4 && !description) {
            alert('Please provide a short description!');
            return;
        }
        if (step === 6 && (!rendezvousName || !coverImage)) {
            alert('Please provide a rendezvous name and cover image!');
            return;
        }
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        console.log('Survey completed with data:', {
            location,
            dateRange,
            groupSize,
            selectedTags,
            customTag,
            description,
            transportLinks,
            stayLinks,
            rendezvousName,
            coverImage,
            otherImages,
        });
        closeSurvey();
    };

    // Handlers for transportation links
    const handleTransportLinkChange = (e, index) => {
        const updatedLinks = [...transportLinks];
        updatedLinks[index] = e.target.value;
        setTransportLinks(updatedLinks);
    };

    const handleAddTransportLink = () => {
        setTransportLinks([...transportLinks, '']);
    };

    const handleRemoveTransportLink = (index) => {
        const updatedLinks = transportLinks.filter((_, i) => i !== index);
        setTransportLinks(updatedLinks);
    };

    // Handlers for stay links
    const handleStayLinkChange = (e, index) => {
        const updatedLinks = [...stayLinks];
        updatedLinks[index] = e.target.value;
        setStayLinks(updatedLinks);
    };

    const handleAddStayLink = () => {
        setStayLinks([...stayLinks, '']);
    };

    const handleRemoveStayLink = (index) => {
        const updatedLinks = stayLinks.filter((_, i) => i !== index);
        setStayLinks(updatedLinks);
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
                width: '54vw',
                height: '80vh',
                overflowY: 'auto',
            }}
        >
            {/* Location Step */}
            {step === 1 && (
                <>
                    <Box sx={{
                        justifyContent
                    }}>
                        <Typography variant="h1" sx={{ mb: 2, textAlign: 'center' }}>
                            Location
                        </Typography>
                        <Box sx={{width: '55vw', height: '1px', bgcolor: '#003E33'}}></Box>
                        <Typography variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
                            Type Where Your Rendevous Will Take Place:
                        </Typography>
                        <TextField
                            placeholder="Enter Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outlined" onClick={closeSurvey}>
                                Cancel
                            </Button>
                            <Button variant="contained" onClick={handleNext}>
                                Next
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            {/* Logistics Step */}
            {step === 2 && (
                <>
                    <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                        Logistics
                    </Typography>
                    <Typography sx={{ mb: 2, textAlign: 'center' }}>
                        Highlight the days of your Travel:
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

            {/* Description Step */}
            {step === 4 && (
                <>
                    <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                        Description
                    </Typography>
                    <Typography sx={{ mb: 2, textAlign: 'center' }}>
                        Type out a short description of your Rendezvous for your future members to see:
                    </Typography>
                    <TextField
                        placeholder="Ex: Discover the breathtaking beauty of the Swiss Alps..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={6}
                        fullWidth
                        sx={{ mb: 2 }}
                    />
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

            {/* Transportation & Stays Step */}
            {step === 5 && (
                <>
                    <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                        Transportation & Stays
                    </Typography>
                    <Typography sx={{ mb: 2 }}>
                        Paste links to any transportation services or accommodations you plan to use:
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                        <Typography sx={{ mb: 1 }}>
                            Paste Links to any Transportation Services you Plan to Use:
                        </Typography>
                        {transportLinks.map((link, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <TextField
                                    placeholder="Paste here"
                                    value={link}
                                    onChange={(e) => handleTransportLinkChange(e, index)}
                                    fullWidth
                                    sx={{ mr: 1 }}
                                />
                                <IconButton color="error" onClick={() => handleRemoveTransportLink(index)}>
                                    <RemoveIcon />
                                </IconButton>
                            </Box>
                        ))}
                        <Button
                            startIcon={<AddIcon />}
                            variant="outlined"
                            onClick={handleAddTransportLink}
                        >
                            Add Transportation Link
                        </Button>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Typography sx={{ mb: 1 }}>
                            Paste Links to any Airbnbs or Hotels you Plan to Use:
                        </Typography>
                        {stayLinks.map((link, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <TextField
                                    placeholder="Paste here"
                                    value={link}
                                    onChange={(e) => handleStayLinkChange(e, index)}
                                    fullWidth
                                    sx={{ mr: 1 }}
                                />
                                <IconButton color="error" onClick={() => handleRemoveStayLink(index)}>
                                    <RemoveIcon />
                                </IconButton>
                            </Box>
                        ))}
                        <Button
                            startIcon={<AddIcon />}
                            variant="outlined"
                            onClick={handleAddStayLink}
                        >
                            Add Stay Link
                        </Button>
                    </Box>
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

            {/* Rendezvous Cover & Title Step */}
            {step === 6 && (
                <>
                    <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                        Almost Done!
                    </Typography>
                    <Typography sx={{ mb: 2, textAlign: 'center' }}>
                        Provide a name for your Rendezvous and upload relevant images:
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                        <Typography sx={{ mb: 1 }}>Name Your Rendezvous:</Typography>
                        <TextField
                            placeholder="Ex: A Fun Day at the Beach"
                            value={rendezvousName}
                            onChange={(e) => setRendezvousName(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                        />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Typography sx={{ mb: 1 }}>Cover Image:</Typography>
                        <Box
                            sx={{
                                height: '150px',
                                border: '2px dashed #ccc',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                mb: 3,
                            }}
                            onClick={() => coverImageRef.current.click()}
                        >
                            <Typography>+</Typography>
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                ref={coverImageRef}
                                onChange={(e) => setCoverImage(e.target.files[0])}
                            />
                        </Box>
                        <Typography sx={{ mb: 1 }}>Other Images:</Typography>
                        <Box
                            sx={{
                                height: '150px',
                                border: '2px dashed #ccc',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                            onClick={() => otherImagesRef.current.click()}
                        >
                            <Typography>+</Typography>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                style={{ display: 'none' }}
                                ref={otherImagesRef}
                                onChange={(e) => setOtherImages([...e.target.files])}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" onClick={handlePrevious}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={!rendezvousName || !coverImage} // Require name and cover image
                        >
                            Submit
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default SurveyBox;
