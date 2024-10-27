import { Box, Button, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";

function ShowUserFile() {
    let navigate = useNavigate();

    return (
        <Box>
            <Typography
                sx={{
                    fontSize: { xs: "30px", md: "40px" },
                    color: "#114F80",
                    mb: "20px",
                }}
            >
                عرض ملف المستخدم
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // اتجاه عمودي في الشاشات الأصغر
                    alignItems: { xs: "center", md: "flex-start" }, // التوسيع العمودي في الشاشات الأصغر
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ display: "flex", gap: "20px", alignItems: "center", mb: { xs: "20px", md: 0 } }}>
                    <Box sx={{ width: "108px", height: "108px" }}>
                        <Box
                            sx={{ width: "100%", height: "100%" }}
                            component="img"
                            src={profile_img}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <Button
                        sx={{
                            width: "121.65px",
                            height: "32px",
                            backgroundColor: "#114F80",
                            color: "#fff",
                            fontSize: "25px",
                            fontFamily: "Tanseek Modern Pro Arabic",
                        }}
                        onClick={() => {
                            navigate('/edit-user-file');
                        }}
                    >
                        تعديل
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

            <Box sx={{ p: "20px", width: { xs: "100%", xl: "60%" }, margin: "0 auto" }}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", md: "row" }, // اتجاه عمودي في الشاشات الأصغر
                        mb: "20px",
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
                    <Box sx={{ display: "flex", alignItems: "center",flexDirection:{xs:'column',md:'row'}, gap: { xs: "20px", md: "40px" } }}>
                        <Box sx={{ width: "100%" }}>
                            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                                الاسم ثلاثى
                            </Typography>
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "412px",
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

                        <Box sx={{ width: "100%" }}>
                            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                                البريد الإلكترونى
                            </Typography>
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "412px",
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
                            flexDirection: { xs: "column", md: "row" }, // اتجاه عمودي في الشاشات الأصغر
                            gap: "20px",
                            mt: "20px",
                        }}
                    >
                        {/* حقل الدولة */}
                        <Box sx={{ width: "100%" }}>
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
                        <Box sx={{ width: "100%" }}>
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

                    {/* رقم الجوال في صف منفصل */}
                    <Box sx={{ mt: "20px", width: "100%" }}>
                        <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                            رقم الجوال
                        </Typography>
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "412px",
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

export default ShowUserFile;
