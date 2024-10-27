import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AllNumbersOfGroups() {

  let navigate= useNavigate()
  let [numbers] = useState([
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
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80",fontWeight:'600' }}
      >
        جميع الأرقام مجموعات المملكة العربية السعودية
      </Typography>
      <Box sx={{ p: "25px", mt: "50px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "60%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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
              ></Box>
              <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
                تحديد الكل (10000)
              </Typography>
            </Box>

            <Button
              sx={{
                width: "146px",
                height: "32px",
                backgroundColor: "#114F80",
                color: "#fff",
                fontFamily: "Sora",
                fontSize: "20px",
                fontWeight: "600",
              }}
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
            ></Box>
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
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            mt: "30px",
          }}
        >
          {numbers.map((_, index) => {
            return (
              <Box

              onClick={()=>{
                navigate('/saudi-numbers')
              }}
                key={index}
                sx={{
                  width: "821px",
                  height: "77px",
                  backgroundColor: "#114F80",
                  display: "flex",
                  px: "20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#fff",
                  borderRadius: "16px",
                  cursor:'pointer',
                }}
              >
                <Typography sx={{ fontFamily: "Sora", fontWeight: "600" }}>
                  966 55443322
                </Typography>

                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  }}
                ></Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default AllNumbersOfGroups;
