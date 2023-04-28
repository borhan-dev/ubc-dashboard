
import "./App.css";
import { Box } from "@mui/material";
import FlexBetween from "./components/FlexBetween";
import {
  SearchOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

function App() {
  return (
    <Box width={"100%"}>
      <FlexBetween>
        <SearchOutlined />
        <SettingsOutlined />
      </FlexBetween>
    </Box>
  );
}

export default App;
