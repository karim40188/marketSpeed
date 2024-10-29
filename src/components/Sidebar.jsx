import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, TextField, Button } from "@mui/material";
import { Context } from "./Context";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let { sidebarOpen, setSidebarOpen } = useContext(Context);
  let [activeLink, setActiveLink] = useState(false);
  let [appDropDown, setAppDropDown] = useState(false);
  let [statsDropDown, setStatsDropDown] = useState(false);
  let [prices, setPrices] = useState(false);
  let [techSupport, setTechSupport] = useState(false);
  let [marketers, setMarketers] = useState(false);
  let [groups, setGroups] = useState(false);
  let [admins, setAdmins] = useState(false);

  let [dropDownLinks] = useState([
    { name: "بنرات التطبيق", path: "/banners" },
    { name: "المقاطع الفديو", path: "/videos" },
    { name: "حسابات تواصل", path: "/socials" },
    { name: "المنصات", path: "/platforms" },
    { name: "الشاشه الترحيب", path: "/Welcome" },
    { name: "سياسه التطبيق", path: "/policy" },
  ]);

  let navigate = useNavigate();
  let sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };
    if (window.innerWidth < 600) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebarOpen, sidebarOpen]);

  return (
    <Box
      sx={{
        backgroundColor: "#114F80",
        width: sidebarOpen ? { xs: "290px", md: "34%" } : "0",
        position: sidebarOpen ? { xs: "fixed", md: "sticky" } : "",
        top: "0",
        right: "0",
        bottom: "0",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        zIndex: "12",
        transition: "400ms width",
        overflow: "hidden",
      }}
      ref={sidebarRef}
    >
      <Box
        sx={{
          width: { xs: "110px", md: "150px", xl: "260px" },
          height: "auto",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/home");
        }}
      >
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
        {appDropDown && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "80%", md: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            {dropDownLinks.map((link) => (
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
            ))}
          </Box>
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
        {statsDropDown && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "300px", md: "280", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to={"/profitstats"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
                navigate("/profitstats");
              }}
            >
              احصائيات مكسب التطبيق
            </Link>
            <Link
              to={"/userstats"}
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
        )}
      </Box>

      {/* الاسعار */}
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
            setPrices(!prices);
          }}
        >
          الاسعار
        </Typography>
        {prices && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to={"/packages"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              الباقات
            </Link>
            <Link
              to={"/diwallet"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              المحفظه الماسية
            </Link>

            <Link
              to={"/discount"}
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              أكواد الخصم
            </Link>
          </Box>
        )}
      </Box>
      {/* المستخدمين  */}
      <Box>
        <Link to="/show-users">
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
          >
            المستخدمين
          </Typography>
        </Link>
      </Box>

      {/* الدعم الفني */}

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
            setTechSupport(!techSupport);
          }}
        >
          الدعم الفني
        </Typography>
        {techSupport && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to="/techsupport"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              المحادثة الدعم الفني
            </Link>
            <Link
              to="suggestion"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              الاقتراحات
            </Link>
          </Box>
        )}
      </Box>

      {/* المجموعات */}
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
            setGroups(!groups);
          }}
        >
          المجموعات
        </Typography>
        {groups && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to="create-groups"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              انشاء مجموعات
            </Link>
            <Link
              to="/add-links"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              اضافة روابط المجموعات
            </Link>
            <Link
              to="/add-country-numbers"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              اضافة مجموعات الدول
            </Link>
            <Link
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              جميع الارقام
            </Link>

            <Link
              to="/clients-groups"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              جروبات العملاء
            </Link>

            <Link
              to="/clients-channels"
              className="link"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              قنوات العملاء
            </Link>
          </Box>
        )}
      </Box>

      {/* المسؤلين */}
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
            setAdmins(!admins);
          }}
        >
          المسؤلين
        </Typography>

        {admins && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to="/show-admin-file"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              عرض المسؤلين
            </Link>
            <Link
              to="/Add-admin-file"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              إضافة مسؤل
            </Link>
          </Box>
        )}
      </Box>

      {/* المسوقين */}

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
            setMarketers(!marketers);
          }}
        >
          المسوقين
        </Typography>
        {marketers && (
          <Box
            sx={{
              backgroundColor: "#EDE8E9",
              width: { xs: "100%", sm: "280px", xl: "354px" },
              height: "auto",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              color: "#114F80",
              p: "10px",
            }}
          >
            <Link
              to="supervisors"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              عرض المشرفين
            </Link>
            <Link
              to="/add-supervisor"
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              إضافة مشرفين
            </Link>
            <Typography
              sx={{ pr: "20px", cursor: "pointer" }}
              to=""
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
                handleClickOpen();
              }}
            >
              عرض المسوقين
            </Typography>
          </Box>
        )}
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: "25px",
          },
        }}
      >
        <DialogContent
          style={{
            backgroundColor: "#114F80",
            color: "#fff",
            padding: "80px 80px 20px",
          }}
        >
          <TextField
            label="اسم المستخدم"
            variant="outlined"
            fullWidth
            margin="dense"
            style={{ backgroundColor: "#fff", borderRadius: "15px" }}
          />
          <TextField
            label="كلمة المرور"
            type="password"
            variant="outlined"
            fullWidth
            margin="dense"
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              marginBlock: "20px",
            }}
          />
          <Button
            onClick={() => {
              handleClose();
              navigate("/marketers");
            }}
            sx={{
              width: "200px",
              display: "block",
              mx: "auto",
              borderRadius: "15px",
            }}
            variant="contained"
            style={{
              marginTop: "15px",
              background: "linear-gradient(90deg, #F9D053 0%, #937B31 100%)",
              color: "#fff",
            }}
          >
            دخول
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Sidebar;
