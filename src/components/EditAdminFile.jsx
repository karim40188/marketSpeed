import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";

function EditAdminFile() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          mb: "20px",
          fontWeight:'600'
        }}
      >
       تعديل ملف المسئول
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
            flexDirection: "column",
            p: "20px",
          }}
        >
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
                الراجحى
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
                56145612515615614154145
              </Box>
            </Box>
          </Box>

          <Box sx={{ my: "30px" }}>
            <Typography sx={{ fontSize: "40px", color: "#114F80" ,mb:'20px',fontWeight:'600'}}>
              الأدوار
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" ,px:'30px'}}>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم في اكواد الخصم 
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  احصائيات مكسب التطبيق
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  احصائيات الأشتراكات الشهري والسنوى
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  احصائيات مستخدمى التطبيق
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم فى الأسعار
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم فى المنصات
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  إضافة الدول
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  الدردشات
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم فى التطبيق
                  </Typography>
               
                </Box>
              </Box>
              <Box sx={{ display: "flex",gap:'20px',alignItems:"center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{fontSize:'30px'}}>
                  التحكم فى المجموعات
                  </Typography>
               
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EditAdminFile;
