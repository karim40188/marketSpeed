import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";

function UserStats() {
  const [activeFilter, setActiveFilter] = useState("هذا الاسبوع");
  const [activeLink, setActiveLink] = useState(false);

  const filters = [
    "هذا الاسبوع",
    "هذا الشهر",
    "منذ شهر",
    "منذ 6 أشهر",
    "هذه السنة",
  ];

  const allCards = {
    "هذا الاسبوع": [{ number: "40,000" }],
    "هذا الشهر": [{ number: "200,000" }],
    "منذ شهر": [{ number: "320,000" }],
    "منذ 6 أشهر": [{ number: "800,000" }],
    "هذه السنة": [{ number: "1,500,000" }],
  };

  const filteredCards = allCards[activeFilter];

  return (
    <Box>
      <Typography sx={{ color: "#114F80", fontSize: { xs: "30px", md: "40px" } }}>
        إحصائيات مكسب التطبيق
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
        }}
      >
        {filters.map((filter) => (
          <Button
            sx={{
              width: { xs: "auto", md: "158px" },
              height: "57px",
              fontSize: { xs: "16px", md: "20px" },
              borderRadius: "10px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
            key={filter}
            onClick={(e) => {
              if (activeLink) {
                activeLink.classList.remove("active");
              }
              e.target.classList.add("active");
              setActiveLink(e.target);
              setActiveFilter(filter);
            }}
          >
            {filter}
          </Button>
        ))}
      </Box>

      <Grid2 container spacing={4} sx={{ my: "30px" }} justifyContent="center">
        {filteredCards.map((card, index) => (
          <Grid2
            key={index}
            xs={12} 
            sm={6} 
            md={4}
            sx={{
              maxWidth: { xs: "100%", md: "659px" },
              height: "281px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              borderRadius: "15px",
              p:'40px'
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "521.21px" },
                height: "169px",
                borderRadius: "15px",
                background: "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: { xs: "24px", md: "30px" } }}>{card.number}</Typography>
              <Typography sx={{ fontSize: { xs: "24px", md: "30px" } }}>عميل</Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: "24px", md: "30px" }, color: "#114F80" }}>
              {card.name}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default UserStats;
