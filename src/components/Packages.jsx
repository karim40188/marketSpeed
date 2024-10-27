import { Box, Button, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Packages() {
  let navigate = useNavigate();

  return (
    <Box>
      <Grid2 container justifyContent="space-between" sx={{ mb: 2 }}>
        <Grid2 >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              color: "#114F80",
              fontWeight: "600",
            }}
          >
            الباقات
          </Typography>
        </Grid2>
        <Grid2 >
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
            onClick={() => {
              navigate("/add-new-package");
            }}
          >
            أضف باقة جديدة
          </Button>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2} sx={{ p: "40px", width: { xs: "100%", md: "70%" } }}>
        <Grid2  size={{xs:12}}>
          <Grid2 container justifyContent="space-between" sx={{ mb: "20px" }}>
            <Grid2 >
              <Typography sx={{ fontWeight: "600" }}>مزايا الباقة</Typography>
            </Grid2>
            <Grid2 >
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
                  onClick={() => {
                    navigate("/edit-package");
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
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 size={{xs:12}}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              background: "linear-gradient(78.11deg, #F9D053 0.15%, #937B31 99.85%)",
              borderRadius: "15px",
              padding: { xs: "30px", md: "60px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <ul style={{ color: "#fff", padding: 0, listStyleType: "disc", margin: 0 }}>
              <li><Typography>15 ماسة مجانية</Typography></li>
              <li><Typography>شعار واتساب متاح لمده 4 أسابيع</Typography></li>
              <li><Typography>شعار تليجرام متاح لمده 4 أسابيع</Typography></li>
              <li><Typography>شعار الإنستجرام متاح لمده 4 أسابيع</Typography></li>
              <li><Typography>شعار X متاح لمده 4 أسابيع</Typography></li>
              <li><Typography>شعار فيس بوك متاح لمده 4 أسابيع</Typography></li>
              <li><Typography>شعار تيك توك متاح لمده 4 أسابيع</Typography></li>
              <li><Typography>شعار رسائل نصية متاح لمده 4 أسابيع</Typography></li>
              <li><Typography>شعار الإيميلات متاح لمده 4 أسابيع</Typography></li>
            </ul>
          </Box>
        </Grid2>

        <Grid2 size={{xs:12}} sx={{ display: "flex", gap: "20px", p: "5px", alignItems: "center" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>السعر</Typography>
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
              fontWeight: "600",
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
              mr: "20px",
              fontWeight: "600",
            }}
          >
            7.5 دولار
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Packages;
