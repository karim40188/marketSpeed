import { Box } from "@mui/material";
// import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {

  return (
    <Box sx={{display:'flex'}}>
      <Sidebar />
      <Box sx={{width:'100%' }}>
        <Navbar />
        <Box sx={{ px: "30px",pt:'40px' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
