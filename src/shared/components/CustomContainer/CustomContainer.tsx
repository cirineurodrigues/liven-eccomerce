import Box from "@mui/material/Box";
import Container, { ContainerProps } from "@mui/material/Container";

interface ICustomContainerProps extends ContainerProps {
  children: React.ReactNode;
  removePaddingX?: boolean;
  removePaddingY?: boolean;
}

const CustomContainer: React.FC<ICustomContainerProps> = ({
  children,
  removePaddingX = false,
  removePaddingY = false,
  ...props
}) => {
  return (
    <Container maxWidth="lg" disableGutters {...props}>
      <Box px={removePaddingX ? 0 : 4} py={removePaddingY ? 0 : 4}>
        {children}
      </Box>
    </Container>
  );
};

export default CustomContainer;
