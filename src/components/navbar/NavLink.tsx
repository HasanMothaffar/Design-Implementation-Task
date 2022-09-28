import { Box } from "@chakra-ui/react";

export interface NavlinkProps {
    title: string;
    href: string;
}

const NavLink = ({ title = "", href = "" }: NavlinkProps) => {
    return (
        <Box
            py={4}
            color="gray"
            fontSize="13px"
            textTransform="uppercase"
            _hover={{
                color: "#e84c3d",
            }}
            whiteSpace="nowrap"
            transition="color 0.2s ease-in"
        >
            <a href={href} title={title}>
                {title}
            </a>
        </Box>
    );
};

export default NavLink;
