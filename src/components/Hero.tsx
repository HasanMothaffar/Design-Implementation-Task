import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import BaseContainer from "./shared/BaseContainer";

const ActionButtons = () => {
    const skewAmount = "20deg";

    const skewTransform = `skew(-${skewAmount})`;
    const antiSkewTransform = `skew(${skewAmount})`;

    const marginToAmountForSkewing = "0 -20px";

    return (
        <Flex color="#fff" margin={marginToAmountForSkewing} overflow="hidden">
            <Box flexGrow={1} bgColor="#21424a" transform={skewTransform} p={8} transition="all 0.4s ease-in-out" _hover={{
                flexGrow: 1.5
            }}>
                <Link
                    textAlign="center"
                    bgColor="#21424a"
                    transform={antiSkewTransform}
                    display="block"
                    fontSize={["md", "xl"]}
                    textTransform="uppercase"
                >
                    Login
                </Link>
            </Box>

            <Box flexGrow={1} bgColor="#2fac6c" transform={skewTransform} p={8} transition="all 0.4s ease-in-out" _hover={{
                flexGrow: 1.5
            }}>
                <Link
                    textAlign="center"
                    bgColor="#2fac6c"
                    transform={antiSkewTransform}
                    display="block"
                    fontSize={["md", "xl"]}
                    textTransform="uppercase"
                >
                    Register
                </Link>
            </Box>
        </Flex>
    );
};

const Hero = () => {
    return (
        <>
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
                    textAlign="center"
                >
                    <BaseContainer>
                        <Heading as="h1" fontSize={["5xl", "7xl"]} textTransform="uppercase" mb={6}>
                            Hello!
                        </Heading>
                        <Text as="p" fontSize={["2xl", "4xl"]} fontWeight="500" fontStyle="italic">
                            We love our work...
                        </Text>
                        <Text as="p" fontSize={["2xl", "4xl"]} fontWeight="500" fontStyle="italic">
                            And We're taking it seriously...
                        </Text>
                    </BaseContainer>
                </Center>
            </Box>
            <ActionButtons />
        </>
    );
};
export default Hero;
