import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import { useTranslation } from "react-i18next";

function AddDiscount() {
  let navigate = useNavigate();
  let {t}=useTranslation()

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}   
        transition={{ duration: 1 }} 
      >
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80", fontWeight: '600' }}
        >
        {t('add_discount_code')}
        </Typography>
      </motion.div>
      
      <Box sx={{ p: { xs: "20px", md: "40px" }, mt: "50px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}   
            transition={{ duration: 1 }} 
            style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "start", width: { xs: "100%", md: "auto" }}}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: '600' }}>{t('code')}</Typography>
              <TextField
                sx={{
                  width: { xs: "100%", md: "189px" },
                  height: "62px",
                  fontSize: "30px",
                  '&:focus': {
                    borderColor: '#114F80',
                    boxShadow: '0 0 10px rgba(17, 79, 128, 0.5)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{ width: { xs: "auto", md: "121px" }, fontWeight: '600' }}>{t('discount_percentage')} </Typography>
              <TextField
                sx={{
                  width: { xs: "100%", md: "174px" },
                  height: "62px",
                  fontSize: "30px",
                  '&:focus': {
                    borderColor: '#114F80',
                    boxShadow: '0 0 10px rgba(17, 79, 128, 0.5)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}   
            transition={{ duration: 1, delay: 0.5 }} 
            style={{ display: "flex", gap: "20px", mt: { xs: "20px", md: 0 } }}
          >
            <Button
              sx={{
                fontSize: "25px",
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#128C7F",
                borderRadius: "6px",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: 'background-color 0.3s ease-in-out, transform 0.3s ease',
                '&:hover': {
                  backgroundColor: '#0C3A63',
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => {
                navigate('/edit-discount');
              }}
            >
             {t('حفظ')}
            </Button>
            <Button
              sx={{
                fontSize: "25px",
                fontFamily: "Tanseek Modern Pro Arabic",
                width: "156px",
                height: "32px",
                backgroundColor: "#CC0000",
                borderRadius: "6px",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: 'background-color 0.3s ease-in-out, transform 0.3s ease',
                '&:hover': {
                  backgroundColor: '#A60000',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {t("delete")}
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}

export default AddDiscount;
