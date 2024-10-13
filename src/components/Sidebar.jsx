import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
function Sidebar() {
  return (
    <Box
      sx={{
        backgroundColor: "#114F80",
        width: "466px",
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        justfiyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "200px", height: "auto" }}>
        <Box sx={{ width: "100%" }} component="img" src={logo} />
      </Box>

      <Box>
        <Typography sx={{ color: "#fff",textAlign:'center' ,}}>التطبيق</Typography>

        <Box sx={{backgroundColor:'#EDE8E9',width:'354px',height:'388px',borderRadius:'20px'}}> 

        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
