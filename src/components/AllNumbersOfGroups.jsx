import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllNumbersOfGroups() {
  const navigate = useNavigate();
  // let checkRef = useRef();
  let inputs = document.querySelectorAll(".check-input");

  console.log(inputs);
  let [checkedInput, setCheck] = useState(false);
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
 

  let [count, setCount] = useState();

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

      <Box
        sx={{ p: { xs: "10px", md: "25px" }, mt: { xs: "20px", md: "50px" } }}
      >
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
                onChange={(e) => {
                  console.log(e.target.checked);

                  if (e.target.checked == true) {
                    setCheck(true);
                  }
                }}
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
                width: "220px",
                height: "40px",
                paddingInline: "10px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                fontSize: "15px",
              }}
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
              type="number"
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
              <input
                className="check-input"
                style={{
                  width: "37px",
                  height: "37px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
                type="checkbox"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AllNumbersOfGroups;
