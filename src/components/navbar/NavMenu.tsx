import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { useRef } from "react";
import BaseContainer from "../shared/BaseContainer";
import NavLink, { NavlinkProps } from "./NavLink";
import styles from "./Navmenu.module.css";

interface NavMenuProps {
    links: NavlinkProps[];
    isInFooter?: boolean;
}

const NavMenu = ({ links = [], isInFooter = false }: NavMenuProps) => {
    const navmenuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        navmenuRef.current?.classList.toggle(styles.expanded);
    };

    return (
        <BaseContainer
            containerProps={{
                as: "nav",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                position: "relative",
                borderBottom: "1px solid #686868",
                pt: 6,
                pb: 4,
                height: isInFooter ? "unset" : "90px",
            }}
        >
            <img
                src="https://bootstrapthemes.co/demo/html/gost-host-one-page-template/assets/images/logo.png"
                alt="Company's Logo"
                width="133"
                height="29"
                style={{ objectFit: "contain" }}
            />

            {!isInFooter && (
                <IconButton
                    className={styles.menuToggle}
                    aria-label={"Hamburger Menu"}
                    onClick={toggleMenu}
                >
                    <HamburgerIcon />
                </IconButton>
            )}

            <Flex
                className={isInFooter ? "" : styles.navmenu}
                ref={navmenuRef}
                justifyContent="space-between"
                gap={8}
            >
                {links.map((link, index) => (
                    <NavLink {...link} key={index} />
                ))}
            </Flex>
        </BaseContainer>
    );
};
export default NavMenu;
