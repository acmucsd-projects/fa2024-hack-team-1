import { Box, Button, Checkbox, Slider, TextField, Typography} from "@mui/material"

function SurveyBox(){
    return(
        <Box sx={{
            filter: "drop-shadow(0px 0px 10px #000000)",
            bgcolor: "#FFFFFF",
            position: "absolute",
            width: '1043px',
            height: '500px',

        }}>
            <Typography varient='h1'>Location & Logistics</Typography>
        </Box>
    );
}

export default SurveyBox;