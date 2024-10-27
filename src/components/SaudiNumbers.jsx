import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SaudiNumbers() {


  let navigate= useNavigate()
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" ,fontWeight:'600'}}
      >
        جميع الأرقام مجموعات المملكة العربية السعودية
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "end",
          width: "90%",
        }}
      >
        <Button
          sx={{
            width: "146px",
            height: "32px",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fonSize: "20px",
            fontWeight: "600",
          }}
        >
          أرفق رابط
        </Button>
        <Button
          sx={{
            width: "146px",
            height: "32px",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fonSize: "20px",
            fontWeight: "600",
          }}
        >
          أرفق رابط
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: "890px" }}>
        <Box
          sx={{
            width: "855px",
            height: "818px",
            p: "100px",
            backgroundColor: "#fff",
            mt: "50px",
            mr: "30px",
          }}
        >
          <Typography sx={{fontWeight:'600'}}>
            يىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتنيىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتنيىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتنيىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتنيىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتنيىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتنيىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتنيىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتنيىبهريبنؤءىرنؤءر
            ؤءمرةؤنمءىرنمءؤىرتنؤءىتنرىءؤنترىتنءئىنتىءئؤرتنىءتن
          </Typography>
        </Box>

        <Button
          sx={{
            width: "146px",
            height: "32px",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fonSize: "20px",
            fontWeight: "600",
            mt: "30px",
            display: "block",
            mr: "auto",
          }}

        onClick={()=>{
          navigate('/saudi-groups')
        }}
        >
          إرسال
        </Button>
      </Box>
    </Box>
  );
}

export default SaudiNumbers;
