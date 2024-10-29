import { Box, Button, Typography } from "@mui/material";

function EditDiscount() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
          mb: { xs: 2, md: 4 },
        }}
      >
        تعديل كود الخصم
      </Typography>
      
      <Box sx={{ p: { xs: 2, md: 4 }, mt: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: "600" }}>
                الكود
              </Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "auto",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: { xs: "20px", md: "30px" },
                  p: "10px",
                  fontWeight: "600",
                }}
              >
                FastMarketing50
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: "600" }}>
                نسبه الخصم
              </Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: { xs: "20px", md: "30px" },
                  mr: { xs: 0, md: 2 },
                  fontWeight: "600",
                }}
              >
                20 %
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              mt: { xs: 2, md: 0 },
            }}
          >
            <Button
              sx={{
                fontSize: { xs: "18px", md: "25px" },
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#128C7F",
                borderRadius: "6px",
                color: "#fff",
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              حفظ
            </Button>
            <Button
              sx={{
                fontSize: { xs: "18px", md: "25px" },
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#CC0000",
                borderRadius: "6px",
                color: "#fff",
                px: { xs: 2, md: 4 },
                py: { xs: 1, md: 2 },
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

export default EditDiscount;
