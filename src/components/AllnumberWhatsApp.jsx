import { Box,  Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AllnumberWhatsApp() {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
      <Typography sx={{ fontSize: "36px", color: "#114F80", fontWeight: "600", textAlign: "center" }}>
        أرقام الواتساب لكل الدول
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: 3,
          width: "100%",
          maxWidth: "800px",
          flexWrap: "wrap",
        }}
      >
        {/* WhatsApp Button */}
        <motion.div
          style={{
            width: "340px",
            fontSize: "40px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#128C7F",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => navigate("/add-country-numbers")}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#0d7a61", transition: { duration: 0.3 } }}
        >
          أرقام الواتساب
        </motion.div>

        {/* Another WhatsApp Button */}
        <motion.div
          style={{
            width: "340px",
            fontSize: "40px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#27A7E7",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => navigate("/add-country-numbers")}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#1b8db7", transition: { duration: 0.3 } }}
        >
          أرقام الواتساب
        </motion.div>
      </Box>
    </Box>
  );
}

export default AllnumberWhatsApp;
