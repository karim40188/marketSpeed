import { Box, Typography } from "@mui/material";
import share from "../assets/share.png";
import share_logo from "../assets/share-logo.png";
function ShareWithFriends() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "40px", color: "#114F80", fontWeight: "700" }}
      >
        شارك مع الأصدقاء
      </Typography>

      <Typography
        sx={{
          background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "16px", md: "20px" },
          mt: "100px",
        }}
      >
        مقطع الفيديو أو صوره
      </Typography>

      <Box sx={{ p: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignitems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            component="img"
            src={share}
            sx={{ width: { xs: "100%", md: "384px" }, height: "163px" }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Typography>عدد الماسات</Typography>

            <Box
              sx={{
                width: "174px",
                border: "1px solid #000000",
                height: "62px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>40 ماسة</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{ maxWidth: "293px", height: "173px", mr: "auto", mt: "100px" }}
        >
          <Box
            component="img"
            src={share_logo}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Typography
          sx={{
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "16px", md: "20px" },
            mt: "100px",
          }}
        >
          روابط التطبيق
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <Typography>رابط أبل</Typography>

            <Box
              sx={{
                width: { xs: "auto", md: "342px" },
                mx: "auto",
                height: "79px",
                border: "3px solid #114F80",
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  lineHeight: "30px",
                  fontSize: "25px",
                  color: "#114F80",
                }}
              >
                https://www.figma.com/design/ epS6m7H0obCBxgPOrgZdlc/Untitl..
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <Typography>رابط جوجل</Typography>

            <Box
              sx={{
                width: { xs: "auto", md: "342px" },
                mx: "auto",
                height: "79px",
                border: "3px solid #114F80",
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  lineHeight: "30px",
                  fontSize: "25px",
                  color: "#114F80",
                }}
              >
                https://www.figma.com/design/ epS6m7H0obCBxgPOrgZdlc/Untitl..
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShareWithFriends;
