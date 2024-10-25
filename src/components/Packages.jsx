import { Box, Button, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Packages() {

    let navigate=useNavigate()
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between",    }}>
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
        >
          الباقات
        </Typography>
        <Button
          sx={{
            fontSize: "25px",
            fontFamily: "Tanseek Modern Pro Arabic",
            width: "auto",
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

          onClick={()=>{
            navigate('/add-new-package')
          }}
        >
          أضف باقة جديدة
        </Button>
      </Box>
      <Box sx={{ p: "40px", width: "70%" }}>
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",
            mb: "20px",
          }}
        >
          <Typography>مزايا الباقة</Typography>

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

            onClick={()=>{
                navigate('/edit-package')
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
            width: "100%",
            height: "auto",
            background:
              "linear-gradient(78.11deg, #F9D053 0.15%, #937B31 99.85%)",
            borderRadius: "15px",
            padding: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul style={{ color: "#fff" }}>
            <li>
              <Typography>15 ماسة مجانية </Typography>
            </li>
            <li>
              <Typography>شعار واتساب متاح لمده 4 أسابيع</Typography>
            </li>
            <li>
              <Typography>شعار تليجرام متاح لمده 4 أسابيع</Typography>
            </li>
            <li>
              <Typography>شعار الإنستجرام متاح لمده 4 أسابيع</Typography>
            </li>
            <li>
              <Typography>شعار X متاح لمده 4 أسابيع</Typography>
            </li>
            <li>
              <Typography>شعار فيس بوك متاح لمده 4 أسابيع</Typography>
            </li>
            <li>
              <Typography>شعار تيك توك متاح لمده 4 أسابيع</Typography>
            </li>
            <li>
              <Typography>شعار رسائل نصية متاح لمده 4 أسابيع</Typography>
            </li>
            <li>
              <Typography>شعار الإيميلات متاح لمده 4 أسابيع</Typography>
            </li>
          </ul>
        </Box>
        <Box sx={{ display: "flex" ,gap:'50px',p:'20px',alignItems:'center'}}>
          <Typography sx={{ fontSize: "30px" }}>السعر</Typography>
          <Typography
            sx={{
              fontSize: "30px",
              border: "1px solid black",
              width: "174px",
              height: "62px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            30 ريال
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              border: "1px solid black",
              width: "174px",
              height: "62px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr:'20px'
            }}
          >
            30 ريال
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Packages;
