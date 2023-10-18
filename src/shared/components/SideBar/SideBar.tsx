import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import { MENU_ITEMS } from "./constants/sidebarConstants";
import CustomContainer from "@components/CustomContainer";

const SideBar: React.FC = () => {
  const [showSideBar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setShowSidebar(!showSideBar);

  const handleNavigate = (path: string) => {
    navigate(path);
    toggleSidebar();
  };

  return (
    <>
      <IconButton
        color="primary"
        onClick={toggleSidebar}
        sx={{ aspectRatio: "1/1" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" onClose={toggleSidebar} open={showSideBar}>
        <Box
          sx={(theme) => ({
            background: theme.palette.secondary.main,
            height: "100%",
            width: "100vw",

            [theme.breakpoints.up("sm")]: {
              width: 350,
            },
          })}
        >
          <CustomContainer>
            <Box display="flex" justifyContent="flex-end">
              <IconButton color="primary" onClick={toggleSidebar}>
                <CloseIcon color="primary" />
              </IconButton>
            </Box>
            <Box py={2}>
              {MENU_ITEMS.map((item) => (
                <ListItem
                  disablePadding
                  key={item.id}
                  sx={{
                    "&:hover": {
                      background: "rgba(255,255,255,0.15)",
                    },
                  }}
                >
                  <ListItemButton onClick={() => handleNavigate(item.path)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} sx={{ color: "#FFF" }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </CustomContainer>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
