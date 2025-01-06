import Nav from '../components/Pre-register_Nav'
import { Button, Typography, Container, Box, } from '@mui/material';
function PathSelection() {  
    return(
        <Box>
            <Nav/>
            <Container sx={{
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:'center',
                mt: '50px',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems:'center'
                }}> 
                    <Typography variant='hero' sx={{
                                background: '-webkit-linear-gradient(0deg, #003E33, #005873, #008E6A, #AFD450)',
                                WebkitBackgroundClip: 'text',  
                                WebkitTextFillColor: 'transparent',
                                width: 'fit-content',
                    }}>Looking For People to Travel With?</Typography>     
                    <Typography variant='p' sx={{fontSize:'25px', textAlign: 'center', mt: '55px', mb: '55px', width: '450px'}}>Meet new people with a rendezvous to any destination! </Typography>
                    <Button varient="PillBox">Find Your Rendezvous</Button>
                </Box>
                <img src='\ErrorPic.png' style={{width: '450px', marginLeft: '100px'}}></img>
            </Container>
        </Box>
    );
}

export default PathSelection;