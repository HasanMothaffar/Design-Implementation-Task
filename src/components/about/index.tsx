import { Grid, GridItem, Text } from "@chakra-ui/react";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";
import PersonBubble from "./PersonBubble";

const people = [
    {
        title: "John Doe",
        description: "Designer",
    },

    {
        title: "John Doe",
        description: "Designer",
    },

    {
        title: "John Doe",
        description: "Designer",
    },
];

const AboutUs = () => {
    return (
        <BaseSection>
            <BaseContainer>
                <Grid templateColumns={["1fr", null, null, "2fr 3fr"]}>
                    <GridItem
                        borderRight="1px dotted var(--chakra-colors-lightgray)"
                        pr={{ base: 0, md: 16 }}
                        mb={{ base: 10, md: 0 }}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        <Text as="h2" fontSize="3xl" fontWeight="bold" mb={4}>
                            About Us
                        </Text>
                        <Text textStyle="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                            feugiat eget diam sit amet molestie.Curabitur. ut ipsum bibendum tortor
                            lacinia fermentum nec joeıa.Mauris at augue libero. Fusce posuere,
                            sapien nec poır.Uaee augsuada sed mauris in tincidunt...
                        </Text>
                    </GridItem>

                    <GridItem display="flex" justifyContent="space-around">
                        {people.map((person, index) => (
                            <PersonBubble {...person} key={index} />
                        ))}
                    </GridItem>
                </Grid>
            </BaseContainer>
        </BaseSection>
    );
};
export default AboutUs;
