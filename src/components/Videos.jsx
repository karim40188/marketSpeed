import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion"; // استيراد motion من framer-motion

import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";
import tiktok from "../assets/tiktok.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import sms from "../assets/sms.png";
import email from "../assets/email.png";
import share from "../assets/share.png";

function Videos() {
  let [icons] = useState([
    whatsapp,
    telegram,
    instagram,
    tiktok,
    twitter,
    facebook,
    sms,
    email,
    share,
  ]);

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        مقاطع الفيديو
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", p: "20px" }}>
        <Typography
          className="text-gradient"
          sx={{
            my: "30px",
            display: "flex",
          }}
        >
          فيديوهات المنصات عربى
        </Typography>

        <Box sx={{ width: "100%", mx: "auto", p: "20px" }}>
          <Grid2
            container
            spacing={5}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {icons.map((icon, index) => {
              return (
                <Grid2
                  key={index}
                  sx={{ maxWidth: "375px", maxHeight: "160px" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} // الإعدادات الأولية
                    whileInView={{ opacity: 1, scale: 1 }} // كيف تظهر العناصر
                    transition={{ duration: 0.3 }} // مدة الانتقال
                  >
                    <Box
                      component="img"
                      src={icon}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </motion.div>
                </Grid2>
              );
            })}
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
          فيديوهات المنصات إنجليزى
        </Typography>

        <Box sx={{ width: "100%", mx: "auto", p: "20px" }}>
          <Grid2
            container
            spacing={5}
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {icons.map((icon, index) => {
              return (
                <Grid2
                  key={index}
                  sx={{ maxWidth: "375px", maxHeight: "160px" }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} // الإعدادات الأولية
                    whileInView={{ opacity: 1, scale: 1 }} // كيف تظهر العناصر
                    transition={{ duration: 0.3 }} // مدة الانتقال
                  >
                    <Box
                      component="img"
                      src={icon}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </motion.div>
                </Grid2>
              );
            })}
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}

export default Videos;
