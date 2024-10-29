import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";

function AddUser() {
  return (
    <Box sx={{ p: "20px" }}>
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "40px" },
          color: "#114F80",
          mb: "20px",
        }}
      >
        اضافه المستخدم
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          mb: { xs: "20px", md: "0" }, // مساحة أسفل للتفريق بين العناصر في الشاشات الصغيرة
        }}
      >
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Box sx={{ width: "108px", height: "108px" }}>
            <Box
              sx={{ width: "100%", height: "100%" }}
              component="img"
              src={profile_img}
              alt="Profile"
            />
          </Box>
          <Button
            sx={{
              width: "138px",
              height: "32px",
              backgroundColor: "#128C7F",
              borderRadius: "6px",
              color: "#fff",
              fontSize: { xs: "20px", md: "25px" },
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
          >
            رفع صوره جديدة
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            mt: { xs: "10px", md: "0" }, // مسافة أعلى للأزرار في الشاشات الصغيرة
            flexWrap: "wrap", // السماح بتغليف الأزرار في الشاشات الصغيرة
          }}
        >
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#128C7F",
              color: "#fff",
              fontSize: { xs: "20px", md: "25px" },
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
              fontSize: { xs: "20px", md: "25px" },
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
          >
            حذف
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: "20px", width: { xs: "100%", xl: "60%" }, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" }, // تعديل الاتجاه في الشاشات الصغيرة
            mb: "20px", // مسافة أسفل بين الصفوف
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
              <Typography>غير مشترك</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "40px" }}>
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: { xs: "20px", md: "30px" } }}>
                الاسم ثلاثى
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
                أحمد محمد
              </Box>
            </Box>

            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: { xs: "20px", md: "30px" } }}>
                البريد الإلكترونى
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
              mt: "20px",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* حقل الدولة */}
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: { xs: "20px", md: "30px" } }}>
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
            <Box sx={{ width: { xs: "100%", md: "49%" } }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: { xs: "20px", md: "30px" } }}>
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

          {/* رقم الجوال في صف منفصل */}
          <Box sx={{ mt: "20px", width: "100%" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: { xs: "20px", md: "30px" } }}>
              رقم الجوال
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
              966 5552512
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddUser;
