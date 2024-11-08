import { Box, Button, Grid2, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { FaArrowDown } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Login() {


    let navigate= useNavigate()
  return (
    <Grid2 container justifyContent="space-between" sx={{ overflow: "hideen" }}>
      <Grid2
        size={{ xs: 12, md: 5 }}
        sx={{
          background:
            "linear-gradient(162.24deg, #F9D053 0.72%, #796727 99.28%)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
            width: "50%",
            mx: "auto",
          }}
        >
          <input
            placeholder="اسم المستخدم"
            style={{
              maxWidth: "342px",
              height: "79px",
              color: "#000000",
              border: "3px solid #FFFFFF",
              borderRadius: "15px",
              backgroundColor: "transparent",
              paddingInline: "10px",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
              fontWeight: "400",
            }}
          />

          <input
            placeholder="كلمة السر"
            style={{
              maxWidth: "342px",
              height: "79px",
              color: "#000",
              border: "3px solid #FFFFFF",
              borderRadius: "15px",
              backgroundColor: "transparent",
              paddingInline: "10px",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
              fontWeight: "400",
            }}
          />

          <Typography
            sx={{
              color: "#fff",
              position: "relative",
              width: "45%",
              "&::after": {
                content: '""',
                position: "absolute",
                top: "100%",
                left: "0",
                width: "100%",
                height: "3px",
                backgroundColor: "#fff",
              },
            }}
          >
            نسيت كلمة السر
          </Typography>


          <Button
            sx={{
              backgroundColor: "#114F80",
              width: "207px",
              height: "54px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              color:"#fff",
              textTransform:'capitalize'
            }}
            onClick={()=>{
                navigate('/home')
                console.log('hello')
            }}
          >
            تسجيل الدخول
          </Button>
          <Box
            sx={{
              backgroundColor: "#114F80",
              width: "207px",
              height: "54px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box
                sx={{
                  fontSize: "30px",
                  color: "#F9D053",
                }}
              >
                <BsTranslate />
              </Box>

              <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                اللغة (العربية)
              </Typography>
            </Box>

            <FaArrowDown
              style={{ width: "10.81px", height: "20.6px", color: "#fff" }}
            />
          </Box>
         
        </Box>
      </Grid2>

      <Grid2
        size={{ xs: 12, md: 7 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "#EDE8E9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: {xs:"250px",md:"350px"},
            height:{xs:"250px",md:"350px"},
            backgroundColor: "#114F80",
            borderRadius: "50%",
            position: "absolute",
            left: "-100px",
            top: "-100px",
            zIndex: "12",
          }}
        ></Box>
        <Box
          sx={{
            width: {xs:"250px",md:"550px"},
            height:{xs:"250px",md:"350px"},
            backgroundColor: "#F9D053",
            borderRadius: "50%",
            position: "absolute",
            left: "-150px",
            top: "100px",
          }}
        ></Box>

        <Box sx={{ width: {xs:"200px",md:"260px"}, height: {xs:"250px",xl:"331px"}, mx: "auto" , }}>
          <Box
            component="img"
            src={logo}
            sx={{ width: "100%", height: "100%" ,}}
          />
        </Box>
        <Typography
          sx={{
            fontSize: {xs:"100px",md:"100px"},
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb:{xs:'100px',md:'0'}
           
          }}
        >
          سرعة التسويق
        </Typography>

        <Box
          sx={{
            width: {xs:"250px",md:"350px"},
            height:{xs:"250px",md:"350px"},
            backgroundColor: "#114F80",
            borderRadius: "50%",
            position: "absolute",
            right: "-100px",
            bottom: "-100px",
            zIndex: "12",
          }}
        ></Box>
        <Box
          sx={{
            width: {xs:"250px",md:"350px"},
            height:{xs:"250px",md:"350px"},
            backgroundColor: "#F9D053",
            borderRadius: "50%",
            position: "absolute",
            right: "80px",
            bottom: "-150px",
          }}
        ></Box>
      </Grid2>
    </Grid2>
  );
}

export default Login;
