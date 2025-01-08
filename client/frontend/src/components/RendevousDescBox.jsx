import { Button, Box, Typography, } from '@mui/material';

function RendevousDescBox() {
    return(
        <Box sx={{
            position: 'fixed',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 50%))",
            zIndex: 9999,
            p: '30px',
            width: '1100px',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}> 
            {/*Rendevous Info*/}
            <Box>

                <Typography varient='h2 '>Rendevous Info</Typography>
                <Typography varient='h2'>People in This Rendevous</Typography>

                <img/>
                <Button sx={{
                    width: "173px",
                    height: "45px",
                    fontSize: 24
                }}>Join Group</Button>

            </Box>
            
            {/*divider*/}
            <Box sx={{
                bgcolor: "#003033",
                width: '2px',
                height: '500px'
                
            }}>

            </Box>

            {/*Rendevous Name & Others*/}
            <Box>
                <Typography varient='h1'>Rendevous Info</Typography>
            </Box>
        </Box>
    );
}

export default RendevousDescBox;