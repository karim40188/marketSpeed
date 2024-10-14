import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  let sidebarWidth = "466px";
  return (
    <Box>
      <Sidebar />
      <Box sx={{ mr: sidebarWidth }}>
        <Navbar/>
        <Box sx={{p:'40px'}}>

        <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
