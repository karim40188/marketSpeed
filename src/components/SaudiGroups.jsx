import { Box, Button, Typography , Grid2} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SaudiGroups() {
  let navigate = useNavigate();
  let [whatsApp] = useState([
    "جروب العائله",
    "جروب صحتي",
    "جروب نكت",
    "جروب بوبجى",
    "جروب فرى فاير",
    "جروب سيارات",
    "جروب العائله",
    "جروب صحتي",
    "جروب نكت",
    "جروب بوبجى",
    "جروب فرى فاير",
    "جروب سيارات",
    "جروب العائله",
    "جروب صحتي",
    "جروب نكت",
    "جروب بوبجى",
    "جروب فرى فاير",
    "جروب سيارات",
  ]);
  let [telegram] = useState([
    "جروب العائله",
    "جروب صحتي",
    "جروب نكت",
    "جروب بوبجى",
    "جروب فرى فاير",
    "جروب سيارات",
    "جروب العائله",
    "جروب صحتي",
    "جروب نكت",
    "جروب بوبجى",
    "جروب فرى فاير",
    "جروب سيارات",
    "جروب العائله",
    "جروب صحتي",
    "جروب نكت",
    "جروب بوبجى",
    "جروب فرى فاير",
    "جروب سيارات",
  ]);

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap:'wrap',
          mb: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: '600',
          }}
        >
          مجموعات المملكة العربية السعودية
        </Typography>

        <Button
          sx={{
            width: {xs:'100%',md:"163px"},
            height: "32px",
            backgroundColor: "#114F80",
            color: "#fff",
            fontSize: "25px",
            fontFamily: "Tanseek Modern Pro Arabic",
            mt:{xs:'10px',md:''}
          }}
        >
          أضف مجموعة جديدة
        </Button>
      </Box>

      <Grid2 container spacing={2}>
        <Grid2 size={{xs:12 ,md:5}}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography sx={{ my: "30px", fontWeight: '600' }}>الواتساب</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {whatsApp.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "90%", sm: "97px" },
                    height: "107px",
                    borderRadius: "8px",
                    border: "1px solid #114F80",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/all-numbers");
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#114F80",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                  <Button
                    sx={{
                      width: "70px",
                      height: "18px",
                      borderRadius: "5px",
                      backgroundColor: "#CC0000",
                      color: "#fff",
                      fontFamily: "Inter",
                    }}
                  >
                    حذف
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{xs:12 ,md:5}}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography sx={{ my: "30px", fontWeight: '600' }}>التليجرام</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {telegram.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { xs: "90%", sm: "97px" },
                    height: "107px",
                    borderRadius: "8px",
                    border: "1px solid #114F80",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/all-numbers");
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "#114F80",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Typography>
                  <Button
                    sx={{
                      width: "70px",
                      height: "18px",
                      borderRadius: "5px",
                      backgroundColor: "#CC0000",
                      color: "#fff",
                      fontFamily: "Inter",
                    }}
                  >
                    حذف
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default SaudiGroups;
