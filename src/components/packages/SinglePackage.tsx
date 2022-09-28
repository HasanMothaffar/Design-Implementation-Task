import { Box, Text, Flex } from "@chakra-ui/react";

const Star = ({
    fill = "yellow",
    borderTop = "",
    borderRight = "",
    borderLeft = "",
    borderBottom = "",
}) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            width="80px"
            height="80px"
            mb={4}
            mx="auto"
            borderTop={borderTop}
            borderRight={borderRight}
            borderBottom={borderBottom}
            borderLeft={borderLeft}
            borderRadius="50%"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={fill}
                style={{ margin: "0 auto" }}
            >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
        </Flex>
    );
};

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
                        <Flex
                            key={index}
                            as="li"
                            justifyContent="space-between"
                            mb={4}
                        >
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

                <a style={{ display: "block", textTransform: "uppercase" }}>Select Plan</a>
            </Box>
        </Box>
    );
};
export default SinglePackage;
