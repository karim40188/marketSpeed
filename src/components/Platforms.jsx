import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSms } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";


 
function Platforms() {


  const { t } = useTranslation();

  let [icons] = useState([
    {
      name: "WhatsApp",
      color: "#fff",
      bgColor: "#128C7F",
      hoverBgColor: "#18B9A8",
      icon: <IoLogoWhatsapp />,
    },
    {
      name: "Telegram",
      color: "#fff",
      bgColor: "#1E77BD",
      hoverBgColor: "#3091DE",
      icon: <FaTelegram />,
    },
    {
      name: "Instagram",
      color: "#fff",
      bgColor: "#BC548A",
      hoverBgColor: "#9A3E6F",
      icon: <FaInstagramSquare />,
    },
    {
      name: "TikTok",
      color: "#fff",
      bgColor: "#000000",
      hoverBgColor: "#1A1A1A",
      icon: <IoLogoTiktok />,
    },
    {
      name: "X",
      color: "#000",
      bgColor: "#FFFFFF",
      hoverBgColor: "#E6E6E6",
      icon: <FaXTwitter />,
    },
    {
      name: "Facebook",
      color: "#fff",
      bgColor: "#163C92",
      hoverBgColor: "#1D4EBE",
      icon: <FaSquareFacebook />,
    },
    {
      name: "SMS",
      color: "#fff",
      bgColor: "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
      hoverBgColor: "",
      icon: <FaSms />,
    },
    {
      name: "Email",
      color: "#fff",
      bgColor: "#1D6671",
      hoverBgColor: "#278B9A",
      icon: <MdEmail />,
    },
    {
      name: "Share",
      color: "#000",
      bgColor: "#fff",
      hoverBgColor: "#E6E6E6",
      icon: <FaShareAlt />,
    },
  ]);

 
  return (
    <Box>
      <Typography sx={{ fontSize: "40px", color: "#114F80" ,fontWeight:'600'}}>
        {t('platforms')}
      </Typography>
      <Box sx={{ p: "40px", display: "flex", flexDirection: "column" }}>
        <Typography
        className="text-gradient"
          sx={{
            mb: "30px",
            display: "flex",
          }}
        >
         {t('all_platforms')}
        </Typography>

        <Box sx={{ width: "100%", mx: "auto", p: "20px" }}>
            <Grid2 container spacing={5} sx={{ display: "flex", flexWrap: "wrap" }}>
              {icons.map((icon, index) => (
                <Grid2 key={index}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "10px",
                      }}
                    >
                      <Typography>{t(icon.name)}</Typography>
                      <Button
                        sx={{
                          width: "156px",
                          height: "32px",
                          color: "#fff",
                          px: "5px",
                          fontFamily: "Tanseek Modern Pro Arabic",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "20px",
                          borderRadius: "6px",
                          background:
                            "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                        }}
                      >
                        {t("add_new_video")}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "339px",
                      height: "auto",
                      p: "20px",
                      background: icon.bgColor,
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "30px",
                      cursor: "pointer",
                      "&:hover": {
                        background: icon.hoverBgColor,
                      },
                    }}
                  >
                    <Typography sx={{ color: icon.color, fontSize: "35px" }}>
                      {t(icon.name)}
                    </Typography>
                    <Box sx={{ fontSize: "30px" }}>{icon.icon}</Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Box>
      </Box>
    </Box>
  );
}

export default Platforms;
