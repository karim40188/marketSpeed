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
function Platforms() {
  const { t } = useTranslation();

  let [icons] = useState([
    {
      name: "WhatsApp",
      iconColor: "#ffffff", // Keep icons white to ensure visibility
      bgColor: "#075E54", // WhatsApp dark green
      hoverBgColor: "#128C7F", // Hover effect (lighter green)
      icon: <IoLogoWhatsapp />,
    },
    {
      name: "Telegram",
      iconColor: "#ffffff", // White icon color for contrast
      bgColor: "#006DB6", // Telegram dark blue
      hoverBgColor: "#4C8BF5", // Hover effect (lighter blue)
      icon: <FaTelegram />,
    },
    {
      name: "Instagram",
      iconColor: "#ffffff", // White icon color for contrast
      bgColor: "#C13584", // Instagram purple
      hoverBgColor: "#9B349B", // Hover effect (darker purple)
      icon: <FaInstagramSquare />,
    },
    {
      name: "TikTok",
      iconColor: "#ffffff", // White icon color for contrast
      bgColor: "#000000", // TikTok black background
      hoverBgColor: "#333333", // Hover effect (dark gray)
      icon: <IoLogoTiktok />,
    },
    {
      name: "X",
      iconColor: "#ffffff", // White icon color for contrast
      bgColor: "#1DA1F2", // Twitter blue
      hoverBgColor: "#1B95E0", // Hover effect (darker blue)
      icon: <FaXTwitter />,
    },
    {
      name: "Facebook",
      iconColor: "#ffffff", // White icon color for contrast
      bgColor: "#3b5998", // Facebook blue
      hoverBgColor: "#1D4EBE", // Hover effect (darker blue)
      icon: <FaSquareFacebook />,
    },
    {
      name: "SMS",
      iconColor: "#000000", // Dark icon color for visibility on light background
      bgColor: "#F9D053", // SMS yellow background
      hoverBgColor: "#937B31", // Hover effect (darker yellow)
      icon: <FaSms />,
    },
    {
      name: "Email",
      iconColor: "#ffffff", // White icon color for contrast
      bgColor: "#D44638", // Email red background
      hoverBgColor: "#E54B3A", // Hover effect (darker red)
      icon: <MdEmail />,
    },
    {
      name: "Share",
      iconColor: "#000000", // Dark icon color for visibility
      bgColor: "#E4E4E4", // Light gray background
      hoverBgColor: "#C4C4C4", // Hover effect (darker gray)
      icon: <FaShareAlt />,
    },
  ]);


  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
      <Typography
        sx={{ fontSize: "40px", color: "#114F80", fontWeight: "600" }}
      >
        {t("platforms")}
      </Typography>
      <Box sx={{ p: "40px", display: "flex", flexDirection: "column" }}>
        <Typography
          className="text-gradient"
          sx={{
            mb: "30px",
            display: "flex",
          }}
        >
          {t("all_platforms")}
        </Typography>

        <Box sx={{ width: "100%", mx: "auto", p: "20px" }}>
          <Grid2
            container
            spacing={5}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
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
                    justifyContent: "space-between", // Align icon and text horizontally
                    gap: "20px", // Adjust space between icon and name
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
  );
}

export default Platforms;
