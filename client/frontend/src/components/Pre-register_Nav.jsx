import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './Pre-register_Nav.css';
import { Link } from 'react-router-dom';

function IntroNavbar(){
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
            }
        }
    });


    return(
        <ThemeProvider theme={theme}>
            <div class="bar">
                <div class="logo">
                    <img src="/public/logofulltransparent.png"/>
                </div>
                <ul>
                    <Button variant="text" color="darkGreen" component={Link} to="/about">About</Button>
                    <Button variant="text" color="darkGreen" component={Link} to="/">Home</Button>
                    <Button variant="text" color="darkGreen">Sign In</Button>
                </ul>
            </div>
        </ThemeProvider>
    );
}

export default IntroNavbar;