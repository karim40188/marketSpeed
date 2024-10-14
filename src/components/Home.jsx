import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import cardImg from "../assets/cardImg.png";
import Icons from "./Icons";

function Home() {
  let [cardsAr] = useState([
    { visitor: "أول بانر", upload: "أرفع صوره جديدة", img: cardImg },
    { visitor: "ثانى زائر", upload: "أرفع صوره جديدة", img: cardImg },
    { visitor: "ثالث زائر", upload: "أرفع صوره جديدة", img: cardImg },
    { visitor: "رابع زائر", upload: "أرفع صوره جديدة", img: cardImg },
  ]);
  let [cardsEn] = useState([
    { visitor: "أول بانر", upload: "أرفع صوره جديدة", img: cardImg },
    { visitor: "ثانى زائر", upload: "أرفع صوره جديدة", img: cardImg },
    { visitor: "ثالث زائر", upload: "أرفع صوره جديدة", img: cardImg },
    { visitor: "رابع زائر", upload: "أرفع صوره جديدة", img: cardImg },
  ]);
  return (
    <Box>
      <Typography sx={{ fontSize: "40px", color: "#114F80" }}>
        الصفحة الرئيسية
      </Typography>
      <Box sx={{ p: "40px" }}>
        <Typography
          sx={{
            fontSize: "30px",
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: "30px",
          }}
        >
          البنارات المتحركة عربى
        </Typography>

        <Grid2 container spacing={4}>
          {cardsAr.map((card) => {
            return (
              <Grid2 size={{ xs: 12, md: 6 }} key={card.visitor}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography> {card.visitor}</Typography>
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
                    {card.upload}
                  </Button>
                </Box>

                <Box sx={{ width: "100%", height: "auto", my: "10px" }}>
                  <Box
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    src={card.img}
                  />
                </Box>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
      <Box sx={{ p: "40px" }}>
        <Typography
          sx={{
            fontSize: "30px",
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: "30px",
          }}
        >
          البنارات المتحركة إنجليزى
        </Typography>

        <Grid2 container spacing={4}>
          {cardsEn.map((card) => {
            return (
              <Grid2 size={{ xs: 12, md: 6 }} key={card.visitor}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography> {card.visitor}</Typography>
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
                    {card.upload}
                  </Button>
                </Box>

                <Box sx={{ width: "100%", height: "auto", my: "10px" }}>
                  <Box
                    sx={{ width: "100%", height: "100%" }}
                    component="img"
                    src={card.img}
                  />
                </Box>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>

      <Box
        sx={{
          border: " 8px solid #114F80",
          maxWidth: "676.01px",
          mx: "auto",
        }}
      ></Box>

      <Icons/>
    </Box>
  );
}

export default Home;
