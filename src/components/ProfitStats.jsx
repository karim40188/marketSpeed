import { Box, Button, Grid2, Typography } from "@mui/material";
import { t } from "i18next";
import { useState } from "react";

function ProfitStats() {
  const [activeFilter, setActiveFilter] = useState("هذا الاسبوع");
  let [activeLink, setActiveLink] = useState(false);

  const filters = [
    "هذا الاسبوع",
    "هذا الشهر",
    "منذ شهر",
    "منذ 6 أشهر",
    "هذه السنة",
  ];

  const allCards = {
    "هذا الاسبوع": [
      { price: "40,000", name: "المحفظة الذهبية" },
      { price: "80,000", name: "اشتراك الباقات" },
    ],
    "هذا الشهر": [
      { price: "200,000", name: "المحفظة البلاتينية" },
      { price: "120,000", name: "اشتراك الباقات" },
    ],
    "منذ شهر": [
      { price: "320,000", name: "المحفظة الماسية" },
      { price: "180,000", name: "اشتراك الباقات" },
    ],
    "منذ 6 أشهر": [
      { price: "800,000", name: "المحفظة البلاتينية" },
      { price: "1,000,000", name: "اشتراك الباقات" },
    ],
    "هذه السنة": [
      { price: "1,500,000", name: "المحفظة الماسية" },
      { price: "2,000,000", name: "اشتراك الباقات" },
    ],
  };

  const filteredCards = allCards[activeFilter];

  return (
    <Box>
      <Typography sx={{ color: "#114F80", fontSize: "40px" ,fontWeight:'600',mb:'30px'}}>
        إحصائيات مكسب التطبيق
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: {xs:"center",md:"space-between"},
          flexWrap:'wrap',
          
        }}
      >
        {filters.map((filter) => (
          <Button
            sx={{
              width: {xs:'100%',md:"156px"},
              height: "57px",
              fontSize: "20px",
              borderRadius: "10px",
              fontFamily: "Tanseek Modern Pro Arabic",
              backgroundColor:'#fff',
              fontWeight:'600'
            }}
            key={filter}
            onClick={(e)=>{
                if (activeLink) {
                    activeLink.classList.remove("active");
                  }
                  e.target.classList.add("active");
                  setActiveLink(e.target);
                  setActiveFilter(filter)
            }}
                
                
                
          >
            {filter}
          </Button>
        ))}
      </Box>

      <Grid2 container spacing={4} sx={{ my: "30px" }} justifyContent="center">
        {filteredCards.map((card) => (
          <Grid2
            key={card.name}
            sx={{
              width: {xs:'100%',md:"220px"},
              height: "281px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: "174px",
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
              <Typography sx={{ fontSize: "30px" }}>{card.price}</Typography>
              <Typography sx={{ fontSize: "30px" }}>ر.س</Typography>
            </Box>
            <Typography sx={{ fontSize: "30px", color: "#114F80" }}>
              {t(card.name)}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default ProfitStats;
