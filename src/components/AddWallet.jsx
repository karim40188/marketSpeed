import { Box, Button, TextField, Typography } from "@mui/material";
function AddWallet() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80",fontWeight:'600' }}
      >
       أضافة المحفظة الماسية
      </Typography>
      <Box sx={{ p: "40px" }}>
        <Typography sx={{ fontSize: "30px", mb: "30px",fontWeight:'600' }}>
          {" "}
          مزايا الباقة
        </Typography>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Typography sx={{ width: "121px",fontWeight:'600' }}>عدد الماسات</Typography>
                <TextField
                  sx={{
                    width: "174px",
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: "30px",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Typography sx={{ width: "121px" ,fontWeight:'600'}}>السعر</Typography>
                <TextField
                  sx={{
                    width: "174px",
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: "30px",
                  }}
                />
                <TextField
                  sx={{
                    width: "174px",
                    height: "62px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    fontSize: "30px",
                    mr:'50px'
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
                sx={{
                  fontSize: "25px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  width: "156px",
                  height: "32px",
                  backgroundColor: "#128C7F",
                  borderRadius: "6px",
                  color: "#fff",
                  px: "30px",
                  py: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                حفظ
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
      </Box>
    </Box>
  );
}

export default AddWallet;
