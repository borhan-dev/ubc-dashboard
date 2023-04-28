import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Dashboard } from "./pages";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route index element={<Navigate to={"/dashboard"} replace />} />
          <Route element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
