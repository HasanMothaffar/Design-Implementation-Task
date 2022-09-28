import {
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import { useGetServices } from "../../data/getServices";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";
import DomainInput from "./DomainInput";

interface ServiceItemProps {
    children: React.ReactNode;
    customClass: string;
}

const ServiceItem = ({ children, customClass = "" }: ServiceItemProps) => {
    return (
        <GridItem
            className={`service-item ${customClass}`}
            position="relative"
            alignItems="center"
            justifyContent="center"
            display="flex"
            w="100%"
            h="10"
            p={[8, 12, 14]}
            color="gray.600"
            textAlign="center"
        >
            {children}
        </GridItem>
    );
};

const Services = ({ scrollId = "" }) => {
    const { serviceRows } = useGetServices();

    return (
        <BaseSection containerProps={{id: "domain"}}>            
            <BaseContainer
                containerProps={{
                    centerContent: true,
                    as: "section",
                }}
            >
                <Text as="h3" textStyle="h3" mb={4} fontWeight="bold" textAlign="center">
                    Would you like to buy a new domain ?
                </Text>

                <Text textStyle="description" textAlign="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor
                    mauris ac nulla interdum, id molestier.
                </Text>

                <DomainInput />

                <Grid
                    gap={{base: 0, lg: 6}}
                    templateColumns={{base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}}
                    width="100%"
                    px={6}
                    py={{base: 0, lg: 6}}
                    border="1px solid var(--chakra-colors-lightgray)"
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
