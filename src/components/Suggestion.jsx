import { Box,Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Suggestion() {
  let navigate = useNavigate();
  let [tech] = useState([
    { name: "احمد على" },
    { name: "احمد على" },
    { name: "احمد على" },
    { name: "احمد على" },
    { name: "احمد على" },
    { name: "احمد على" },
  ]);

  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80",fontWeight:'600' }}
      >
        الأقترحات
      </Typography>
      <Box
        sx={{
          p: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {tech.map((tech, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "805px",
                height: "auto",
                p: "20px",
                backgroundColor: "#D9D9D9",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/suggestion-session");
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box sx={{ width: "66px", height: "66px" }}>
                  <Box
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    src={profile_img}
                  />
                </Box>
                <Typography sx={{ fontSize: "40px" }}>احمد على </Typography>
              </Box>

              <Typography
                sx={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "#114F80",
                  borderRadius: "5px",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "40px",
                }}
              >
                15
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Suggestion;
