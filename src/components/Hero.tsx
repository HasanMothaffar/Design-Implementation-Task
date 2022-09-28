import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import BaseContainer from "./shared/BaseContainer";

const ActionButtons = () => {
    const skewAmount = "20deg";

    const skewTransform = `skew(-${skewAmount})`;
    const antiSkewTransform = `skew(${skewAmount})`;

    const marginToAmountForSkewing = "0 -20px";

    return (
        <Flex overflow="hidden" m={marginToAmountForSkewing} color="#fff">
            <Box
                flexGrow={1}
                p={8}
                _hover={{
                    flexGrow: 1.5,
                }}
                transform={skewTransform}
                transition="all 0.4s ease-in-out"
                bgColor="#21424a"
            >
                <Link
                    display="block"
                    fontSize={["md", "xl"]}
                    textAlign="center"
                    textTransform="uppercase"
                    transform={antiSkewTransform}
                    bgColor="#21424a"
                >
                    Login
                </Link>
            </Box>

            <Box
                flexGrow={1}
                p={8}
                _hover={{
                    flexGrow: 1.5,
                }}
                transform={skewTransform}
                transition="all 0.4s ease-in-out"
                bgColor="#2fac6c"
            >
                <Link
                    display="block"
                    fontSize={["md", "xl"]}
                    textAlign="center"
                    textTransform="uppercase"
                    transform={antiSkewTransform}
                    bgColor="#2fac6c"
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
                as="section"
                bgImage="url(./homebg.jpg)"
                bgSize="cover"
                bgRepeat="no-repeat"
                id="home"
            >
                <Center
                    as="header"
                    flexDir="column"
                    minH="800px"
                    color="#FFF"
                    textAlign="center"
                    bgColor="rgba(0, 0, 0, 0.60)"
                >
                    <BaseContainer>
                        <Heading as="h1" mb={6} fontSize={["5xl", "7xl"]} textTransform="uppercase">
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
