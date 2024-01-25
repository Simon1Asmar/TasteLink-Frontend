import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Box, Stack } from "@mui/material";

// import { useContext } from "react";
import { useUserAuthContext } from "../contexts/UserAuthContext";
import SignInOrUpPage from "../pages/SignInOrUpPage";

const Header = ({ children }) => {
  const { user, token } = useUserAuthContext();

  useEffect(() => {
    console.log("user", user);
  }, []);

  return (
    <Box>
      <Navbar />
      <Stack
        direction={"row"}
        sx={{ spacing: { xs: 0, sm: 1, md: 2 } }}
        justifyContent={"space-between"}
      >
      {user ? (
        <>
          <Sidebar />
          <Feed>{children}</Feed>
        </>
      ) : (
        <SignInOrUpPage />
      )}
        </Stack>
    </Box>
  );
};

export default Header;
