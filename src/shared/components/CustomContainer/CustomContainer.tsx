import Box, { BoxProps } from "@mui/material/Box";
import Container, { ContainerProps } from "@mui/material/Container";

interface ICustomContainerProps extends ContainerProps {
  children: React.ReactNode;
  removePaddingX?: boolean;
  removePaddingY?: boolean;
  boxProps?: BoxProps;
}

const CustomContainer: React.FC<ICustomContainerProps> = ({
  children,
  removePaddingX = false,
  removePaddingY = false,
  boxProps,
  ...props
}) => {
  return (
    <Container maxWidth="lg" disableGutters {...props}>
      <Box
        minHeight="inherit"
        sx={(theme) => ({
          paddingX: removePaddingX ? 0 : theme.spacing(2),
          paddingY: removePaddingY ? 0 : theme.spacing(2),

          [theme.breakpoints.up("md")]: {
            paddingX: removePaddingX ? 0 : theme.spacing(4),
            paddingY: removePaddingY ? 0 : theme.spacing(4),
          },
        })}
        {...boxProps}
      >
        {children}
      </Box>
    </Container>
  );
};

export default CustomContainer;
