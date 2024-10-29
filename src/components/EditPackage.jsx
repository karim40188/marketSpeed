import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "./Context";

function EditPackage() {
  let { sidebarOpen } = useContext(Context);
  return (
    <Box sx={{ width: "100%", p: { xs: 2, md: 1 } }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0 }}>
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
          تعديل الباقة
        </Typography>
      </Box>

      <Box
        sx={{
          p: "20px",

          width: sidebarOpen ? { xs: "100%", md: "672px" } : "100%",
          mx: sidebarOpen ? { xs: "", md: "" } : "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography sx={{ mb: { xs: 2, md: 0 } }}>مزايا الباقة</Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#128C7F",
                borderRadius: "6px",
                color: "#fff",
                px: 2,
                py: 1,
              }}
            >
              حفظ
            </Button>
            <Button
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#CC0000",
                borderRadius: "6px",
                color: "#fff",
                px: 2,
                py: 1,
              }}
            >
              حذف
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            background: "#fff",
            borderRadius: "15px",
            px: 5,
            py: 4,
            mb: 3,
          }}
        >
          <ul style={{ color: "#000", paddingLeft: "20px" }}>
            {[
              "15 ماسة مجانية",
              "شعار واتساب متاح لمده 4 أسابيع",
              "شعار تليجرام متاح لمده 4 أسابيع",
              "شعار الإنستجرام متاح لمده 4 أسابيع",
              "شعار X متاح لمده 4 أسابيع",
              "شعار فيس بوك متاح لمده 4 أسابيع",
              "شعار تيك توك متاح لمده 4 أسابيع",
              "شعار رسائل نصية متاح لمده 4 أسابيع",
              "شعار الإيميلات متاح لمده 4 أسابيع",
            ].map((benefit, index) => (
              <li key={index}>
                <Typography>{benefit}</Typography>
              </li>
            ))}
          </ul>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 5 },
            p: 2,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "24px", md: "30px" }, fontWeight: "600" }}
          >
            السعر
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "30px" },
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
              fontSize: { xs: "24px", md: "30px" },
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
            7.5 دولار
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default EditPackage;
