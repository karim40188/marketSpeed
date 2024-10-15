import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import whatsapp from "../assets/whatsapp_off.png";
import telegram from "../assets/telegram_on.png";
import tiktok from "../assets/tiktok_off.png";
import facebook from "../assets/facebook_off.png";
import twitter from "../assets/twitter_off.png";
import instagram from "../assets/instagram_on.png";
import sms from "../assets/sms_off.png";
import email from "../assets/email_off.png";

function Platforms() {
  let [icons] = useState([
    whatsapp,
    telegram,
    instagram,
    tiktok,
    twitter,
    facebook,
    sms,
    email,
  ]);

  return (
    <Box>
      <Typography sx={{ fontSize: "40px", color: "#114F80" }}>
        المنصات
      </Typography>
      <Box sx={{ p: "60px", display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: "30px",
            display: "flex",
          }}
        >
          جميع المنصات
        </Typography>

        <Box sx={{ width: "70%", mx: "auto" }}>
          <Grid2
            container
            spacing={5}
            sx={{ display: "flex", justifyContent: "", flexWrap: "wrap" }}
          >
            {icons.map((icon, index) => {
              return (
                <Grid2
                  key={index}
                  sx={{ maxWidth: "388px", maxHeight: "160px", cursor: 'pointer' }}
                >
                  <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
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

export default Platforms;
