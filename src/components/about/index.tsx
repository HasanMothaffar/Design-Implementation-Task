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
        <BaseSection containerProps={{my: 32}}>
            <BaseContainer>
                <Grid templateColumns={["1fr", null, null, "2fr 3fr"]} pt={20} borderTop="1px dotted var(--chakra-colors-lightgray)">
                    <GridItem
                        mb={{ base: 10, lg: 0 }}
                        pr={{ base: 0, lg: 16 }}
                        textAlign={{ base: "center", lg: "left" }}
                        borderRight={{base: "", lg: "1px dotted var(--chakra-colors-lightgray)"}}
                    >
                        <Text as="h2" mb={4} color="#565656" fontSize="3xl" fontWeight="500">
                            About Us
                        </Text>
                        <Text textStyle="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                            feugiat eget diam sit amet molestie.Curabitur. ut ipsum bibendum tortor
                            lacinia fermentum nec joeıa.Mauris at augue libero. Fusce posuere,
                            sapien nec poır.Uaee augsuada sed mauris in tincidunt...
                        </Text>
                    </GridItem>

                    <GridItem justifyContent="space-around" display="flex">
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
