import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function AddSupervisor() {
  let [field] = useState([
    { name: "الاسم ثلاثى", value: "الاسم" },
    { name: "الدولة", value: "المملكة العربية السعودية" },
    { name: "المدينة", value: "الرياض" }, // تعديل المدينة هنا
    { name: "رقم الجوال", value: "966 5552512" },
    { name: "اسم البنك", value: "اسم البنك" },
  ]);

  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" ,fontWeight:'600'}}
      >
        إضافة مشرف
      </Typography>
      <Box sx={{ p: "20px", width: { xs: "100%", xl: "60%" } }}>
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
              if (
                field.name === "الدولة" ||
                field.name === "المدينة" ||
                field.name === "رقم الجوال"
              ) {
                return null; // تجاهل الدولة، المدينة، ورقم الجوال هنا
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

          {/* الدولة والمدينة في صف واحد */}
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              mt: "20px", // إضافة مسافة بين الصفوف
            }}
          >
            {/* حقل الدولة */}
            <Box sx={{ width: "49%" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {field[1].name}
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
                {field[1].value}
              </Box>
            </Box>

            {/* حقل المدينة */}
            <Box sx={{ width: "49%" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {field[2].name}
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
                {field[2].value}
              </Box>
            </Box>
          </Box>

          {/* رقم الجوال في صف منفصل */}
          <Box sx={{ mt: "20px", width: "100%" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {field[3].name}
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
              {field[3].value}
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                  اسم البنك
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
                  اسم البنك
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                  رقم الحساب البنكي
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
                  رقم الحساب
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    my: "30px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "30px",
                      color: "#5E5E5E",
                      alignSelf: "flex-start",
                    }}
                  >
                    اضف صوره الملف
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
                      background:
                        "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                    }}
                  >
                    قم بتحميل صورة
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              mt: "20px", // إضافة مسافة بين الصفوف
            }}
          >
            <Box>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                البريد الإلكترونى
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
                asbdabjksd@text.com
              </Box>
            </Box>

            <Box>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                تغير كلمة السر
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
              ></Box>
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
            }}
          >
            حفظ
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddSupervisor;
