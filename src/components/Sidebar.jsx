import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  let [activeLink, setActiveLink] = useState(false);
  let [appDropDown, setAppDropDown] = useState(false);
  let [statsDropDown, setStatsDropDown] = useState(false);

  let [dropDownLinks] = useState([
    { name: "بنرات التطبيق", path: "/" },
    { name: "المقاطع الفديو", path: "/videos" },
    { name: "المنصات", path: "/Platforms" },
    { name: "الشاشه الترحيب", path: "/Welcome" },
    { name: "سياسه التطبيق", path: "/Policy" },
  ]);

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
        gap: "30px",
      
        
      }}
    >
      <Box sx={{ width: "260px", height: "331px", cursor: "pointer" }}>
        <Box
          sx={{ width: "100%", height: "100%" }}
          component="img"
          src={logo}
        />
      </Box>

      {/* التطبيق */}
      <Box>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setAppDropDown(!appDropDown);
          }}
        >
          التطبيق
        </Typography>
        {appDropDown ? (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: "354px",
              height: "388px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              color: "#114F80",
              px: "10px",
              py: "30px",
            }}
          >
            {dropDownLinks.map((link) => {
              return (
                <Link
                to={link.path}
                  className="link"
                  key={link.name}
                  onClick={(e) => {
                    if (activeLink) {
                      activeLink.classList.remove("active");
                    }
                    e.target.classList.add("active");
                    setActiveLink(e.target);
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </Box>
        ) : (
          ""
        )}
      </Box>

      {/* الاحصائيات */}
      <Box>
        <Typography
          sx={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
            mb: "5px",
          }}
          onClick={() => {
            setStatsDropDown(!statsDropDown);
          }}
        >
          الاحصائيات
        </Typography>
        {statsDropDown ? (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: "354px",
              height: "175px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              color: "#114F80",
              px: "10px",
              py: "30px",
            }}
          >
            <Link
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              احصائيات مكسب التطبيق
            </Link>
            <Link
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              احصائيات مستخدمين التطبيق
            </Link>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Sidebar;
