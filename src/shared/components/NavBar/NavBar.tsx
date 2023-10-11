import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import CustomContainer from "@components/CustomContainer";
import ShoppingCartIconBadge from "@components/ShoppingCartIconBadge";
import SideBar from "@components/SideBar";
import IMAGES from "@constants/Images";
import PATHS from "@constants/Paths";

const NavBar: React.FC = () => {
  return (
    <AppBar
      color="secondary"
      position="static"
      sx={{ "&.MuiAppBar-root": { padding: 0 } }}
    >
      <Toolbar sx={{ "&.MuiToolbar-root": { padding: 0 } }}>
        <CustomContainer removePaddingY>
          <Box
            alignItems="center"
            display="flex"
            flexGrow={1}
            justifyContent="space-between"
          >
            <Link to={PATHS.ROOT}>
              <img
                alt={IMAGES.LIVEN_LOGO.ALT}
                src={IMAGES.LIVEN_LOGO.SRC}
                style={{ width: "150px" }}
              />
            </Link>

            <Box columnGap={1} display="flex">
              <ShoppingCartIconBadge />
              <SideBar />
            </Box>
          </Box>
        </CustomContainer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
