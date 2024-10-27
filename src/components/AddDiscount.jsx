import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddDiscount() {
  let navigate = useNavigate();

  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80", fontWeight: '600' }}
      >
        أضف كود الخصم
      </Typography>
      <Box sx={{ p: { xs: "20px", md: "40px" }, mt: "50px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // تغيير الاتجاه حسب حجم الشاشة
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "start",
              width: { xs: "100%", md: "auto" }, // عرض كامل في الشاشات الأصغر
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: '600' }}>الكود</Typography>
              <TextField
                sx={{
                  width: { xs: "100%", md: "189px" }, // عرض متناسب في الشاشات الأصغر
                  height: "62px",
                  fontSize: "30px",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: '600' }}>نسبه الخصم</Typography>
              <TextField
                sx={{
                  width: { xs: "100%", md: "174px" }, // عرض متناسب في الشاشات الأصغر
                  height: "62px",
                  fontSize: "30px",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: "20px", mt: { xs: "20px", md: 0 } }}>
            <Button
              sx={{
                fontSize: "25px",
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#114F80",
                borderRadius: "6px",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                navigate('/edit-discount');
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              حذف
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddDiscount;
