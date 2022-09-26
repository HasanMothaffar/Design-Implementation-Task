import { Box, BoxProps } from "@chakra-ui/react";

interface BaseSectionProps {
    children?: React.ReactNode;
    containerProps?: BoxProps;
}

const BaseSection = ({ children, containerProps = {} }: BaseSectionProps) => {
    return (
        <Box as="section" my={[10, 20]} {...containerProps}>
            {children}
        </Box>
    );
};
export default BaseSection;
