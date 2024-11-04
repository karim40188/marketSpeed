import { Box, Button, Typography } from "@mui/material";
import { FaArrowDown } from "react-icons/fa";

function AddLinks() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
        >
          اختر الدوله
        </Typography>

        <select
          name=""
          id=""
          style={{
            marginTop: "20px",
            width: "30%",
            height: "50px",
            padding: "10px",
          }}
        >
          <option value="">مصر</option>
          <option value="">المملكه العربيه السعوديه</option>
          <option value="">قطر</option>
          <option value="">عمان</option>
          <option value="">البحرين</option>
        </select>
      </Box>

      <Box sx={{ p: "25px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "412px" } }}>
            <Typography
              sx={{ color: "#5E5E5E", fontSize: "30px", fontWeight: "700" }}
            >
              أضف رابط الجروب
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "70px",
                p: "10px",
                fontSize: "30px",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                mt: "10px",
                borderRadius: "15px",
              }}
            >
              رابط المجموعة
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              my: "30px",
              width: "300px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                color: "#5E5E5E",
                alignSelf: "flex-start",
              }}
            >
              اضف الملف
            </Typography>
            <Button
              sx={{
                width: "205px",
                height: "70px",
                fontSize: "30px",
                fontFamily: "Tanseek Modern Pro Arabic",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                background: "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
              }}
            >
              قم بتحميل الملف csv
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "412px" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              المنصة
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "cnenter",
                justifyContent: "space-between",
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "15px",
                p: "10px",
                height: "70px",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                }}
              >
                الواتساب
              </Typography>

              <FaArrowDown
                style={{
                  fontSize: "10px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left:"20px"
                }}
              />
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            width: "121.65px",
            height: "32px",
            backgroundColor: "#114F80",
            mt: "30px",
            color: "#fff",
            fontSize: "25px",
            fontFamily: "Tanseek Modern Pro Arabic",
            display: "flex",
            justifyContnet: "center",
            alignItems: "center",
            py: "20px",
            borderRadius: "6px",
          }}
        >
          حفظ
        </Button>
      </Box>
    </Box>
  );
}

export default AddLinks;
