import { Box, Text } from "@chakra-ui/react";

const Star = ({
    fill = "yellow",
    borderTop = "",
    borderRight = "",
    borderLeft = "",
    borderBottom = "",
}) => {
    return (
        <Box
            borderTop={borderTop}
            borderRight={borderRight}
            borderLeft={borderLeft}
            borderBottom={borderBottom}
            borderRadius="50%"
            width="80px"
            height="80px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx="auto"
            mb={4}
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
        </Box>
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
            border="1px solid var(--chakra-colors-lightgray)"
            borderTop={`5px solid ${color}`}
            py={10}
            px={4}
            bgColor="#fff"
        >
            <Box textAlign="center" mb={10} borderBottom="1px solid silver" pb={4}>
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

                <a style={{ display: "block", textTransform: "uppercase" }}>Select Plan</a>
            </Box>
        </Box>
    );
};
export default SinglePackage;
