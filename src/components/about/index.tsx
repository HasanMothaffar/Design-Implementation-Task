import { Grid, GridItem, Text } from "@chakra-ui/react";

const AboutUs = () => {
    return (
        <Grid templateColumns="2fr 3fr">
            <GridItem>
                <Text as="h2" fontSize="3xl" fontWeight="bold">
                    About Us
                </Text>
                <Text textStyle="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat eget
                    diam sit amet molestie.Curabitur. ut ipsum bibendum tortor lacinia fermentum nec
                    joeıa.Mauris at augue libero. Fusce posuere, sapien nec poır.Uaee augsuada sed
                    mauris in tincidunt...
                </Text>
            </GridItem>

            <GridItem></GridItem>
        </Grid>
    );
};
export default AboutUs;
