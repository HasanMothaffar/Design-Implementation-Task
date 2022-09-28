import { Box, Flex, Text } from "@chakra-ui/react";
import Star from "./Star";

interface PackageProperties {
    title: string;
    content: string | number;
}

interface PackageProps {
    title: string;
    color: string;
    icon?: string;

    borderTop: string;
    borderRight: string;
    borderLeft: string;
    borderBottom: string;

    properties: PackageProperties[];
}

const SinglePackage = ({
    title = "",
    color,
    properties = [],
    borderTop = "",
    borderRight = "",
    borderLeft = "",
    borderBottom = "",
}: PackageProps) => {
    return (
        <Box
            px={4}
            py={10}
            border="1px solid var(--chakra-colors-lightgray)"
            borderTop={`5px solid ${color}`}
            boxShadow="8px 10px 27px -18px rgb(0 0 0 / 57%)"
            bgColor="#fff"
        >
            <Box mb={10} pb={4} textAlign="center" borderBottom="1px solid silver">
                <Star
                    fill={color}
                    borderTop={borderTop}
                    borderRight={borderRight}
                    borderLeft={borderLeft}
                    borderBottom={borderBottom}
                />
                <Text as="h2" textTransform="uppercase">
                    {title}
                </Text>
            </Box>

            <Box as="ul" listStyleType="none">
                {properties.map((property, index) => {
                    return (
                        <Flex key={index} as="li" justifyContent="space-between" mb={4}>
                            <Box>{property.title}</Box>
                            <Box color={color}>{property.content}</Box>
                        </Flex>
                    );
                })}
            </Box>

            <Box textAlign="center">
                <Text
                    as="h3"
                    display="inline-block"
                    mb={4}
                    fontSize="3xl"
                    fontWeight="bold"
                    borderBottom={`4px solid ${color}`}
                >
                    <Box as="span" fontSize="xl">
                        $
                    </Box>{" "}
                    20{" "}
                    <Box as="span" fontSize="xl" fontWeight="normal">
                        /Mo{" "}
                    </Box>
                </Text>

                <a
                    href=""
                    title="Select plan"
                    style={{ display: "block", textTransform: "uppercase" }}
                >
                    Select Plan
                </a>
            </Box>
        </Box>
    );
};
export default SinglePackage;
