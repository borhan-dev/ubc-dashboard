import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Dashboard, Posts, NotFound, CreatePost } from "./pages";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Suspense, useMemo } from "react";
import { themeSettings } from "./theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<h1>...Loading</h1>}>
          <Routes>
            <Route index element={<Navigate to={"/dashboard"} replace />} />
            <Route element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="manage-posts" element={<Posts />} />
              <Route path="create-post" element={<CreatePost />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
