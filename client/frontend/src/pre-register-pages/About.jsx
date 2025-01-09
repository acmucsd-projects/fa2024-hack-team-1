import Nav from '../components/Pre-register_Nav'
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Box, } from '@mui/material';

const clientId = "33046251875-uf9scct13bscplhflgv347niur4ig11r.apps.googleusercontent.com";



function About() {  
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
                    <Box sx={{display:'flex', flexDirection: 'row'}}>

                        <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography variant='hero' sx={{
                                background: '-webkit-linear-gradient(0deg, #004049, #005B72)',
                                WebkitBackgroundClip: 'text',  
                                WebkitTextFillColor: 'transparent',
                            }}>ren</Typography>
                            <Typography variant='h1' sx={{fontSize:'50px', fontWeight:350, color:'#014048', lineHeight: 0.3,}}>rän</Typography>
                        </Box>

                        <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography variant='hero' sx={{
                                background: '-webkit-linear-gradient(0deg, #016072, #016271)',
                                WebkitBackgroundClip: 'text',  
                                WebkitTextFillColor: 'transparent',
                            }}>·</Typography>
                            <Typography variant='h1' sx={{fontSize:'50px', fontWeight:350, color:'#016172', lineHeight: 0.3,}}>-</Typography>
                        </Box>

                        <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography variant='hero' sx={{
                                background: '-webkit-linear-gradient(0deg, #006770, #01876C)',
                                WebkitBackgroundClip: 'text',  
                                WebkitTextFillColor: 'transparent',
                            }}>dez</Typography>
                            <Typography variant='h1' sx={{fontSize:'50px', fontWeight:350, color:'#01716F', lineHeight: 0.3,}}>də</Typography>
                        </Box>

                        <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography variant='hero' sx={{
                                background: '-webkit-linear-gradient(0deg, #018A6A, #018D6A)',
                                WebkitBackgroundClip: 'text',  
                                WebkitTextFillColor: 'transparent',
                            }}>·</Typography>
                            <Typography variant='h1' sx={{fontSize:'50px', fontWeight:350, color:'#01846C', lineHeight: 0.3,}}>-</Typography>
                        </Box>

                        <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography variant='hero' sx={{
                                background: '-webkit-linear-gradient(0deg, #109468, #A5D052)',
                                WebkitBackgroundClip: 'text',  
                                WebkitTextFillColor: 'transparent',
                            }}>view</Typography>
                            <Typography variant='h1' sx={{fontSize:'50px', fontWeight:350, color:'#52B076', lineHeight: 0.3,}}>vyoo</Typography>
                        </Box>

                    </Box>
                    <Typography variant='h1' sx={{
                                background: '-webkit-linear-gradient(0deg, #003E33, #005873, #008E6A, #AFD450)',
                                WebkitBackgroundClip: 'text',  
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 400,
                                mt: '35px',
                                width: 'fit-content',
                    }}>Travel, Meet, and Experience</Typography>                        
                    <Typography variant='p' sx={{fontSize:'25px', textAlign: 'center', mt: '55px', mb: '55px', width: '450px'}}>Looking for travel buddies? Planning a trip? Or just wanting to meet new people? We can help! Rendezview helps you find people traveling to the same place. 
                    </Typography>
                    <Button varient="PillBox"

                            clientId={clientId}
                            
                    >Get Started</Button>
                </Box>
                <Box sx={{
                    marginLeft: '100px', 
                    borderRadius: '31px'
                }}>
                    <img src='\oxana-v-qoAIlAmLJBU-unsplash.jpg' style={{
                        width: '450px',
                        boxShadow: 'inset 0 0 10px #000000',
                        borderRadius: '31px'
                    }}/>
                </Box>
            </Container>
        </Box>
    );
}

export default About;