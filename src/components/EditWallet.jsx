import { Box, Button, Typography } from "@mui/material";

function EditWallet() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        تعديل المحفظة الماسية
      </Typography>
      <Box sx={{ p: { xs: "20px", md: "40px" } }}>
        <Typography sx={{ fontSize: "30px", mb: "30px", fontWeight: "600" }}>
          مزايا الباقة
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // اتجاه عمودي في الشاشات الأصغر
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", width: { xs: "100%", md: "auto" } }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" } }}>عدد الماسات</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: { xs: "100%", md: "174px" },
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                }}
              >
                40 ماسة
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" } }}>السعر</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: { xs: "100%", md: "174px" },
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                }}
              >
                30 ريال
              </Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: { xs: "100%", md: "174px" },
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  ml: { xs: 0, md: "20px" }, // مسافة بين السعرين في الشاشات الأكبر
                }}
              >
                7.5 دولار
              </Typography>
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
      </Box>
      <Box
        sx={{
          border: "1px solid #000000",
          width: { xs: "100%", md: "488px" }, // تغيير العرض في الشاشات الأصغر
          mx: "auto",
          my: "50px",
        }}
      ></Box>
    </Box>
  );
}

export default EditWallet;
