import { InfoOutlineIcon, LinkIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/react";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";
import SingleFeature from "./SingleFeature";

const featuresData = [
    {
        title: "Fast Servers",
        fill: "#f1c40f",
        icon: <InfoOutlineIcon color="#fff" />,
    },

    {
        title: "Cloud Servers",
        fill: "#0faff1",
        icon: <SunIcon color="#fff" />,
    },
    {
        title: "Domain Transfer",
        fill: "#95a5a6",
        icon: <MoonIcon color="#fff" />,
    },

    {
        title: "Live Support",
        fill: "#f1540f",
        icon: <LinkIcon color="#fff" />,
    },
];

const Features = () => {
    return (
        <BaseSection>
            <BaseContainer>
                <Grid gap={8} templateColumns="repeat(auto-fit, minmax(200px, auto))">
                    {featuresData.map((feature, index) => {
                        return (
                            <GridItem key={index}>
                                <SingleFeature {...feature} />
                            </GridItem>
                        );
                    })}
                </Grid>
            </BaseContainer>
        </BaseSection>
    );
};
export default Features;
