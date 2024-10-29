import { Box, Button, TextField, Typography } from "@mui/material";

function AddWallet() {
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
        أضافة المحفظة الماسية
      </Typography>
      
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography sx={{ fontSize: { xs: "20px", md: "30px" }, fontWeight: "600", mb: 3 }}>
          مزايا الباقة
        </Typography>

        <Box>
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
                  عدد الماسات
                </Typography>
                <TextField
                  sx={{
                    width: "174px",
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: { xs: "20px", md: "30px" },
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: "600" }}>
                  السعر
                </Typography>
                <TextField
                  sx={{
                    width: {xs:"130px",md:"174px"},
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: { xs: "20px", md: "30px" },
                  }}
                />
                <TextField
                  sx={{
                    width: {xs:"130px",md:"174px"},
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: { xs: "20px", md: "30px" },
                    mr: { xs: 0, md: 4 },
                  }}
                />
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
                }}
              >
                حذف
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddWallet;
