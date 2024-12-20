import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './IntroNavbar.css';

function IntroNavbar(){
    const theme = createTheme({
        palette: {
            darkGreen: {
                main: '#003E33',
            },
        },
        components:{
            MuiButton: {
                defaultProps: {
                    disableRipple: true,
                    
                },
                styleOverrides: {
                    root: {
                        "fontFamily": `"League Spartan", `,
                        "&:hover": {
                            "textShadow": "2px 2px 5px rgba(0, 0, 0, 0.2)",
                            "backgroundColor": "rgba(0, 0, 0, 0)",
                        },
                    }
                },
            }
        }
    });


    return(
        <ThemeProvider theme={theme}>
            <div class="bar">
                <div class="logo">
                    <pre>
                        rendez
                        view
                    </pre>
                </div>
                <ul>
                    <Button variant="text" color="darkGreen">About</Button>
                    <Button variant="text" color="darkGreen">Sign In</Button>
                </ul>
            </div>
        </ThemeProvider>
    );
}

export default IntroNavbar;