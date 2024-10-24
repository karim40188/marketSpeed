import { Box, Button, Typography } from "@mui/material";

function SaudiNumbers() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
      >
        جميع الأرقام مجموعات المملكة العربية السعودية
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "end",
          width: "60%",
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
            mt: "100px",
            mr: "30px",
          }}
        >
          <Typography>
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
        >
          إرسال
        </Button>
      </Box>
    </Box>
  );
}

export default SaudiNumbers;
