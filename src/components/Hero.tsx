import { Box, Center, Heading, Text } from "@chakra-ui/react";

const AuthButtons = () => {};

const Hero = () => {
    return (
        <Box
            backgroundImage="url(/homebg.jpg)"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            as="section"
        >
            <Center
                as="header"
                backgroundColor="rgba(0, 0, 0, 0.60)"
                flexDirection="column"
                color="#FFF"
                minHeight="800px"
            >
                <Heading as="h1" fontSize={["xl", "7xl"]} textTransform="uppercase" mb={4}>
                    Hello!
                </Heading>
                <Text as="p" fontSize="4xl" fontWeight="bold" fontStyle="italic">
                    We love our work...
                </Text>
                <Text as="p" fontSize="4xl" fontWeight="bold" fontStyle="italic">
                    And We're taking it seriously...
                </Text>
            </Center>
        </Box>
    );
};
export default Hero;
