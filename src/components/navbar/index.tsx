import { Box } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import NavMenu from "./NavMenu";

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

const Navbar = () => {
    const { scrollY } = useScroll();
    const navbarContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollMarginInPixels = 200;
        const changeNavbarBackgroundIfNecessary = (scrollPosition: number) => {
            if (!navbarContainer.current) return;

            const isWindowBelowMargin = scrollPosition >= scrollMarginInPixels;
            if (isWindowBelowMargin) {
                navbarContainer.current.style.backgroundColor = "#3d3325";
            } else {
                navbarContainer.current.style.backgroundColor = "transparent";
            }
        }
        
        return scrollY.onChange(changeNavbarBackgroundIfNecessary);
    });

    return (
        <Box
            ref={navbarContainer}
            position="fixed"
            top={0}
            width="100%"
            zIndex={100}
            className="navigation"
            transition="background-color 0.2s ease-in"
        >
            <NavMenu links={links} />
        </Box>
    );
};
export default Navbar;
