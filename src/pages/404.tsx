import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box>
      <Typography variant="h3">Not Found At The Moment</Typography>
      <Link to={"/"}>Go Home</Link>
    </Box>
  );
}
