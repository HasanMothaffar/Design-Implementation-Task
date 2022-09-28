import { Flex } from "@chakra-ui/react";

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
export default Star;
