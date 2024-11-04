import { Box, Button, Typography } from "@mui/material";
// import saudiImg from "../assets/saudi.png";
// import qatarImg from "../assets/qatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function WhatsAppGroups() {
  let [whatsApp] = useState([
    { name: "السعوديه", path: "/saudi" },
    { name: "قطر", path: "/qatar" },
    { name: "مصر", path: "/egypt" },
    { name: "البحرين", path: "/bahrian" },
    { name: "تركيا", path: "/turkey" },
    { name: "عمان", path: "/oman" },
    { name: "اليمن", path: "/yemen" },
  ]);

  // saudiImg,
  // qatarImg,
  // saudiImg,
  // qatarImg,
  // qatarImg,
  // qatarImg,
  // qatarImg,
  // qatarImg,
  // saudiImg,

  let navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "",
          flexDirection:'column',
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "36px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
           مجموعات الواتساب
        </Typography>

 

      </Box>

      {/* WhatsApp Section */}
      <Box
        sx={{
          width: "100%",
          mb: { xs: 2, md: 0 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ textAlign: "center", mb: 1 }}>الواتساب</Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "90%",
            mx: "auto",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {/* {whatsApp.map((country, index) => (
            <Box
              key={index}
              onClick={() => {
                navigate("/saudi-groups");
              }}
              sx={{
                width: { xs: "100%", md: "336px" },
                height: "77px",
                border: "3px solid #114F80",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                cursor: "pointer",
                p: 1,
                mt: "15px",
              }}
            >
              <Box sx={{ width: "83.06px", height: "44.46px" }}>
                <Box
                  component="img"
                  src={country}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#114F80",
                    fontWeight: "700",
                    fontFamily: "inter",
                  }}
                >
                  مجموعات المملكة العربية السعودية
                </Typography>
                <Typography>1026 مجموعة</Typography>
              </Box>
            </Box>
          ))} */}

          {whatsApp.map((whatsApp) => {
            return (
              <Box
                key={whatsApp.name}
                sx={{
                  width: "300px",
                  height: "50px",
                  p: "10px",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/groups${whatsApp.path}`);
                }}
              >
                <Typography>{whatsApp.name}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default WhatsAppGroups;
