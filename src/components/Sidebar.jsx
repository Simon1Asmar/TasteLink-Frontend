import {
  Fastfood,
  ShoppingBasket,
  Restore,
  ManageSearch,
  FoodBank,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const StyledListItemButton = styled(ListItemButton)({
  "&:hover": {
    backgroundColor: "rgba(42, 255, 0, 0.1)",
    color: "white",
  },
});

const SidebarLink = ({ to, icon, primary }) => (
  <StyledLink to={to}>
    <ListItem disablePadding>
      <StyledListItemButton component="div">
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} sx={{ display: { sm: "none", md: "block" } }} />
      </StyledListItemButton>
    </ListItem>
  </StyledLink>
);

const Sidebar = () => {
  return (
    <Box bgcolor={"black"} flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <SidebarLink to="/" icon={<Fastfood sx={{ color: "white" }} />} primary="Restaurants" />
          <SidebarLink to="/current-orders" icon={<ShoppingBasket sx={{ color: "white" }} />} primary="Cart" />
          <SidebarLink to="/orders-history" icon={<Restore sx={{ color: "white" }} />} primary="Orders History" />
          <Divider orientation="horizontal" variant="middle" flexItem />
          <SidebarLink to="/available-jobs" icon={<ManageSearch sx={{ color: "white" }} />} primary="Jobs" />
          <Divider orientation="horizontal" variant="middle" flexItem />
          <SidebarLink to="/owned-restaurants" icon={<FoodBank sx={{ color: "white" }} />} primary="My Restaurants" />
          <Divider orientation="horizontal" variant="middle" flexItem />
          <SidebarLink to="/settings" icon={<Settings sx={{ color: "white" }} />} primary="Settings" />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
