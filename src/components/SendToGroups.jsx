import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function SendToGroups() {
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
            fontSize: "40px",
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
            navigate("/whatsapp-groups");
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, borderRadius: [0, 10, 20, 30, 10, 15] }}
        >
          الواتساب
        </motion.div>
        <Box
          sx={{
            width: "45%",
            fontSize: "40px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/telegram-groups");
          }}
        >
          التليجرام
        </Box>
      </Box>
    </Box>
  );
}

export default SendToGroups;
