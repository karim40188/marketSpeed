import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function AllnumberWhatsApp() {
  const navigate = useNavigate();
  // /create-groups
  return (
    <Box>
     

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          mt:"100px"
        }}
      >
        <motion.div
          // component={motion.button}
          style={{
            width: "340px",
            fontSize: "50px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#128C7F",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: "10px",
            borderRadius: "10px",
          }}
          onClick={() => {
            navigate("/add-country-numbers");
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, borderRadius: [0, 10, 20, 30, 10, 15] }}
        >
          الواتساب
        </motion.div>
        <motion.div
          // component={motion.button}
          style={{
            width: "340px",
            fontSize: "50px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#27A7E7",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: "10px",
            borderRadius: "10px",
          }}
          onClick={() => {
            navigate("/add-country-numbers");
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, borderRadius: [0, 10, 20, 30, 10, 15] }}
        >
          الواتساب
        </motion.div>
      
      </Box>
    </Box>
  );
}

export default AllnumberWhatsApp;
