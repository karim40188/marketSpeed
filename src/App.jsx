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
import AllNumbersOfGroups from "./components/CgWhatsNumbers";
import SaudiNumbers from "./components/SaudiNumbers";
import ShowUsers from "./components/ShowUsers";
import ShowUserFile from "./components/ShowUserFile";
import AddPackage from "./components/AddPackage";
import EditUserFile from "./components/EditUserFile";
import AddUser from "./components/AddUser";
import ClientsGroups from "./components/ClientsGroups";
import AddMarketer from "./components/AddMarketer";
import MarketerLink from "./components/MarketerLink";
import ClientsChannels from "./components/ClientsChannels";
import { ContextProvider } from "./components/Context";
import ShowSubscribers from "./components/ShowSubscribers";
import AllUsers from "./components/AllUsers";
import CountryNumGroup from "./components/unknown/CountryNumGroup";
import AddNewGroup from "./components/unknown/AddNewGroup";
import AddNewLinks from "./components/unknown/AddNewLinks";
import ShareWithFriends from "./components/ShareWithFriends";
import Categories from "./components/CreateGroupCategories";
import WhatsAppGroups from "./components/WhatsAppGroups";
import TelegramGroups from "./components/TelegramGroups";
import Groups from "./components/CgWhatAppCategory";
import SendToGroups from "./components/SendToGroups";
import SendLogo from "./components/SendLogo";
import AllnumberWhatsApp from "./components/AllnumberWhatsApp";
import AllNumbers2 from "./components/AllNumbers2";
import AllCountryNum2 from "./components/AllCountryNum2";
import AllNumbers3 from "./components/AllNumber3";
import i18next from "./i18next";
import SendToGroupWhatsApp from "./components/SendToGroupWhatsApp";
import SaudiNumber2 from "./components/SaudiNumber2";
import TelegramGroup from "./components/telegramGroup";
import SpesificTelegramGroup from "./components/SpesificTelegramGroup";
import SaudiNumbers3 from "./components/saudiNumbers3";
import SaudiNumberTelegram from "./components/SaudiNumberTelegram";
import EditSupervisor from "./components/EditSupervisor";
import ShowSupervisor from "./components/ShowAdmins";
import CreateGroupsTelegram from "./components/CgTelegramCategory";
import CreateGroupCategories from "./components/CreateGroupCategories";
import CgWhatAppCategory from "./components/CgWhatAppCategory";
import CgWhatsNumbers from "./components/CgWhatsNumbers";
import CgCountryNumber from "./components/SaudiNumbers";
import CgTelegramCategory from "./components/CgTelegramCategory";
import ShowAdmins from "./components/ShowAdmins";
import EditMarketer from "./components/EditMarketer";
function App() {
  let router = createBrowserRouter([
    // Done
    { index: true, element: <Login /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        // Done
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
        { path: "/SendToGroupWhatsApp", element: <SendToGroupWhatsApp /> },

        // ------------------

        { path: "/edit-package", element: <EditPackage /> },
        { path: "/saudi-number2", element: <SaudiNumber2 /> },
        { path: "/diwallet", element: <DiWallet /> },
        { path: "/edit-wallet", element: <EditWallet /> },
        { path: "/add-wallet", element: <AddWallet /> },
        { path: "/discount", element: <Discounts /> },
        { path: "/edit-discount", element: <EditDiscount /> },
        { path: "/add-discount", element: <AddDiscount /> },
        { path: "/techsupport", element: <TechSupport /> },
        { path: "/support-session", element: <SupportSession /> },
        { path: "/suggestion", element: <Suggestion /> },
        // ------------------
        { path: "/suggestion-session", element: <SuggestionSession /> },
        { path: "/supervisors", element: <Supervisors /> },
        { path: "/show-supervisor", element: <ShowSupervisor /> },
        { path: "/supervisor-profile", element: <SupervisorProfile /> },
        { path: "/add-supervisor", element: <AddSupervisor /> },
        { path: "/createGroup-telegram", element: <CreateGroupsTelegram /> },
        { path: "/add-group", element: <AddGroup /> },
        { path: "/add-links", element: <AddLinks /> },
        { path: "/edit-supervisor", element: <EditSupervisor /> },
        // Desktop 42
        { path: "/marketers", element: <Marketers /> },
        { path: "/add-marketer", element: <AddMarketer /> },
        { path: "/marketer-link", element: <MarketerLink /> },
        // Desktop 50
        { path: "/Add-admin-file", element: <AddAdminFile /> },

        // -----------------------

        // Desktop 48
        { path: "/show-admin-file", element: <ShowAdminFile /> },
        { path: "/show-admins", element: <ShowAdmins /> },
        { path: "/edit-marketer", element: <EditMarketer /> },

        // Destop 49
        { path: "/edit-admin-file", element: <EditAdminFile /> },

        // Done
        { path: "//clients-channels", element: <ClientsChannels /> },
        // Done
        { path: "/clients-groups", element: <ClientsGroups /> },

        // Done
        { path: "/add-country-numbers", element: <AddCountryNum /> },
        // Done
        // Destop 61
        { path: "create_group/whats", element: <CgWhatAppCategory /> },
        { path: "/send-to-groups", element: <SendToGroups /> },
        { path: "/all-country-num", element: <AllCountryNum2 /> },
        { path: "/all-numbers-3", element: <AllNumbers3 /> },
        { path: "/all-numbers-whatsapp", element: <AllnumberWhatsApp /> },
        // Done
        // Done
        { path: "/create-groups", element: <CreateGroups /> },
        { path: "/whatsapp-groups", element: <WhatsAppGroups /> },
        { path: "/telegram-groups", element: <TelegramGroups /> },

        // Destop 58
        { path: "create_group/whats/numbers", element: <CgWhatsNumbers /> },
        { path: "/telegram-group", element: <TelegramGroup /> },
        {
          path: "create_group/whats/numbers/country_number",
          element: <CgCountryNumber />,
        },
        // Done
        { path: "/create_group/telegram", element: <CgTelegramCategory /> },
        // Destop 59
        { path: "/saudi-numbers", element: <SaudiNumbers /> },
        { path: "/saudi-telegram-numbers", element: <SaudiNumberTelegram /> },
        {
          path: "/Spesific-Telegram-Group",
          element: <SpesificTelegramGroup />,
        },
        { path: "/saudi-numbers-3", element: <SaudiNumbers3 /> },
        // Done
        { path: "/show-users", element: <ShowUsers /> },
        { path: "/show-subscribers", element: <ShowSubscribers /> },
        { path: "/all-users", element: <AllUsers /> },
        { path: "/all-number2", element: <AllNumbers2 /> },
        // Done
        { path: "/show-user-file", element: <ShowUserFile /> },
        // Done
        { path: "/add-new-package", element: <AddPackage /> },
        {
          path: "/create_group_categories",
          element: <CreateGroupCategories />,
        },
        // Done
        { path: "/edit-user-file", element: <EditUserFile /> },
        // Done
        { path: "/add-user", element: <AddUser /> },
        { path: "/country-num-group", element: <CountryNumGroup /> },
        { path: "/add-new-group", element: <AddNewGroup /> },
        { path: "/add-new-links", element: <AddNewLinks /> },
        { path: "/share", element: <ShareWithFriends /> },
        { path: "/send-logo", element: <SendLogo /> },
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
        <ContextProvider>
          <RouterProvider router={router}>
            <Layout />
          </RouterProvider>
        </ContextProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
