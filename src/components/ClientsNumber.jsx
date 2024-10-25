import { Box, Button, Typography } from "@mui/material";
import saudiImg from "../assets/saudi.png";
function ClientsNumber() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
      >
        قنوات العملاء
      </Typography>

      <Box sx={{ p: "20px" }}>
        <Box
          sx={{
            width: "836px",
            height: "auto",
            backgroundColor: "#114F80",
            p: "50px",
            color: "#fff",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap:'20px'
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Typography>رابط القناة</Typography>
              <Typography>https://market-speed.vercel.app/</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Typography> اسم القناة</Typography>
              <Typography>العائلة</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Typography>الدولة</Typography>
              <Box sx={{ width: "66px", height: "41px" }}>
                <Box
                  component="img"
                  src={saudiImg}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <Typography> اسم المستخدم</Typography>
              <Typography>فيصل عبدالعزيز</Typography>
            </Box>
          </Box>

          <Box sx={{display:'flex',justifyContent:'end',gap:'20px'}}>
            <Button
              sx={{
                width: "121.65px",
                p: "10px",
                borderRadius: "6px",
                backgroundColor: "#128C7F",
                color: "#fff",
              }}
            >
              قبول
            </Button>
            <Button
              sx={{
                width: "121.65px",
                p: "10px",
                borderRadius: "6px",
                backgroundColor: "#CC0000",
                color: "#fff",
              }}
            >
              رفض
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientsNumber;
