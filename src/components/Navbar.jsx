import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { BsTranslate } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { Context } from "./Context";

function Navbar() {
  let { sidebarOpen, setSidebarOpen } = useContext(Context);
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pl: { xs: "10px", md: "20px" },
        pr: { xs: "10px", md: "80px" },
        py:'10px',
        flexDirection: { xs: "row", md: "row" },
        gap: { xs: "10px", md: "0" },

        width:'100%',
      }}
    >
      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography>أهلاً فيصل</Typography>
        <Typography
          sx={{
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "16px", md: "20px" },
          }}
        >
          مسئول عام
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "5px", md: "10px" },
          flexDirection: { xs: "row", md: "row" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#114F80",
            width: { xs: "100%", md: "207px" },
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

        <Box
          sx={{ fontSize: "40px" }}
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <IoIosMenu />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
