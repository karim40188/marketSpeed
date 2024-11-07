import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SaudiNumber2() {
  let navigate = useNavigate();
  
  return (
    <Box>


      <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80", fontWeight: '600' }}
      >
      مجموعات الدول
      </Typography>

      <Typography>
       عدد المجموعات (30)
      </Typography>
      </Box>
     

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: { xs: "start", md: "end" }, // Adjust alignment based on screen size
          width: "100%",
          flexWrap: "wrap", // Allow wrapping on smaller screens
          p: { xs: "0 10px", md: "0" } // Adjust padding for smaller screens
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", md: "auto" },
            height: "auto",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", md: "20px" }, // Responsive font size
            fontWeight: "600",
            mb: { xs: "10px", md: "0" } // Add margin bottom for small screens
          }}
        >
          أرفق رابط
        </Button>
        <Button
          sx={{
            width: { xs: "100%", md: "auto" },
            height: "auto",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "600",
            mb: { xs: "10px", md: "0" } // Add margin bottom for small screens
          }}
        >
          أرفق الصورة او الفيديو 
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: { xs: "100%", sm: "90%", md: "890px" } }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "855px" },
            p: { xs: "20px", sm: "40px", md: "100px" }, // Responsive padding
            backgroundColor: "#fff",
            mt: "50px",
            mr: "30px",
            borderRadius: "10px", // Optional: add some rounding to corners
            overflow: "hidden" // Ensure content doesn't overflow
          }}
        >
          <Typography sx={{ fontWeight: '600', overflowWrap: "break-word" }}>
            يىبهريبنؤءىرنؤءر
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
            width: { xs: "100%", md: "146px" },
            height: "32px",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "600",
            mt: "30px",
            display: "block",
            mr: "auto",
          }}
          onClick={() => {
            navigate('/saudi-groups');
          }}
        >
          إرسال
        </Button>
      </Box>
    </Box>
  );
}

export default SaudiNumber2;
