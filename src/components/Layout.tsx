import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(true);
  return (
    <Box width={"100%"} display={"flex"}>
      <Sidebar
        draweWidth="250px"
        isSidebarOpen={isSidebarActive}
        setIsSidebarOpen={setIsSidebarActive}
      />
      <Box width={"100%"}>
        <Navbar
          setIsSidebarOpen={setIsSidebarActive}
          isSidebarOpen={isSidebarActive}
        />
        <Box p={"0.1rem 2.3rem"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
