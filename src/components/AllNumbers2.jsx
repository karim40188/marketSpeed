import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function AllNumbers2() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: { xs: "100%", md: "100%" },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <input
              style={{
                width: "37px",
                height: "37px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}

              type="checkbox"
            />
            <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
              تحديد الكل (10000)
            </Typography>
          </Box>

          <Box>
            <Button
              sx={{
                width: { xs: "100%", md: "146px" },
                height: "32px",
                backgroundColor: "#114F80",
                color: "#fff",
                fontFamily: "Sora",
                fontSize: { xs: "18px", md: "20px" },
                fontWeight: "600",
                mt: { xs: 2, md: 0 },
              }}
              onClick={() => navigate("/saudi-numbers")}
            >
              التالى
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
      
          <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
            إرسال على عدد محدد
          </Typography>
          <input
            style={{
              width: "300px",
              height: "37px",
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
            type="text"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AllNumbers2;
