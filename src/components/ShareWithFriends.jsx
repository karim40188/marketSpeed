import { Box, Button, Typography } from "@mui/material";
import share_logo from "../assets/share-logo.png";
import { FaShareAlt } from "react-icons/fa";

import { t } from "i18next";
import { useTranslation } from "react-i18next";
import addlogo from "../assets/addlogo.png";
function ShareWithFriends() {
  let { t } = useTranslation();
  return (
    <Box>
      <Typography
        sx={{ fontSize: "40px", color: "#114F80", fontWeight: "700" }}
      >
        {t("share_with_friends")}
      </Typography>
      <Box>
        <Typography>{t("for_the_application")}</Typography>
        <textarea
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "15px",
            border: "none",
            padding: "10px",
            fontSize: "20px",
          }}
        />

        <Box
          sx={{
            display: "flex",
            mt: "10px",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#128C7F",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
          >
            {t("edit")}
          </Button>
          <Button
            sx={{
              width: "121.65px",
              height: "32px",
              backgroundColor: "#114F80",
              color: "#fff",
              fontSize: "25px",
              fontFamily: "Tanseek Modern Pro Arabic",
            }}
          >
            {t("save")}
          </Button>
        </Box>
      </Box>

      <Typography
        sx={{
          background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "16px", md: "20px" },
          mt: "100px",
        }}
      >
        {t("video_or_img")}
      </Typography>

      <Box sx={{ p: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignitems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: "10px",
              }}
            >
              <Typography>{t("share")}</Typography>
              <Button
                sx={{
                  width: "156px",
                  height: "32px",
                  color: "#fff",
                  px: "5px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  borderRadius: "6px",
                  background:
                    "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                }}
              >
                {t("add_new_video")}
              </Button>
            </Box>

            <Box
              sx={{
                width: "339px",
                height: "auto",
                p: "20px",
                background: "#fff",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "30px",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "35px" }}>{t("share")}</Typography>
              <Box sx={{ fontSize: "30px" }}>
                <FaShareAlt />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Typography>{t("diamonds_count")}</Typography>

            <Box
              sx={{
                width: "174px",
                border: "1px solid #000000",
                height: "62px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>40 {t("diamond")}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ mt: "100px" }}>
            <Typography>{t("to_send")}</Typography>
            <textarea
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "15px",
                border: "none",
                padding: "10px",
                fontSize: "20px",
              }}
            />

            <Box
              sx={{
                display: "flex",
                mt: "10px",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Button
                sx={{
                  width: "121.65px",
                  height: "32px",
                  backgroundColor: "#128C7F",
                  color: "#fff",
                  fontSize: "25px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                }}
              >
                {t("edit")}
              </Button>
              <Button
                sx={{
                  width: "121.65px",
                  height: "32px",
                  backgroundColor: "#114F80",
                  color: "#fff",
                  fontSize: "25px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                }}
              >
                {t("save")}
              </Button>
            </Box>
          </Box>

        

          <Box sx={{ width: "300px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Typography>{t('logo')}</Typography>
              <Box>
                <Button
                  sx={{
                    color: "#fff",
                    width:'100%',
                    background:
                      "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                  }}
                >
                 {t('add_logo')}
                </Button>

                <Box
                  sx={{
                    width: "135px",
                    height: "116px",
                    borderRadius: "15px",
                    backgroundColor: "#fff",
                    display:'flex',
                    alignItems:"center",
                    justifyContent:'end',
                    padding:'20px',
                    mt:'20px'
                  }}
                >
                  <Box component="img" src={addlogo} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography
          sx={{
            background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "16px", md: "20px" },
            mt: "100px",
          }}
        >
        {t('app_links')}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <Typography>{t('apple_link')}</Typography>

            <Box
              sx={{
                width: { xs: "auto", md: "342px" },
                mx: "auto",
                height: "79px",
                border: "3px solid #114F80",
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  lineHeight: "30px",
                  fontSize: "25px",
                  color: "#114F80",
                }}
              >
                https://www.figma.com/design/ epS6m7H0obCBxgPOrgZdlc/Untitl..
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
            <Typography>{t('google_link')} </Typography>

            <Box
              sx={{
                width: { xs: "auto", md: "342px" },
                mx: "auto",
                height: "79px",
                border: "3px solid #114F80",
                borderRadius: "15px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  lineHeight: "30px",
                  fontSize: "25px",
                  color: "#114F80",
                }}
              >
                https://www.figma.com/design/ epS6m7H0obCBxgPOrgZdlc/Untitl..
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShareWithFriends;
