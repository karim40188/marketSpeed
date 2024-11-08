import { Box, Button, TextField, Typography } from "@mui/material";
import profile_img from "../assets/profile_img.png";
import send_btn from "../assets/send_btn.png";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function SupportSession() {
  let [value, setValue] = useState("");
  let { t } = useTranslation();
  return (
    <Box
      sx={{ width: { xs: "100%", md: "100%" }, px: { xs: "10px", md: "0" },mx:'auto' }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "40px" },
            color: "#114F80",
            fontWeight: "600",
          }}
        >
          {t("support_chat")}
        </Typography>

        <Button
          sx={{
            fontSize: "25px",
            fontFamily: "Tanseek Modern Pro Arabic",
            width: "156px",
            height: "32px",
            backgroundColor: "#CC0000",
            borderRadius: "6px",
            color: "#fff",
            px: "30px",
            py: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {t("delete")}
        </Button>
      </Box>

      <Box sx={{ px: "20px", mt: "30px" }}>
        <Box sx={{ mb: "100px" }}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              p: "20px",
              backgroundColor: "#D9D9D9",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ width: "66px", height: "66px" }}>
                <Box
                  sx={{ width: "100%", height: "100%" }}
                  component="img"
                  src={profile_img}
                />
              </Box>
              <Typography sx={{ fontSize: { xs: "25px", md: "40px" } }}>
                {t("ahmed_mohamed")}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ textAlign: "center", my: "10px" }}>
            12/10/2024
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "374px",
                height: "auto",
                backgroundColor: "#fff",
                position: "relative",
                borderRadius: "10px 10px 10px 0",
                p: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "30px",
                alignSelf: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Titillium Web",
                  fontWeight: "600",
                }}
              >
                {t("ahmed_mohamed")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Titillium Web",
                  fontWeight: "300",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, corrupti.
              </Typography>
              <Box
                sx={{
                  borderTop: "40px solid #fff",
                  borderLeft: "0px solid transparent",
                  borderRight: "50px solid transparent",
                  height: 0,
                  width: 0,
                  position: "absolute",
                  top: "100%",
                  left: "0",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "374px",
                height: "auto",
                backgroundColor: "#114F80",
                position: "relative",
                borderRadius: "10px 10px 0px 10px",
                p: "20px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
                color: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Titillium Web",
                  fontWeight: "600",
                }}
              >
                {t("support_employee")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontFamily: "Titillium Web",
                  fontWeight: "300",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, velit.
              </Typography>
              <Box
                sx={{
                  borderTop: "40px solid #114F80",
                  borderLeft: "50px solid transparent",
                  borderRight: "0px solid transparent",
                  borderBottom: "20px solid transparent",
                  height: 0,
                  width: 0,
                  position: "absolute",
                  top: "100%",
                  right: "0",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "126px",
            backgroundColor: "#114F80",
            display: "flex",
            alignItems: "center",
            p: "20px",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "61px",
              height: "51px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ width: "36.51px", height: "31.5px" }}
              component="img"
              src={send_btn}
            />
          </Box>

          <textarea
            onChange={(e) => {
              setValue(e.target.value);
            }}
            style={{
              width: "100%",
              maxWidth: "604px",
              height: "100px",
              fontSize: "20px",
              // borderRadius: "15px",
            }}
            value={value}
          />
          <Box
            sx={{
              fontSize: "80px",
              color: "#EFC750",
              fontFamily: "Titillium Web",
            }}
          >
            <FaPlus />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SupportSession;
