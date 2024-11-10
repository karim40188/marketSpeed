import { Box, Button, Typography } from "@mui/material";
import addImg from "../assets/addimg.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
function EditMarketer() {
  let { t } = useTranslation();
  let navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "40px" },
              color: "#114F80",
              fontWeight: "600",
            }}
          >
            {t("ahmed_mohamed")}
          </Typography>

          <Typography
            sx={{
              background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("marketer")}
          </Typography>
        </Box>

        <Button
          sx={{
            width: "136px",
            height: "32px",
            backgroundColor: "#128C7F",
            fontSize: "20px",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "600",
          }}
          onClick={() => {
            navigate("/add-marketer");
          }}
        >
          {t("save")}
        </Button>
      </Box>

      <Box sx={{ p: "20px", width: { xs: "100%", xl: "60%" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "20px",
          }}
        >
          <Box>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {t("full_name")}
            </Typography>
            <Box
              sx={{
                width: "412px",
                height: "70px",
                p: "20px",
                fontSize: "30px",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                mt: "10px",
                borderRadius: "15px",
              }}
            >
              {t("ahmed_mohamed")}
            </Box>
          </Box>

          {/* الدولة والمدينة في صف واحد */}
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            {/* حقل الدولة */}
            <Box sx={{ width: "49%" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("country")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "70px",
                  p: "20px",
                  fontSize: "30px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                  borderRadius: "15px",
                }}
              >
                {t("kingdom_of_saudi_arabia")}
              </Box>
            </Box>

            {/* حقل المدينة */}
            <Box sx={{ width: "49%" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("city")}
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "70px",
                  p: "20px",
                  fontSize: "30px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                  borderRadius: "15px",
                }}
              >
                {t("riyadah")}
              </Box>
            </Box>
          </Box>

          {/* البريد الالكتروني  */}

          {/* رقم الجوال في صف منفصل */}
          <Box sx={{ mt: "20px", width: "100%" }}>
            <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
              {t("phone_number")}
            </Typography>
            <Box
              sx={{
                width: "412px",
                height: "70px",
                p: "20px",
                fontSize: "30px",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                mt: "10px",
                borderRadius: "15px",
              }}
            >
              966 5552512
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("bank_name")}
              </Typography>
              <Box
                sx={{
                  width: "412px",
                  height: "70px",
                  p: "20px",
                  fontSize: "30px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                  borderRadius: "15px",
                }}
              >
                {t("alraghy")}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                {t("bank_account_number")}
              </Typography>
              <Box
                sx={{
                  width: "412px",
                  height: "70px",
                  p: "20px",
                  fontSize: "30px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  mt: "10px",
                  borderRadius: "15px",
                }}
              >
                56145612515615614154145
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Box>
                <Typography sx={{ color: "#5E5E5E", fontSize: "30px" }}>
                  {t("discount_percentage")}
                </Typography>

                <Box
                  sx={{
                    width: "412px",
                    height: "70px",
                    p: "20px",
                    fontSize: "30px",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: "10px",
                    borderRadius: "15px",
                  }}
                >
                  <Typography>{t("discount_percentage")} </Typography>

                  <Typography>%</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "230px",
                }}
              >
                <Typography sx={{ alignSelf: "end" }}>
                  {t("add_new_img")}
                </Typography>
                <Button
                  sx={{
                    width: "205px",
                    height: "70px",
                    mt: "10px",
                    fontSize: "30px",
                    fontFamily: "Tanseek Modern Pro Arabic",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000",
                    textTransform: "capitalize",
                    background:
                      "linear-gradient(180deg, #F9D053 0%, #937B31 100%)",
                  }}
                >
                  {t("download_img")}
                </Button>
              </Box>
            </Box>
          </Box>

          <Box sx={{ my: "30px" }}>
            <Typography sx={{ fontSize: "40px", color: "#114F80", mb: "20px" }}>
              {t("discount_type")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                px: "30px",
              }}
            >
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("subscription_packages")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "37px",
                    height: "37px",
                    backgroundColor: "#fff",
                  }}
                ></Box>

                <Box>
                  <Typography sx={{ fontSize: "30px" }}>
                    {t("diamond_wallet")}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EditMarketer;
