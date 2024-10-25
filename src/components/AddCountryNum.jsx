import { Box, Button, Typography } from "@mui/material";
import saudiImg from "../assets/saudi.png";
import qatarImg from "../assets/qatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddCountryNum() {
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

  let navigate= useNavigate()

  return (
    <Box sx={{ width: "80%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
        >
       أضف دولة فى مجموعة أرقام الدول
        </Typography>

        <Button
          sx={{
            fontSize: "25px",
            fontFamily: "Tanseek Modern Pro Arabic",
            width: "auto",
            height: "32px",
            backgroundColor: "#114F80",
            borderRadius: "6px",
            color: "#fff",
            px: "30px",
            py: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={()=>{
            navigate('/add-group')
          }}
        >

          أضف مجموعة جديدة
        </Button>
      </Box>
      <Box
        sx={{
          p: "20px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography sx={{ textAlign: "center" }}>الواتساب</Typography>

          {whatsApp.map((country) => {
            return (
              <Box
              onClick={()=>{
                navigate('/saudi-groups')
              }}
                key={country}
                sx={{
                  width: "336px",
                  height: "77px",
                  my: "10px",
                  border: "3px solid #114F80",
                  borderRadius: "15px",
                  py: "5px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "center",
                   cursor:'pointer'
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
            );
          })}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography sx={{ textAlign: "center" }}>التليجرام</Typography>

          {telegram.map((country) => {
            return (
              <Box
              onClick={()=>{
                navigate('/saudi-groups')
              }}
                key={country}
                sx={{
                  width: "336px",
                  height: "77px",
                  my: "10px",
                  border: "3px solid #114F80",
                  borderRadius: "15px",
                  py: "5px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  justifyContent: "center",
                  cursor:'pointer'
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
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default AddCountryNum;
