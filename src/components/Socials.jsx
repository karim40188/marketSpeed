import { Box, Button, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Socials() {
  let { t } = useTranslation();
  let [socials] = useState([
    "Telegram",
    "Instagram",
    "TikTok",
    "X",
    "Facebook",
    "Youtube",
    "Snapchat",
    "Snapchat",
    "SMS",
    "Email",
  ]);

  return (
    <Box>
      <Typography
        sx={{ fontSize: "40px", color: "#114F80", fontWeight: "700" }}
      >
        {t("marketing_speed_account_page")}
      </Typography>
      <Box sx={{ p: "40px" }}>
        <Typography
          className="text-gradient"
          sx={{
            fontSize: "30px",
            mb: "30px",
          }}
        ></Typography>
        <Grid2 container spacing={4}>
          {socials.map((social) => {
            return (
              <Grid2 key={social} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography> {t(social)}</Typography>
                  <Button
                    sx={{
                      width: "156px",
                      height: "32px",
                      background:
                        "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  >
                    {t("save")}
                  </Button>
                </Box>

                <motion.div
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    sx={{
                      width: "auto",
                      height: "110px",
                      my: "10px",
                      border: "3px solid #114F80",
                      borderRadius: "15px",
                      textAlign: "left",
                      direction: "ltr",
                      py: "5px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      style={{
                        fontSize: "25px",
                        fontFamily: "Tanseek Modern Pro Arabic",
                      }}
                    >
                      https://www.figma.com/design/
                      epS6m7H0obCBxgPOrgZdlc/Untitl.................
                    </Link>
                  </Box>
                </motion.div>
              </Grid2>
            );
          })}
          <Box></Box>
        </Grid2>
<Typography sx={{textAlign:'center'}}>حساب تواصل</Typography>
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography> {t("mobile")}</Typography>
              <Button
                sx={{
                  width: "156px",
                  height: "32px",
                  background:
                    "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                  color: "#fff",
                  borderRadius: "6px",
                }}
              >
                {t("save")}
              </Button>
            </Box>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  width: "auto",
                  height: "110px",
                  my: "10px",
                  border: "3px solid #114F80",
                  borderRadius: "15px",
                  textAlign: "left",
                  direction: "ltr",
                  py: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  style={{
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                  }}
                >
                  https://www.figma.com/design/
                  epS6m7H0obCBxgPOrgZdlc/Untitl.................
                </Link>
              </Box>
            </motion.div>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography> {t("whatsApp")}</Typography>
              <Button
                sx={{
                  width: "156px",
                  height: "32px",
                  background:
                    "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                  color: "#fff",
                  borderRadius: "6px",
                }}
              >
                {t("save")}
              </Button>
            </Box>

            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  width: "auto",
                  height: "110px",
                  my: "10px",
                  border: "3px solid #114F80",
                  borderRadius: "15px",
                  textAlign: "left",
                  direction: "ltr",
                  py: "5px",
                  display: "flex",
                  alignItems: "center",
                
                }}
              >
                <Link
                  style={{
                    fontSize: "25px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                  }}
                >
                  https://www.figma.com/design/
                  epS6m7H0obCBxgPOrgZdlc/Untitl.................
                </Link>
              </Box>
            </motion.div>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default Socials;
