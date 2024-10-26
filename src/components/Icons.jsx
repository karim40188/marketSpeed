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

function Icons() {
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
    <Box sx={{ p: "60px", display: 'flex', flexDirection: 'column' }}>
      <Typography
        sx={{
          background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: "30px",
          display: 'flex',
        }}
      >
        بنارات المنصات
      </Typography>

      <Box sx={{ width: '100%', mx: 'auto' }}>
        <Grid2 container spacing={5} sx={{ display: "flex", flexWrap: 'wrap' }}>
          {icons.map((icon, index) => {
            return (
              <Grid2 key={index} sx={{ maxWidth: "375px", maxHeight: '160px' }}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} // الإعدادات الأولية
                  whileInView={{ opacity: 1, scale: 1 }} // كيف تظهر العناصر
                  transition={{ duration: 0.3 }} // مدة الانتقال
                >
                  <Box component="img" src={icon} sx={{ width: "100%", height: '100%' }} />
                </motion.div>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
}

export default Icons;
