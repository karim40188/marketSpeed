import { Box, Button, TextField, Typography } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import profile_img from "../assets/profile_img.png";
import { useState } from "react";

function Marketers() {
  let [marketers] = useState([
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
    "على محمد",
  ]);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
          >
            أحمد محمد
          </Typography>

          <Typography
            sx={{
              background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            مشرف
          </Typography>
        </Box>

        <Button
          sx={{
            width: "136px",
            height: "42px",
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            color: "#000",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: "auto",
            fontSize: "30px",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontWeight: "400",
            py: "25px",
          }}
        >
          إضافه مشرف
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: "20px", my: "30px" }}>
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
        >
          المسوقين
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            placeholder={"بحث بالاسم"}
            sx={{ width: "597px", backgroundColor: "#fff" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "10px",
              width: "33.6px",
              height: "34.8px",
            }}
          >
            <IoSearchOutline
              style={{
                width: "100%",
                height: "100%",
                color: "#937B31",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", p:'20px'}}>
        {marketers.map((marketer, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "437px",
                height: "auto",
                backgroundColor: "#fff",
                p: "15px",
                borderRadius: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Box sx={{ width: "108px", height: "108px" }}>
                    <Box
                      sx={{ width: "100%", height: "100%" }}
                      component="img"
                      src={profile_img}
                    />
                  </Box>

                  <Typography>على محمد</Typography>
                  <Typography
                    sx={{
                      background:
                        "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    مسوق{" "}
                  </Typography>
                </Box>

                <Box sx={{ mt: "30px", color: "#114F80" }}>
                  <Typography sx={{ fontSize: "20px" }}>
                    كود الخصم : ALIO15412
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    عدد الإحالات: 12,500
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    الرياض-المملكة العربية السعودية
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    رقم الجوال : 966 5522116
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    رقم الحساب البنكى : 5147892154156
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    البنك : الراجحى
                  </Typography>
                </Box>

                <Typography sx={{ fontSize: "20px", color: "#A3A3A3" }}>
                  10/10/2024
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  mt: "15px",
                }}
              >
                <Button
                  sx={{
                    width: "122px",
                    height: "32px",
                    backgroundColor: "#128C7F",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "6px",
                  }}
                >
                  تجديد
                </Button>
                <Button
                  sx={{
                    width: "122px",
                    height: "32px",
                    backgroundColor: "#114F80",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "6px",
                  }}
                >
                  تعديل
                </Button>
                <Button
                  sx={{
                    width: "122px",
                    height: "32px",
                    backgroundColor: "#CC0000",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "6px",
                  }}
                >
                  حذف
                </Button>
                <Button
                  sx={{
                    width: "122px",
                    height: "32px",
                    backgroundColor: "#000000",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "6px",
                  }}
                >
                  رابط الخصم
                </Button>
                <Button
                  sx={{
                    width: "122px",
                    height: "32px",
                    backgroundColor: "#000000",
                    color: "#fff",
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    background:
                      "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
                    borderRadius: "6px",
                  }}
                >
                  رابط المسوق
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Marketers;
