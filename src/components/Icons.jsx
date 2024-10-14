import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Icons() {
  let [icons] = useState([
    { ar: "الواتس اب", en: "WhatsApp", icon: <FaWhatsapp />, bg: "#128C7F" },
    { ar: "التليجرام", en: "Telegram", icon: <FaTelegram />, bg: "#1E77BD" },
    {
      ar: "الانستيجرام",
      en: "Instagram",
      icon: <FaInstagram />,
      bg: "#49186FF9",
    },
    { ar: "التيك توك", en: "Tik Tok", icon: <FaTiktok />, bg: "#000000" },
    { ar: "X", en: "X", icon: <FaXTwitter />, bg: "#fff" },
    {
      ar: "الفيس بوك",
      en: "Facebook",
      icon: <FaFacebookSquare />,
      bg: "#163C92",
    },
    { ar: "الرسائل النصيه", en: "SMS", icon: <FaSms />, bg: "#C7A642" },
    {
      ar: "البريد الالكتروني",
      en: "E-MAil",
      icon: <MdOutlineEmail />,
      bg: "#1D6671",
    },
  ]);
  return (
    <Box sx={{ p: "40px" }}>
      <Typography
        sx={{
          background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: "30px",
        }}
      >
        بنارات المنصات
      </Typography>

      <Box sx={{ p: "40px" }}>
        <Grid2
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          {icons.map((icon) => {
            return (
              <Grid2 size={{ xs: 12, md: 5 }} key={icon.en}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "65%",
                  }}
                >
                  <Typography>{icon.ar}</Typography>
                  <Button
                    sx={{
                      width: "156px",
                      height: "32px",
                      background:
                        "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  >
                    ارفع صوره جديده
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    backgroundColor: `${icon.bg}`,
                    justifyContent: "end",
                    alignItems: "center",
                    width: "339px",
                    height: "116px",
                    p: "20px",
                    borderRadius: "15px",
                    color: "#fff",
                    gap: "20px",
                    my: "10px",
                  }}
                >
                  <Typography sx={{ fontSize: "35px" }}>{icon.en}</Typography>
                  <Box sx={{fontSize:'35px'}}>{icon.icon}</Box>
                </Box>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
}

export default Icons;
