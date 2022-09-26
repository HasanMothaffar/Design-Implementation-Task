import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Grid, GridItem } from "@chakra-ui/react";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";
import SingleFeature from "./SingleFeature";

const featuresData = [
    {
        title: "Fast Servers",
        fill: "#f1c40f",
        icon: <InfoOutlineIcon />,
    },

    {
        title: "Cloud Servers",
        fill: "#0faff1",
        icon: <InfoOutlineIcon />,
    },
    {
        title: "Domain Transfer",
        fill: "#95a5a6",
        icon: <InfoOutlineIcon />,
    },

    {
        title: "Live Support",
        fill: "#f1540f",
        icon: <InfoOutlineIcon />,
    },
];

const Features = () => {
    return (
        <BaseSection>
            <BaseContainer>
                <Grid templateColumns="repeat(auto-fit, minmax(200px, auto))" gap={8}>
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
