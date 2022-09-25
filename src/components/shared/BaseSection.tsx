import { Box } from "@chakra-ui/react";

interface BaseSectionProps {
    children?: React.ReactNode;
}

const BaseSection = ({ children }: BaseSectionProps) => {
    return (
        <Box as="section" my={[10, 20]}>
            {children}
        </Box>
    );
};
export default BaseSection;
