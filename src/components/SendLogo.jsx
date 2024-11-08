import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SendLogo() {
  let navigate = useNavigate();
  let { t } = useTranslation();

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          color: "#114F80",
          fontWeight: "600",
        }}
      >
        {t("send_notification")}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          mt: "20px",
          mr: "50px",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
          <Button
            sx={{
              backgroundColor: "#114F80",
              color: "#fff",
              borderRadius: "6px",
              width: "auto",
            }}
          >
            {t("subscriber")}
          </Button>
          <Button
            sx={{
              backgroundColor: "#fff",
              color: "#114F80",
              borderRadius: "6px",
              width: "auto",
            }}
          >
            {t("user")}
          </Button>
          <Button
            sx={{
              backgroundColor: "#fff",
              color: "#114F80",
              borderRadius: "6px",
              width: "auto",
            }}
          >
            {t("all")}
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: { xs: "start", md: "end" }, // Adjust alignment based on screen size
          width: "100%",
          flexWrap: "wrap", // Allow wrapping on smaller screens
          p: { xs: "0 10px", md: "0" }, // Adjust padding for smaller screens
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", md: "auto" },
            height: "auto",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", xl: "20px" },
            fontWeight: "600",
            textTransform: "capitalize",
            mb: { xs: "10px", md: "0" }, // Add margin bottom for small screens
          }}
        >
          {t("attach_link")}
        </Button>
        <Button
          sx={{
            width: { xs: "100%", md: "auto" },
            height: "auto",
            color: "#fff",
            textTransform: "capitalize",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", xl: "20px" },
            fontWeight: "600",
            mb: { xs: "10px", md: "0" }, // Add margin bottom for small screens
          }}
        >
          {t("attach_image_or_video")}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "90%", md: "890px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "855px" },
            p: { xs: "20px", sm: "40px", md: "100px" }, // Responsive padding
            backgroundColor: "#fff",
            mx:'auto',
            mt: "50px",
            mr: "30px",
            borderRadius: "10px", // Optional: add some rounding to corners
            overflow: "hidden", // Ensure content doesn't overflow
          }}
        >
          <Typography sx={{ fontWeight: "600", overflowWrap: "break-word" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quo
            voluptatem ipsa inventore nulla accusantium nihil laborum porro
            dignissimos provident commodi possimus tempore, pariatur vero saepe
            natus distinctio iure ratione harum voluptas? Corrupti, ipsam.
            Soluta dolor amet cumque quis nemo numquam impedit saepe atque ipsam
            iusto, praesentium earum quo esse, explicabo voluptatum iure,
            distinctio ut? Id, blanditiis cum illo suscipit rerum enim modi
            obcaecati repudiandae architecto vel nulla. Hic dolor ratione
            perferendis voluptatum vero! Id dolores doloremque cupiditate rerum
            nesciunt repellendus quo consequuntur vero voluptates ex nihil
            adipisci, necessitatibus incidunt, harum velit! Eligendi laudantium
            architecto totam nobis provident ratione aut? 
          </Typography>
        </Box>

        <Button
          sx={{
            width: { xs: "100%", md: "146px" },
            height: "32px",
            color: "#fff",
            backgroundColor: "#114F80",
            borderRadius: "5px",
            fontFamily: "Sora",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "600",
            textTransform:"capitalize",
            mt: "30px",
            mr: "auto",
          }}
          onClick={() => {
            navigate("/saudi-groups");
          }}
        >
        {t('send')}
        </Button>
      </Box>
    </Box>
  );
}

export default SendLogo;
