import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Videos from "./components/Videos";
import Login from "./components/Login";

function App() {
  let router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/videos", element: <Videos /> },
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
