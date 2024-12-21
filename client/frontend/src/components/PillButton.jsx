import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

function PillButton(){
    const theme = createTheme({
        palette: {
            darkGreen: {
                main: '#AFD450',
            },
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableRipple: true,
                    disableElevation: true, 
                    paragraph: true,
                },
                styleOverrides: {
                    root: {
                        "fontFamily": `"League Spartan" `,
                        "&:hover": {
                            "textShadow": "2px 2px 5px rgba(0, 0, 0, 0.2)",
                            "backgroundColor": "rgba(175, 212, 80, 0.75)",
                        },
                        "fontSize": "40px",
                        "textTransform": "none",
                        "borderRadius": "53px",
                        "width": "502px",
                        "height": "87px",
                        
                    }
                },
            },
        }
    });
    return(
        <ThemeProvider theme={theme}>
            <Button variant="contained" color="darkGreen">Start Here</Button>
        </ThemeProvider>
    );
}

export default PillButton;