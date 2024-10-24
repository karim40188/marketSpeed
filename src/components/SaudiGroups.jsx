import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function SaudiGroups() {
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
    <Box sx={{width:'100%'}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            mb: "20px",
          }}
        >
          مجموعات المملكة العربية السعودية
        </Typography>

        <Button
          sx={{
            width: "163px",
            height: "32px",
            backgroundColor: "#114F80",
            color: "#fff",
            fontSize: "25px",
            fontFamily: "Tanseek Modern Pro Arabic",
          }}
        >
          أضف مجموعة جديدة
        </Button>
      </Box>

      <Box sx={{ p: "25px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ my: "30px" }}>الواتساب</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {whatsApp.map((_, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "97px",
                      height: "107px",
                      borderRadius: "8px",
                      border: "1px solid #114F80",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: "15px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Sora",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#114F80",
                      }}
                    >
                      جروب العائلة
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
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ my: "30px" }}>التليجرام</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {telegram.map((_, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      width: "97px",
                      height: "107px",
                      borderRadius: "8px",
                      border: "1px solid #114F80",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: "15px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Sora",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#114F80",
                      }}
                    >
                      جروب العائلة
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
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SaudiGroups;
