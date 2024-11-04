import { Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DiWallet() {
  let navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
            mb: { xs: 2, md: 0 },
          }}
        >
          المحفظة الماسية
        </Typography>
        <Button
          sx={{
            fontSize: { xs: "18px", md: "25px" },
            fontFamily: "Tanseek Modern Pro Arabic",
            width: { xs: "100%", md: "auto" },
            height: "32px",
            backgroundColor: "#114F80",
            borderRadius: "6px",
            color: "#fff",
            px: { xs: 2, md: 4 },
            py: { xs: 1, md: 2 },
          }}
          onClick={() => {
            navigate("/add-wallet");
          }}
        >
         اضافه محفظه جديدة
        </Button>
      </Box>

      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: "600",
            mb: 3,
          }}
        >
          مزايا الباقة
        </Typography>

        {[1, 2, 3].map((_, index) => (
          <Box key={index}>
            <Grid container spacing={2} alignItems="start">
              <Grid item xs={12} md={6}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Box display="flex" gap={1} alignItems="center">
                    <Typography sx={{ width: "121px", fontWeight: "600" }}>
                      عدد الماسات
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
                        fontWeight: "600",
                      }}
                    >
                      40 ماسة
                    </Typography>
                  </Box>
                  <Box display="flex" gap={1} alignItems="center">
                    <Typography sx={{ width: "121px", fontWeight: "600" }}>
                      السعر
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
                        fontWeight: "600",
                      }}
                    >
                      30 ريال
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
                        fontWeight: "600",
                        mr: { xs: 0, md: 4 },
                      }}
                    >
                      7.5 دولار
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box display="flex" gap={2} justifyContent={{ xs: "center", md: "flex-start" }}>
                  <Button
                    sx={{
                      fontSize: { xs: "18px", md: "25px" },
                      fontFamily: "Tanseek Modern Pro Arabic",
                      width: "156px",
                      height: "32px",
                      backgroundColor: "#114F80",
                      borderRadius: "6px",
                      color: "#fff",
                      px: { xs: 2, md: 4 },
                      py: { xs: 1, md: 2 },
                    }}
                    onClick={() => {
                      navigate("/edit-wallet");
                    }}
                  >
                    تعديل
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
              </Grid>
            </Grid>
            <Box
              sx={{
                border: "1px solid #000000",
                width: { xs: "100%", md: "488.03px" },
                mx: "auto",
                my: 4,
                height: "1px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default DiWallet;
