import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AllNumbersOfGroups() {
  const navigate = useNavigate();
  const [numbers] = useState([
    "966 55443322",
    "966 55443322",
    "966 55443322",
    "966 55443322",
    "966 55443322",
    "966 55443322",
    "966 55443322",
    "966 55443322",
    "966 55443322",
    "966 55443322",
    "966 55443322",
  ]);

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
          textAlign: { xs: "center", md: "right" },
        }}
      >
        جميع الأرقام مجموعات المملكة العربية السعودية
      </Typography>
      
      <Box sx={{ p: { xs: "10px", md: "25px" }, mt: { xs: "20px", md: "50px" } }}>
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
              <Box
                sx={{
                  width: "37px",
                  height: "37px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              />
              <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
                تحديد الكل (10000)
              </Typography>
            </Box>

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
              onClick={() => navigate('/saudi-numbers')}

            >
              التالى
            </Button>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Box
              sx={{
                width: "37px",
                height: "37px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
            />
            <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
              إرسال على عدد محدد
            </Typography>
            <Box
              sx={{
                width: "177px",
                height: "37px",
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            mt: "30px",
          }}
        >
          {numbers.map((number, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", md: "821px" },
                height: "77px",
                backgroundColor: "#114F80",
                display: "flex",
                px: "20px",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#fff",
                borderRadius: "16px",
                cursor: "pointer",
                mx: "auto",
              }}
            >
              <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
                {number}
              </Typography>
              <Box
                sx={{
                  width: "37px",
                  height: "37px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AllNumbersOfGroups;
