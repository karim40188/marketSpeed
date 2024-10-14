import { Box, createTheme, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Videos from "./components/Videos";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> },
        {path:'/videos',element:<Videos/>}
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
  });

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}>
          <Layout />
        </RouterProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
