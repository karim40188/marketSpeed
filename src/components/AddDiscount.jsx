import { Box, Button, TextField, Typography } from "@mui/material";

function AddDiscount() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
      >
        أضف كود الخصم
      </Typography>
      <Box sx={{ p: "40px", mt: "50px" }}>
        <Box
          sx={{
            display: "flex",
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
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: "121px" }}>الكود</Typography>
              <TextField
                sx={{
                  width: "189px",
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
              <Typography sx={{ width: "121px" }}>نسبه الخصم</Typography>
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
          </Box>

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
    </Box>
  );
}

export default AddDiscount;
