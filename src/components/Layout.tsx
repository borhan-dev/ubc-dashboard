import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);
  return (
    <Box width={"100%"} display={"flex"}>
      {/** Sidebar */}
      <Box>Sidebar</Box>
      <Box width={"100%"}>
        <Navbar
          setIsSidebarOpen={setIsSidebarActive}
          isSidebarOpen={isSidebarActive}
        />
        <Outlet />
      </Box>
    </Box>
  );
}
