import { ChevronRightIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Grid, Link, Stack, Text } from "@chakra-ui/react";
import NavMenu from "./navbar/NavMenu";
import BaseContainer from "./shared/BaseContainer";

const links = [
    {
        title: "Home",
        href: "#",
    },

    {
        title: "About Us",
        href: "#",
    },

    {
        title: "Blog",
        href: "#",
    },

    {
        title: "Policy",
        href: "#",
    },

    {
        title: "Contact",
        href: "#",
    },
];

const Footer = () => {
    return (
        <Box as="footer" bgColor="#2a2a2a">
            <NavMenu links={links} isInFooter={true} />
            <BaseContainer>
                <Grid
                    rowGap={8}
                    columnGap={4}
                    templateColumns={["1fr 1fr", null, "2fr 1fr 1fr 1fr"]}
                    py={16}
                    color="#686868"
                    fontSize="13px"
                >
                    <Box gridColumn={["1 / 3", null, "1/ 2"]}>
                        <Text>
                            Lorem ipsum dolor sit amet, consecteteeseurı adipiscing elit. Donec
                            mollis commodoeesene que, non commodo risus volutpat vel.
                        </Text>

                        <Link>Implementation by Hasan Mothaffar</Link>
                    </Box>

                    <Stack spacing={0}>
                        <Link>
                            <ChevronRightIcon width={5} height={5} />
                            Support
                        </Link>
                        <Link>
                            <ChevronRightIcon width={5} height={5} />
                            Account
                        </Link>
                        <Link>
                            <ChevronRightIcon width={5} height={5} />
                            Product Catalog
                        </Link>
                        <Link>
                            <ChevronRightIcon width={5} height={5} />
                            Shortcode
                        </Link>
                    </Stack>

                    <Stack spacing={0}>
                        <Link>
                            <ChevronRightIcon width={5} height={5} />
                            Support
                        </Link>
                        <Link>
                            <ChevronRightIcon width={5} height={5} />
                            Account
                        </Link>
                        <Link>
                            <ChevronRightIcon width={5} height={5} />
                            Product Catalog
                        </Link>
                        <Link>
                            <ChevronRightIcon width={5} height={5} />
                            Shortcode
                        </Link>
                    </Stack>

                    <Stack
                        pl={[0, null, 8]}
                        borderLeft={["none", null, "1px solid #686868"]}
                        spacing={0}
                    >
                        <Link>
                            <span>
                                <PhoneIcon mr={2} />
                            </span>
                            0000-0000-0000
                        </Link>

                        <Link display="flex">
                            <span>
                                <EmailIcon mr={2} />
                            </span>
                            <span>informationteam@ghosthost.com</span>
                        </Link>

                        <Text>Lorem Ipsum Street, Lorem Avenue,Lorem Ipsum</Text>
                    </Stack>
                </Grid>
            </BaseContainer>
        </Box>
    );
};
export default Footer;
