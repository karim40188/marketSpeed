import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import profile_img from "../assets/profile_img.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ShowSupervisor() {


  let {t}=useTranslation()
  let [ShowSupervisor] = useState([
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },
    { name: "ahmed_mohamed" },

  ]);


  let navigate= useNavigate()
  return (
    <Box sx={{ width: "95%",mx:'auto' }}>
   

      <Box
        sx={{ display: "flex", justifyContent: "space-between", my: "30px" }}
      >
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80",fontWeight:'600' }}
        >
        {t("view_admins")}
        </Typography>
        <Box sx={{ position: "relative" }}>
          <TextField
            placeholder={"بحث بالاسم"}
            sx={{ maxWidth: "597px", backgroundColor: "#fff" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "10px",
              width: "33.6px",
              height: "34.8px",
            }}
          >
            <IoSearchOutline
              style={{
                width: "100%",
                height: "100%",
                color: "#937B31",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "40px", p: "25px" }}>
        {ShowSupervisor.map((supervisor, index) => {
          return (
            <Box
              key={index}
              sx={{
                maxWidth: "247px",
                height: "331px",
                backgroundColor: "#FFFFFF",
                borderRadius: "15px",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: "20px",
                textAlign: "center",
                gap: "10px",
                cursor: "pointer",
              }}
              onClick={()=>{
                navigate('/show-admin-file')
              }}
            >
              <Box sx={{ width: "108px", height: "108px" }}>
                <Box
                  component="img"
                  src={profile_img}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>

              <Typography>{t(supervisor.name)}</Typography>
              <Typography
                sx={{
                  background:
                    "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "20px",
                }}
              >
                {t("admin")}
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "#114F80" }}>
               {t('location')}   <br />
                {t("team_work_20_marketer")}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default ShowSupervisor;
