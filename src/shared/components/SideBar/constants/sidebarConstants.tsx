import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { IMenuItems } from "@components/SideBar/types/sidebarTypes";
import PATHS from "@constants/Paths";

export const MENU_ITEMS: IMenuItems[] = [
  {
    icon: <LocalMallIcon sx={{ color: "#FFF" }} />,
    id: 1,
    label: "Products",
    path: PATHS.ROOT,
  },
  {
    icon: <ShoppingCartIcon sx={{ color: "#FFF" }} />,
    id: 2,
    label: "Cart",
    path: PATHS.CART,
  },
];
