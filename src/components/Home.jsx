import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import ceos from "../assets/some_stats/ceos.png";
import subscribers from "../assets/some_stats/subscribers.png";
import users from "../assets/some_stats/users.png";
import monthly_sub from "../assets/some_stats/monthly_sub.png";
import yearly_sub from "../assets/some_stats/yearly_sub.png";
import discounts from "../assets/some_stats/discount.png";
import { motion } from "framer-motion";

function Home() {
  let [someStats] = useState([
    ceos,
    subscribers,
    users,
    monthly_sub,
    yearly_sub,
    discounts,
  ]);

  return (
    <Box >
      <Typography
        sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80" }}
      >
        بعض الأحصائيات
      </Typography>
      <Grid2
        container
        sx={{
          p: "20px",
          width: { xs: "90%", sm: "80%" },
          justifyContent: "end",
        }}
        spacing={5}
      >
        {someStats.map((status, index) => {
          return (
            <Grid2 size={{ xs: 6, sm: 4, md: 4 }} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box
                  component="img"
                  src={status}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    boxShadow: 2,
                  }}
                />
              </motion.div>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}

export default Home;
