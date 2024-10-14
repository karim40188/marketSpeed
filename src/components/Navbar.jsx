import { Box, Button, Typography } from "@mui/material";
import { BsTranslate } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pl: "20px",
      }}
    >
      <Box sx={{ pr: "80px" }}>
        <Typography>أهلاً فيصل</Typography>
        <Typography
          sx={{
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          مسئول عام
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link to={'/login'}>
        <Button
          variant="contained"
          sx={{
            width: "207px",
            height: "54px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            textTransform:'capitalize'
          }}
        >
          
          Login
        </Button>
        </Link>
     
        <Box
          sx={{
            backgroundColor: "#114F80",
            width: "207px",
            height: "54px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              sx={{
                fontSize: "30px",
                color: "#F9D053",
              }}
            >
              <BsTranslate />
            </Box>
            <Typography sx={{ color: "#fff", fontSize: "14px" }}>
              اللغة (العربية)
            </Typography>
          </Box>

          <FaArrowDown
            style={{ width: "10.81px", height: "20.6px", color: "#fff" }}
          />
        </Box>
        <Box
          sx={{
            width: "56px",
            height: "54px",
            backgroundColor: "#114F80",
            fontSize: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#F9D053",
          }}
        >
          <IoIosNotifications />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
