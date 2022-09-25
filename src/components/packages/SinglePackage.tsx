import { Box, Text } from "@chakra-ui/react";

interface PackageProperties {
    title: string;
    content: string | number;
}

interface PackageProps {
    title: string;
    color: string;
    icon?: string;

    properties: PackageProperties[];
}

const SinglePackage = ({ title = "", color, properties = [] }: PackageProps) => {
    return (
        <Box
            border="1px solid var(--chakra-colors-lightgray)"
            borderTop={`3px solid ${color}`}
            py={10}
            px={4}
        >
            <Box textAlign="center" mb={10} borderBottom="1px solid silver" pb={4}>
                <Text as="h2" textTransform="uppercase">
                    {title}
                </Text>
            </Box>

            <Box as="ul" listStyleType="none">
                {properties.map((property, index) => {
                    return (
                        <Box
                            as="li"
                            key={index}
                            display="flex"
                            justifyContent="space-between"
                            mb={4}
                        >
                            <Box>{property.title}</Box>
                            <Box color={color}>{property.content}</Box>
                        </Box>
                    );
                })}
            </Box>

            <Box textAlign="center">
                <Text
                    as="h3"
                    borderBottom={`4px solid ${color}`}
                    display="inline-block"
                    fontSize="3xl"
                    fontWeight="bold"
                    mb={4}
                >
                    <Box fontSize="xl" as="span">
                        $
                    </Box>{" "}
                    20{" "}
                    <Box fontSize="xl" as="span" fontWeight="normal">
                        /Mo{" "}
                    </Box>
                </Text>

                <a style={{ display: "block", textTransform: "uppercase" }}>
                    Select Plan
                </a>
            </Box>
        </Box>
    );
};
export default SinglePackage;
