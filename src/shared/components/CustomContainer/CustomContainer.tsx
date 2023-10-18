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
        px={removePaddingX ? 0 : 4}
        py={removePaddingY ? 0 : 4}
        {...boxProps}
      >
        {children}
      </Box>
    </Container>
  );
};

export default CustomContainer;
