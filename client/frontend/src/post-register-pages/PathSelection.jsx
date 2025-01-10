import { Button, Typography, Container, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PostRegisterNav from "../components/Post-RegisterNav";
import SurveyBox from "../components/SurveyBox";

function PathSelection() {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleSurvey = () => {
    setShowSurvey(!showSurvey);
  };

  const closeSurvey = () => {
    setShowSurvey(false);
  };

  return (
    <Box>
      <PostRegisterNav />
      {showSurvey && <SurveyBox closeSurvey={closeSurvey} />}
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          mt: "50px",
        }}
      >
        <Box
          className="right"
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "30px",
            ":hover": {
              filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 50%))",
            },
            ":hover ~ .left": {
              filter: "blur(10px)",
            },
            ":has(~ .left:hover)": {
              filter: "blur(10px)",
            },
            willChange: "filter",
            transition: "filter .1s ease-out",
            width: "fit-content",
            p: "20px",
            mr: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <Typography
              variant="hero"
              sx={{
                fontSize: "90px",
                background:
                  "-webkit-linear-gradient(0deg, #003E33, #005873, #008E6A, #AFD450)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: "fit-content",
              }}
            >
              Looking For People to Travel With?
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "25px",
                textAlign: "center",
                mt: "55px",
                mb: "55px",
                width: "450px",
              }}
            >
              Meet new people with a rendezvous to any destination!
            </Typography>
            <Button varient="PillBox" component={Link} to="/group">
              Find Your Rendezvous
            </Button>
          </Box>
        </Box>

        <Box
          className="left"
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "30px",
            ":hover": {
              filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 50%) )",
            },
            willChange: "filter",
            transition: "filter .1s ease-out",
            width: "fit-content",
            p: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
            }}
          >
            <Typography
              variant="hero"
              sx={{
                fontSize: "90px",
                background:
                  "-webkit-linear-gradient(180deg, #003E33, #005873, #008E6A, #AFD450)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                width: "fit-content",
                textAlign: "right",
              }}
            >
              Looking to Plan a New Adventure?
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "25px",
                textAlign: "center",
                mt: "55px",
                mb: "55px",
                width: "450px",
              }}
            >
              Plan, guide, and host a brand new rendezvous for people to join!
            </Typography>
            <Button varient="PillBox" onClick={handleSurvey}>
              Plan Your Rendezvous
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default PathSelection;
