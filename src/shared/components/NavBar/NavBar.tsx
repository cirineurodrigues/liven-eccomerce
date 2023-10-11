import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import CustomContainer from "@components/CustomContainer";
import ShoppingCartIconBadge from "@components/ShoppingCartIconBadge";
import SideBar from "@components/SideBar";
import IMAGES from "@constants/Images";

const NavBar: React.FC = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <CustomContainer removePaddingY>
          <Box
            alignItems="center"
            display="flex"
            flexGrow={1}
            justifyContent="space-between"
          >
            <img
              alt={IMAGES.LIVEN_LOGO.ALT}
              src={IMAGES.LIVEN_LOGO.SRC}
              style={{ width: "150px" }}
            />

            <Box display="flex" columnGap={1}>
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
