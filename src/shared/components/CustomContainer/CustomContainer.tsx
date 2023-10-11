import Box from "@mui/material/Box";
import Container, { ContainerProps } from "@mui/material/Container";

interface ICustomContainerProps extends ContainerProps {
  children: string | JSX.Element | JSX.Element[];
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
    <Container maxWidth="lg" {...props}>
      <Box px={removePaddingX ? 0 : 1} py={removePaddingY ? 0 : 1}>
        {children}
      </Box>
    </Container>
  );
};

export default CustomContainer;
