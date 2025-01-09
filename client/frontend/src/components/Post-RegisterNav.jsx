import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Box, List, TextField, } from '@mui/material';
import { Link } from 'react-router-dom';

function PostRegisterNav(){
    const theme = createTheme({
        palette: {
            darkGreen: {
                main: '#003E33',
            },
        },
        typography: {
            button: {
                textTransform: 'none',
            }
        },
        components:{
            MuiButton: {
                defaultProps: {
                    disableRipple: true,
                    disableElevation: true,  
                },
                styleOverrides: {
                    root: {
                        "fontFamily": `"League Spartan" `,
                        "&:hover": {
                            "textShadow": "2px 2px 5px rgba(0, 0, 0, 0.2)",
                            "backgroundColor": "rgba(0, 0, 0, 0)",
                        },
                        "fontSize": "20px"
                    }
                },
            },
        },
    });


    return(
        <ThemeProvider theme={theme}>
            <Box sx={{
                height: "73px",
                backgroundColor: "#FFFFFF",
                boxShadow: '2px 2px 10px rgba(0, 0, 0 , 0.5)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}> 
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        ml: '40px',
                        mr: '20px',
                    }}>
                        <img src="/public/logofulltransparent.png"/>
                    </Box>
    
                    <Box sx={{
                        bgcolor: '#003E33',
                        width: '1.5px',
                        height: '55px',
                        mr: '20px'
                    }}>
    
                    </Box>
                    
                    <List sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Button variant="text" color="darkGreen" component={Link} to="/home" sx={{mr: '20px', }}>Home</Button>
                        <Button variant="text" color="darkGreen" component={Link} to="/group">Groups</Button>
                    </List>

                </Box>
                <TextField label="Search: Groups" varient="outlined" style={{width: '544px',}} sx={{
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

                <Box sx={{
                    width: "322.75px",
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                }}>
                    <Button color="darkGreen" sx={{
                        mr: '40px',
                        "&:hover": {
                            "textShadow": "2px 2px 5px rgba(0, 0, 0, 0.2)",
                            "backgroundColor": "rgba(0, 0, 0, 0)",
                            color: '#A92730'
                        },
                    }}>Log Out</Button>
                </Box>

            </Box>
        </ThemeProvider>
    );
}

export default PostRegisterNav;