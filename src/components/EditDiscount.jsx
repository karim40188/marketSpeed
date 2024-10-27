import { Box, Button, Typography } from "@mui/material";

function EditDiscount() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" ,fontWeight:'600'}}
      >
       تعديل كود الخصم
      </Typography>
      <Box sx={{p:'40px',mt:'50px'}} >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: "121px",fontWeight:'600' }}>الكود</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "auto",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  p: "10px",
                  fontWeight:'600'
                }}
              >
                FastMarketing50
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: "121px" ,fontWeight:'600'}}>نسبه الخصم</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  mr: "20px",
                  fontWeight:'600'
                }}
              >
                20 %
              </Typography>
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
  );
}

export default EditDiscount;
