import Typography, { TypographyProps } from "@mui/material/Typography";

const EllipsisText: React.FC<TypographyProps> = ({ ...props }) => (
  <Typography
    {...props}
    sx={{
      ...props.sx,
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "2",
    }}
  />
);

export default EllipsisText;
