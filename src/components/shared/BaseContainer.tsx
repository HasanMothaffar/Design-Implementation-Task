import { Container, ContainerProps } from "@chakra-ui/react";

interface BaseContainerProps {
    children?: React.ReactNode;
    containerProps?: ContainerProps;
}

const BaseContainer = ({ children, containerProps }: BaseContainerProps) => {
    return (
        <Container maxW={["container.sm", "container.xl"]} {...containerProps}>
            {children}
        </Container>
    );
};
export default BaseContainer;
