import { Box } from "@mui/material";
import React from "react";

const Feed = ({ children }) => {
  return (
    <Box bgcolor={"#d3ffc0"} p={2} sx={{flex: {xs:10, sm: 9, md: 4 }, }} minHeight={"100vh"}  >
      {children}
    </Box>
  );
};

export default Feed;
