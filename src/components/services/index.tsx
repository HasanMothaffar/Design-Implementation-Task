import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useGetServices } from "../../data/getServices";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";

interface ServiceItemProps {
    children: React.ReactNode;
    customClass: string;
}

const ServiceItem = ({ children, customClass = "" }: ServiceItemProps) => {
    return (
        <GridItem
            w="100%"
            h="10"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={14}
            position="relative"
            color="gray.600"
            className={`service-item ${customClass}`}
        >
            {children}
        </GridItem>
    );
};

const Services = () => {
    const { serviceRows } = useGetServices();

    return (
        <BaseSection>
            <BaseContainer
                containerProps={{
                    centerContent: true,
                    as: "section",
                }}
            >
                <Text as="h3" textStyle="h3" fontWeight="bold" mb={4}>
                    Would you like to buy a new domain ?
                </Text>

                <Text textStyle="description" mb={10}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor
                    mauris ac nulla interdum, id molestier.
                </Text>

                <Grid
                    templateColumns="repeat(4, 1fr)"
                    gap={6}
                    width="100%"
                    border="1px solid #ddd"
                    p={6}
                >
                    {serviceRows.map((row, rowIndex) => {
                        return row.services.map((service, index) => (
                            <ServiceItem
                                key={index}
                                customClass={rowIndex === 0 ? "" : "no-border"}
                            >
                                {service.text}
                            </ServiceItem>
                        ));
                    })}
                </Grid>
            </BaseContainer>
        </BaseSection>
    );
};
export default Services;
