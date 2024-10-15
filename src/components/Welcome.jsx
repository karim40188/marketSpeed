import { Box } from "@mui/material";
import { motion } from "framer-motion";
import cardImg from "../assets/cardImg.png";

function Welcome() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{  }}>
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          style={{width: "264px", height: "536px"}}
        >
          <Box
            component="img"
            src={cardImg}
            sx={{
              width: "100%",
              height: "100%",

              backgroundSize: "cover",
              objectFit: "cover",
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
}

export default Welcome;
