import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";

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
    share
  ]);
  return (
    <Box sx={{ p: "60px",display:'flex',flexDirection:'column'}}>
      <Typography
        sx={{
          background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: "30px",
          display:'flex',
        //  justifyContent:'start'
        }}
      >
        بنارات المنصات
      </Typography>

      <Box sx={{  width:'60%',mx:'auto'}}>
        <Grid2
          container
          spacing={5}
          sx={{ display: "flex", justifyContent: "",flexWrap:'wrap'}}
        >
          {icons.map((icon, index) => {
            return (
              <Grid2 key={index} sx={{ maxWidth: "375px" ,maxHeight:'160px'}}>
                <Box component="img" src={icon} sx={{ width: "100%",height:'100%',  }}  />
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
}

export default Icons;
