import { Box } from "@chakra-ui/react";

const NavLink = ({ title = "", href = "" }) => {
    return (
        <Box
            py={4}
            color="gray"
            textTransform="uppercase"
            fontSize="13px"
            transition="color 0.2s ease-in"
            _hover={{
                color: "#e84c3d",
            }}
        >
            <a href={href} title={title}>
                {title}
            </a>
        </Box>
    );
};

export default NavLink;
