import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
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

  return (
    <Box
      sx={{
        backgroundColor: "#114F80",
        width: "30%",
        position: "sticky",
        top: "0",
        right: "0",
        bottom: "0",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        zIndex: "12",
        py: "50px",
      }}
    >
      <Box
        sx={{
          width: { xs: "150px", md: "150px", xl: "260px" },
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
              width: { xs: "90%", sm: "80%", md: "300px", xl: "354px" },
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
              width: { xs: "90%", sm: "300px", md: "300px", xl: "354px" },
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
              width: { xs: "90%", sm: "300px", xl: "354px" },
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
              width: { xs: "90%", sm: "300px", xl: "354px" },
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
              width: { xs: "90%", sm: "300px", xl: "354px" },
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
              width: { xs: "90%", sm: "300px", xl: "354px" },
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
              width: { xs: "90%", sm: "300px", xl: "354px" },
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
            <Link
              onClick={(e) => {
                if (activeLink) {
                  activeLink.classList.remove("active");
                }
                e.target.classList.add("active");
                setActiveLink(e.target);
              }}
            >
              محفظة المشرفين والمسوقين
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Sidebar;
