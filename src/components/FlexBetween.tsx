import { Box, BoxProps } from "@mui/material";
import React from "react";

interface FlexBetweenProps extends BoxProps {
  children: React.ReactNode;
}

const FlexBetween: React.FC<FlexBetweenProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      {children}
    </Box>
  );
};
export default FlexBetween;
