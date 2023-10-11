import { useState } from "react";

import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const SideBar: React.FC = () => {
  const [showSideBar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSideBar);

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
              width: 300,
            },
          })}
        >
          <Box display="flex" justifyContent="flex-end" p={2}>
            <IconButton color="primary" onClick={toggleSidebar}>
              <CloseIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
