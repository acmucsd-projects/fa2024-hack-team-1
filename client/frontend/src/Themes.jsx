import { createTheme, keyframes} from '@mui/material/styles';


const pillBoxHoverEffect = keyframes`
    from {
        background-color: #AFD450;
    }
    to {
        background-color: rgba(0, 0, 0, 0);
        border: 3px solid #003E33;
    }
`;


const CustomTheme = createTheme({
    typography: {
        
        h1: {
            fontFamily: 'League Spartan',
            fontSize: '40px',
            color: '#003E33'
        },

        h2: {
            fontFamily: 'League Spartan',
            fontSize: '30px',
            color: '#003E33'
        },

        h3: {
            fontFamily: 'League Spartan',
            fontSize: '24px',
            color: '#003E33'
        },

        h4: {
            fontFamily: 'League Spartan',
            fontSize: '20px',
            color: '#003E33'
        },

        p: {
            fontFamily: 'Maven Pro',
            fontSize: '16px',
            color: '#003E33'
        },

        hero: {
            fontFamily: 'League Spartan',
            fontSize: '100px',
        },
        
        
    },
    components: {
        MuiButton: {
            variants: [
                {
                    prop: { varient: 'PillBox'},
                    style: {
                        "fontFamily": `"League Spartan" `,
                        "&:hover": {
                            animation: `${pillBoxHoverEffect} 325ms both`,
                        },

                        "borderRadius": "53px",
                        "textTransform": "none",
                        "width": "502px",
                        "height": "87px",

                        "color": '#003E33',
                        "fontSize": "40px",
                        "fontWeight": 425,
                        "backgroundColor": '#AFD450',
                    },
                },

            ]
        },
        MuiTypography: {
            varients: [
                {
                    prop: {varient: 'h2'},
                    style: {
                        fontFamily: 'League Spartan',
                        fontSize: '30px',
                        color: '#003E33'
                    }
                }
            ]
        }
    },
});

export { CustomTheme };