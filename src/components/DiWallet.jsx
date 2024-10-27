import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function DiWallet() {
  let navigate= useNavigate()
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "30px", md: "40px" }, color: "#114F80",fontWeight:'600' }}
        >
          المحفظة الماسية
        </Typography>
        <Button
          sx={{
            fontSize: "25px",
            fontFamily: "Tanseek Modern Pro Arabic",
            width: "auto",
            height: "32px",
            backgroundColor: "#114F80",
            borderRadius: "6px",
            color: "#fff",
            px: "30px",
            py: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={()=>{
            navigate('/add-package')
          }}
        >
          
          أضف باقة جديدة
        </Button>
      </Box>
      <Box sx={{ p: "40px" }}>
        <Typography sx={{ fontSize: "30px" ,fontWeight:'600',mb:'30px'}}> مزايا الباقة</Typography>

        <Box>
          <Box sx={{ display: "flex", alignItems: "start",justifyContent:'space-between' }}>
            <Box sx={{display:"flex",flexDirection:'column',gap:'30px'}}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{width:'121px',fontWeight:'600'}}>عدد الماسات</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  fontWeight:'600'
                
                }}
              >
                40 ماسة
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography  sx={{width:'121px',fontWeight:'600'}}>السعر</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  fontWeight:'600'
                }}
              >
               30 ريال
              </Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  mr:"70px",
                  fontWeight:'600'
                }}
              >
               7.5 دولار
              </Typography>
            </Box>
            </Box>
         

            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
                sx={{
                  fontSize: "25px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  width: "156px",
                  height: "32px",
                  backgroundColor: "#114F80",
                  borderRadius: "6px",
                  color: "#fff",
                  px: "30px",
                  py: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={()=>{
                  navigate('/edit-wallet')
                }}
              >
                تعديل
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
                  px: "30px",
                  py: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                حذف
              </Button>
            </Box>
          </Box>
          <Box sx={{border: "1px solid #000000",width:'488.03px',mx:'auto',my:"50px"}}>

          </Box>
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "start",justifyContent:'space-between' }}>
            <Box sx={{display:"flex",flexDirection:'column',gap:'30px'}}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{width:'121px',fontWeight:'600'}}>عدد الماسات</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  fontWeight:'600'
                
                }}
              >
                40 ماسة
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography  sx={{width:'121px',fontWeight:'600'}}>السعر</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  fontWeight:'600'
                }}
              >
               30 ريال
              </Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  mr:"70px",
                  fontWeight:'600'
                }}
              >
               7.5 دولار
              </Typography>
            </Box>
            </Box>
         

            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
                sx={{
                  fontSize: "25px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  width: "156px",
                  height: "32px",
                  backgroundColor: "#114F80",
                  borderRadius: "6px",
                  color: "#fff",
                  px: "30px",
                  py: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={()=>{
                  navigate('/edit-wallet')
                }}
              >
                تعديل
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
                  px: "30px",
                  py: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                حذف
              </Button>
            </Box>
          </Box>
          <Box sx={{border: "1px solid #000000",width:'488.03px',mx:'auto',my:"50px"}}>

          </Box>
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "start",justifyContent:'space-between' }}>
            <Box sx={{display:"flex",flexDirection:'column',gap:'30px'}}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography sx={{width:'121px',fontWeight:'600'}}>عدد الماسات</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  fontWeight:'600'
                
                }}
              >
                40 ماسة
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Typography  sx={{width:'121px',fontWeight:'600'}}>السعر</Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  fontWeight:'600'
                }}
              >
               30 ريال
              </Typography>
              <Typography
                sx={{
                  border: "1px solid black",
                  width: "174px",
                  height: "62px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  fontSize: "30px",
                  mr:"70px",
                  fontWeight:'600'
                }}
              >
               7.5 دولار
              </Typography>
            </Box>
            </Box>
         

            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button
                sx={{
                  fontSize: "25px",
                  fontFamily: "Tanseek Modern Pro Arabic",
                  width: "156px",
                  height: "32px",
                  backgroundColor: "#114F80",
                  borderRadius: "6px",
                  color: "#fff",
                  px: "30px",
                  py: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={()=>{
                  navigate('/edit-wallet')
                }}
              >
                تعديل
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
                  px: "30px",
                  py: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                حذف
              </Button>
            </Box>
          </Box>
          <Box sx={{border: "1px solid #000000",width:'488.03px',mx:'auto',my:"50px"}}>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DiWallet;
