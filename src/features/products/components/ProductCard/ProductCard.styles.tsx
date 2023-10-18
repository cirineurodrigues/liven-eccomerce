import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

export const StyledProductTitle = styled(Typography)({
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: "2",
});
