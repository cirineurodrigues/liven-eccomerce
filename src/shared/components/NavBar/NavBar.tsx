import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { useAppSelector } from "@app/hooks";
import { selectAmountProductsAtCart } from "@cart/cartSlice";
import CustomContainer from "@components/CustomContainer";
import ShoppingCartIconBadge from "@components/ShoppingCartIconBadge";
import SideBar from "@components/SideBar";
import IMAGES from "@constants/Images";
import PATHS from "@constants/Paths";

const NavBar: React.FC = () => {
  const amountProductsAtCart = useAppSelector(selectAmountProductsAtCart);

  return (
    <AppBar
      color="secondary"
      position="fixed"
      sx={{ "&.MuiAppBar-root": { height: 65, padding: 0 } }}
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
              <ShoppingCartIconBadge
                amountProductsAtCart={amountProductsAtCart}
              />
              <SideBar />
            </Box>
          </Box>
        </CustomContainer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
