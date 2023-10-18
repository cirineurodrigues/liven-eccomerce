import { TypographyProps } from "@mui/material/Typography";
import { StyledEllipsisText } from "./EllipsisText.styles";

const EllipsisText: React.FC<TypographyProps> = ({ ...props }) => (
  <StyledEllipsisText {...props}>{props.children}</StyledEllipsisText>
);

export default EllipsisText;
