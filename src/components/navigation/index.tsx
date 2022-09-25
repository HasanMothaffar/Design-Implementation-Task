import { Box } from "@chakra-ui/react";
import BaseContainer from "../shared/BaseContainer";
import NavLink from "./NavLink";

const links = [
    {
        title: "Home",
    },

    {
        title: "Domain",
    },

    {
        title: "Hosting",
    },

    {
        title: "Clients",
    },

    {
        title: "Blog",
    },

    {
        title: "Support",
    },
];

const Navigation = () => {
    return (
        <Box position="fixed" top={0} width="100%" bgColor="#3d3325" zIndex={100}>
            <BaseContainer
                containerProps={{
                    as: "nav",
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #686868",
                    pt: 6,
                    pb: 4,
                }}
            >
                <img
                    src="https://bootstrapthemes.co/demo/html/gost-host-one-page-template/assets/images/logo.png"
                    alt="Company's Logo"
                    width="133"
                    height="29"
                    style={{ objectFit: "contain" }}
                />

                <Box display="flex" justifyContent="space-between" gap={5}>
                    {links.map((link, index) => (
                        <NavLink {...link} key={index} />
                    ))}
                </Box>
            </BaseContainer>
        </Box>
    );
};
export default Navigation;
