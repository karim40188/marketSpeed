import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {

  return (
    <Box>
      <Sidebar />
      <Box sx={{mr:{md: "400px",lg:'466px'}  }}>
        <Navbar />
        <Box sx={{ p: "40px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
