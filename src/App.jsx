import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./components/Videos";
import Login from "./components/Login";
import ProfitStats from "./components/ProfitStats";
import UserStats from "./components/UserStats";
import Socials from "./components/Socials";
import Platforms from "./components/Platforms";
import Welcome from "./components/Welcome";
import Policy from "./components/Policy";
import Banners from "./components/Banners";
import Home from "./components/Home";
import Packages from "./components/Packages";
import EditPackage from "./components/EditPackage";
import DiWallet from "./components/DiWallet";
import EditWallet from "./components/EditWallet";
import AddWallet from "./components/AddWallet";
import Discounts from "./components/Discounts";
import EditDiscount from "./components/EditDiscount";
import AddDiscount from "./components/AddDiscount";
import TechSupport from "./components/TechSupport";
import SupportSession from "./components/SupportSession";
import Suggestion from "./components/Suggestion";
import SuggestionSession from "./components/SuggestionSession";
import Supervisors from "./components/Supervisors";
import SupervisorProfile from "./components/SupervisorProfile";
import AddSupervisor from "./components/AddSupervisor";
import CreateGroups from "./components/CreateGroups";
import AddGroup from "./components/AddGroup";
import AddLinks from "./components/AddLinks";
import AddCountryNum from "./components/AddCountryNum";
import Marketers from "./components/Marketers";
import AddAdminFile from "./components/AddAdminFile";
import ShowAdminFile from "./components/ShowAdminFile";
import EditAdminFile from "./components/EditAdminFile";
import SaudiGroups from "./components/SaudiGroups";
import AllNumbersOfGroups from "./components/AllNumbersOfGroups";
import SaudiNumbers from "./components/SaudiNumbers";

function App() {
  let router = createBrowserRouter([
    { index: true, element: <Login /> },
    { path: "/login", element: <Login /> },

    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/banners", element: <Banners /> },
        { path: "/videos", element: <Videos /> },
        { path: "/profitstats", element: <ProfitStats /> },
        { path: "/userstats", element: <UserStats /> },
        { path: "/socials", element: <Socials /> },
        { path: "/platforms", element: <Platforms /> },
        { path: "/welcome", element: <Welcome /> },
        { path: "/policy", element: <Policy /> },
        { path: "/packages", element: <Packages /> },

        // ------------------

        { path: "/edit-package", element: <EditPackage /> },
        { path: "/diwallet", element: <DiWallet /> },
        { path: "/edit-wallet", element: <EditWallet /> },
        { path: "/add-package", element: <AddWallet /> },
        { path: "/discount", element: <Discounts /> },
        { path: "/edit-discount", element: <EditDiscount /> },
        { path: "/add-discount", element: <AddDiscount /> },
        { path: "/techsupport", element: <TechSupport /> },
        { path: "/support-session", element: <SupportSession /> },
        { path: "/suggestion", element: <Suggestion /> },
        // ------------------
        { path: "/suggestion-session", element: <SuggestionSession /> },
        { path: "/supervisors", element: <Supervisors /> },
        { path: "/supervisor-profile", element: <SupervisorProfile /> },
        { path: "/add-supervisor", element: <AddSupervisor /> },
        { path: "/create-groups", element: <CreateGroups /> },
        { path: "/add-group", element: <AddGroup /> },
        { path: "/add-links", element: <AddLinks /> },
        { path: "/add-country-numbers", element: <AddCountryNum /> },
        // Desktop 42
        { path: "/marketers", element: <Marketers /> },
          // Desktop 50
          { path: "/Add-admin-file", element: <AddAdminFile /> },


        // -----------------------

          // Desktop 48
          { path: "/show-admin-file", element: <ShowAdminFile /> },


          // Destop 49
          { path: "/edit-admin-file", element: <EditAdminFile /> },



          // Destop 61
          { path: "/saudi-groups", element: <SaudiGroups /> },




          // Destop 58
          { path: "/all-numbers", element: <AllNumbersOfGroups /> },




          // Destop 59
          { path: "/saudi-numbers", element: <SaudiNumbers /> },
      
      ],
    },
  ]);
  let theme = createTheme({
    typography: {
      body1: {
        fontSize: "25px",
        fontFamily: "Tanseek Modern Pro Arabic",
      },
    },
    palette: {
      background: {
        default: "#EDE8E9",
      },
    },

    direction: "rtl",
  });

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
