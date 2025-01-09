import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

function RendevousDescBox({ group, onClose }) {
  const handleJoinGroup = async () => {
    try {
      console.log("test");
      const userResponse = await axios.get("http://localhost:3001/event/user", {withCredentials: true});
      console.log(userResponse.data);
      const response = await axios.post("http://localhost:3001/event/join", {
        eventID: group._id, // Send group ID to the backend
        userID: userResponse.data,
      });
      console.log("Successfully joined the group:", response.data);

      if(response.data == "success") {
        alert("You have successfully joined the group!");
      }

      if(response.data == "already-joined") {
        alert("You already joined this group!");
      }

    } catch (error) {
      console.error("Error joining the group:", error);
      alert("Failed to join the group. Please try again.");
    }
  };

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
          <Typography variant="p" sx={{ lineHeight: "40px" }}>
            +10 others
          </Typography>
        </Box>
        <Button
          onClick={handleJoinGroup} // Call the join group function
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

      <Box sx={{ bgcolor: "#003033", width: "1px", height: "100%" }} />

      <Box sx={{ width: "70%" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3, fontFamily: "Maven Pro" }}
        >
          {group.name} - Host Name
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "1px",
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
              {group.location}
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
              ${group.budget} / Person
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
              {group.description}
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
              {group.timeFrame?.start} - {group.timeFrame?.end}
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
          {group.tags.map((tag, index) => (
            <Box
              key={index}
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
              {tag}
            </Box>
          ))}
        </Box>

        {/* Close Button */}
        <Button
          onClick={onClose}
          sx={{
            mt: 3,
            backgroundColor: "#003E33",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "#005F4F", color: '#003E33'},
            width: "150px",
            height: "40px",
            alignSelf: "center",
            fontFamily: "Maven Pro",
            fontSize: "14px",
          }}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
}

export default RendevousDescBox;
