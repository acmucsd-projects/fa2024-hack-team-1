import { Box, Typography, Button } from "@mui/material";

function RendevousDescBox() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
        p: "30px",
        width: "1100px",
        height: "500px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "20px",
        fontFamily: "Maven Pro",
        color: "#003E33",
      }}
    >
      {/* Rendezvous Info Section */}
      <Box sx={{ width: "25%", textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2, fontFamily: "Maven Pro" }}
        >
          Rendezvous Info
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontFamily: "Maven Pro" }}>
          Rendezvous Members
        </Typography>
        {/* Profile Picture Placeholders */}
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: "10px", mb: 2 }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#AEE5D8",
            }}
          />
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#DFF3EB",
            }}
          />
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#F2F2F2",
            }}
          />
          <Typography variant="body2" sx={{ lineHeight: "40px" }}>
            +10 others
          </Typography>
        </Box>
        <Button
          sx={{
            backgroundColor: "#AFD450",
            color: "#003E33",
            fontWeight: "normal",
            width: "173px",
            height: "45px",
            fontSize: "16px",
            fontFamily: "Maven Pro",
            mt: 2,
            "&:hover": {
              backgroundColor: "#92BE54",
            },
          }}
        >
          Join Group
        </Button>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          bgcolor: "#003033",
          width: "2px",
          height: "100%",
        }}
      />

      {/* Event Details Section */}
      <Box sx={{ width: "70%" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3, fontFamily: "Maven Pro" }}
        >
          Event Name - Host Name
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#003033",
            mb: 3,
          }}
        />

        {/* Details Section */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", mb: 1, fontFamily: "Maven Pro" }}
            >
              Location:
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontFamily: "Maven Pro" }}>
              Example Location
            </Typography>
          </Box>
          <Box sx={{ width: "50%", textAlign: "right" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", mb: 1, fontFamily: "Maven Pro" }}
            >
              Pricing:
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontFamily: "Maven Pro" }}>
              000$ / Person
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", mb: 1, fontFamily: "Maven Pro" }}
            >
              Description:
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontFamily: "Maven Pro" }}>
              Example Event Description
            </Typography>
          </Box>
          <Box sx={{ width: "50%", textAlign: "right" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", mb: 1, fontFamily: "Maven Pro" }}
            >
              Duration:
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontFamily: "Maven Pro" }}>
              Month XX - Month XX
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", mt: 3, fontFamily: "Maven Pro" }}
        >
          Tags:
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
          <Box
            sx={{
              px: 2,
              py: 1,
              backgroundColor: "#AEE5D8",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: "Maven Pro",
              color: "#003E33",
              textAlign: "center",
            }}
          >
            Tag 1
          </Box>
          <Box
            sx={{
              px: 2,
              py: 1,
              backgroundColor: "#DFF3EB",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: "Maven Pro",
              color: "#003E33",
              textAlign: "center",
            }}
          >
            Tag 2
          </Box>
          <Box
            sx={{
              px: 2,
              py: 1,
              backgroundColor: "#F2F2F2",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              fontFamily: "Maven Pro",
              color: "#003E33",
              textAlign: "center",
            }}
          >
            Tag 3
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RendevousDescBox;
