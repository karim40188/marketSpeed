import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";

function AddUser() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          mb: "20px",
        }}
      >
      اضافه المستخدم
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Box sx={{ width: "108px", height: "108px" }}>
            <Box
              sx={{ width: "100%", height: "100%" }}
              component="img"
              src={profile_img}
            />
          </Box>
          <Button
            sx={{
              width: "138px",
              height: "32px",
              backgroundColor: "#128C7F",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
          >
            رفع صوره جديدة
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#128C7F",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
          >
            حفظ
          </Button>
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#CC0000",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
          >
            حذف
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: "20px", width: { xs: "100%", xl: "60%" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography>رصيد الماسات</Typography>
            <Box
              sx={{
                width: "174px",
                border: "1px solid",
                height: "62px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>40 بوصه</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography>الباقة الحالية</Typography>
            <Box
              sx={{
                width: "174px",
                border: "1px solid",
                height: "62px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>غير مشترك </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "20px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <Box>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                الاسم ثلاثى
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
                أحمد محمد
              </Box>
            </Box>

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
                الدولة
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
                المملكة العربية السعودية
              </Box>
            </Box>

            {/* حقل المدينة */}
            <Box sx={{ width: "49%" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                المدينة
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
                الرياض
              </Box>
            </Box>
          </Box>

          {/* البريد الالكتروني  */}

          {/* رقم الجوال في صف منفصل */}
          <Box sx={{ mt: "20px", width: "100%" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              رقم الجوال
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
              966 5552512
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddUser;
