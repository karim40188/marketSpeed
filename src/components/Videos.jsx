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
import {motion} from "framer-motion"

function Videos() {
  const { t } = useTranslation();

  let [icons] = useState([
    {
      name: "WhatsApp",
      iconColor: "#ffffff", 
      bgColor: "#075E54", 
      hoverBgColor: "#128C7F", 
      icon: <IoLogoWhatsapp />,
    },
    {
      name: "Telegram",
      iconColor: "#ffffff", 
      bgColor: "#006DB6", 
      hoverBgColor: "#4C8BF5", 
      icon: <FaTelegram />,
    },
    {
      name: "Instagram",
      iconColor: "#ffffff", 
      bgColor: "#C13584", 
      hoverBgColor: "#9B349B", 
      icon: <FaInstagramSquare />,
    },
    {
      name: "TikTok",
      iconColor: "#ffffff", 
      bgColor: "#000000", 
      hoverBgColor: "#333333", 
      icon: <IoLogoTiktok />,
    },
    {
      name: "X",
      iconColor: "#ffffff", 
      bgColor: "#1DA1F2", 
      hoverBgColor: "#1B95E0", 
      icon: <FaXTwitter />,
    },
    {
      name: "Facebook",
      iconColor: "#ffffff", 
      bgColor: "#3b5998", 
      hoverBgColor: "#1D4EBE", 
      icon: <FaSquareFacebook />,
    },
    {
      name: "SMS",
      iconColor: "#000000", 
      bgColor: "#F9D053", 
      hoverBgColor: "#937B31", 
      icon: <FaSms />,
    },
    {
      name: "Email",
      iconColor: "#ffffff", 
      bgColor: "#D44638", 
      hoverBgColor: "#E54B3A", 
      icon: <MdEmail />,
    },
    {
      name: "Share",
      iconColor: "#000000", 
      bgColor: "#E4E4E4", 
      hoverBgColor: "#C4C4C4", 
      icon: <FaShareAlt />,
    },
  ]);


  return (
    <>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
          {t("videos")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", p: "20px" }}>
          <Typography
            className="text-gradient"
            sx={{
              my: "30px",
              display: "flex",
            }}
          >
            {t("platform_videos_ar")}
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
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ opacity: 1 }}
              >
                <Box
                  sx={{
                    width: "339px",
                    height: "auto",
                    p: "20px",
                    background: icon.bgColor,
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", 
                    gap: "20px", 
                    cursor: "pointer",
                    "&:hover": {
                      background: icon.hoverBgColor,
                    },
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "35px",
                      color: icon.iconColor,
                    }}
                  >
                    {icon.icon}
                  </Box>
                  <Typography sx={{ fontSize: "18px", color: icon.iconColor }}>
                    {t(icon.name)} {/* Display the name beside the icon */}
                  </Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
            </Grid2>
          </Box>

          <Typography
            className="text-gradient"
            sx={{
              mb: "30px",
              display: "flex",
              mt: "50px",
            }}
          >
            {t("platform_videos_en")}
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
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileInView={{ opacity: 1 }}
              >
                <Box
                  sx={{
                    width: "339px",
                    height: "auto",
                    p: "20px",
                    background: icon.bgColor,
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", 
                    gap: "20px", 
                    cursor: "pointer",
                    "&:hover": {
                      background: icon.hoverBgColor,
                    },
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "35px",
                      color: icon.iconColor,
                    }}
                  >
                    {icon.icon}
                  </Box>
                  <Typography sx={{ fontSize: "18px", color: icon.iconColor }}>
                    {t(icon.name)} {/* Display the name beside the icon */}
                  </Typography>
                </Box>
              </motion.div>
            </Grid2>
          ))}
            </Grid2>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Videos;
