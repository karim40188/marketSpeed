import { Box, Button, Typography, Grid } from "@mui/material";
import saudiImg from "../assets/saudi.png";
import qatarImg from "../assets/qatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateGroups() {
  let [whatsApp] = useState([
    saudiImg,
    qatarImg,
    saudiImg,
    qatarImg,
    saudiImg,
    qatarImg,
    saudiImg,
  ]);
  
  let [telegram] = useState([
    saudiImg,
    qatarImg,
    saudiImg,
    qatarImg,
    saudiImg,
    qatarImg,
    saudiImg,
  ]);

  let navigate = useNavigate();

  return (
    <Box sx={{ width: "90%", mx: "auto" }}> {/* Adjust width for better responsiveness */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "24px", md: "36px" }, color: "#114F80", fontWeight: '600' }}
        >
          أرقام المجموعة الدول
        </Typography>

        <Button
          sx={{
            fontSize: "20px",
            fontFamily: "Tanseek Modern Pro Arabic",
            backgroundColor: "#114F80",
            borderRadius: "6px",
            color: "#fff",
            padding: "10px 20px",
          }}
          onClick={() => {
            navigate('/add-group');
          }}
        >
          أضف مجموعة جديدة
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid item xs={12} md={6}> {/* Change to Grid layout */}
          <Typography sx={{ textAlign: "center", mb: 1 }}>الواتساب</Typography>
          {whatsApp.map((country, index) => (
            <Box
              key={index}
              onClick={() => {
                navigate('/saudi-groups');
              }}
              sx={{
                width: "100%", 
                height: "77px",
                border: "3px solid #114F80",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                cursor: 'pointer',
                p: 1,
                mt:'15px'
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
          ))}
        </Grid>
        <Grid item xs={12} md={6}> {/* Change to Grid layout */}
          <Typography sx={{ textAlign: "center", mb: 1 }}>التليجرام</Typography>
          {telegram.map((country, index) => (
            <Box
              key={index}
              onClick={() => {
                navigate('/saudi-groups');
              }}
              sx={{
                width: "100%", 
                height: "77px",
                border: "3px solid #114F80",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                cursor: 'pointer',
                p: 1,
                 mt:'15px'
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
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateGroups;
