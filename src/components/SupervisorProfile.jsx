import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useState } from "react";

function SupervisorProfile() {
  let [field] = useState([
    { name: "الاسم ثلاثى", value: "أحمد محمد" },
    { name: "الأحالات", value: "40,000,0000" },
    { name: "الدولة", value: "المملكة العربية السعودية" },
    { name: "المدينة", value: "الرياض" }, // هذا هو الحقل الذي سيظهر في صف منفصل
    { name: "رقم الجوال", value: "966 5552512" },
    { name: "اسم البنك", value: "الراجحى" },
    { name: "رقم الحساب البنكى", value: "56145612515615614154145" },
  ]);

  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
      >
        عرض الملف
      </Typography>
      <Box sx={{ p: "20px", width:{xs: "100%",xl:'60%'} }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "108px", height: "108px" }}>
            <Box
              component="img"
              src={profile_img}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              sx={{
                fontSize: "25px",
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#114F80",
                borderRadius: "6px",
                color: "#fff",
                px: "30px",
                py: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              تعديل
            </Button>
            <Button
              sx={{
                fontSize: "25px",
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#CC0000",
                borderRadius: "6px",
                color: "#fff",
                px: "30px",
                py: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              حذف
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            {field.map((field) => {
              if (field.name === "رقم الجوال") {
                // هذا الشرط يجعل "المدينة" في صف منفصل
                return (
                  <Box key={field.name} sx={{ width: "100%" }}>
                    <Box
                      key={field.name}
                      sx={{width:'412px'}} // عرض 100% لجعل الحقل يظهر في صف منفصل
                    >
                      <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                        {field.name}
                      </Typography>
                      <Box
                        sx={{
                          width: "100%",
                          height: "70px",
                          p: "20px",
                          fontSize: "30px",
                          backgroundColor: "#fff",
                          display: "flex",
                          alignItems: "center",
                          mt: "10px",
                          borderRadius: "15px",
                        }}
                      >
                        {field.value}
                      </Box>
                    </Box>
                  </Box>
                );
              } else {
                return (
                  <Box key={field.name}>
                    <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                      {field.name}
                    </Typography>
                    <Box
                      sx={{
                        width: "412px",
                        height: "70px",
                        p: "20px",
                        fontSize: "30px",
                        backgroundColor: "#fff",
                        display: "flex",
                        alignItems: "center",
                        mt: "10px",
                        borderRadius: "15px",
                      }}
                    >
                      {field.value}
                    </Box>
                  </Box>
                );
              }
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SupervisorProfile;
