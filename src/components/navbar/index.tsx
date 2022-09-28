import { Box } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import NavMenu from "./NavMenu";

const links = [
    {
        title: "Home",
        href: "",
    },

    {
        title: "Domain",
        href: "",
    },

    {
        title: "Hosting",
        href: "",
    },

    {
        title: "Clients",
        href: "",
    },

    {
        title: "Blog",
        href: "",
    },

    {
        title: "Support",
        href: "",
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
                navbarContainer.current.style.backgroundColor = "var(--chakra-colors-navbarbg)";
            } else {
                navbarContainer.current.style.backgroundColor = "transparent";
            }
        };

        return scrollY.onChange(changeNavbarBackgroundIfNecessary);
    });

    return (
        <Box
            className="navigation"
            ref={navbarContainer}
            position="fixed"
            zIndex={100}
            top={0}
            width="100%"
            transition="background-color 0.2s ease-in"
        >
            <NavMenu links={links} />
        </Box>
    );
};
export default Navbar;
