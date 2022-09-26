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
            p={[4, 8, 12, 14]}
            position="relative"
            color="gray.600"
            className={`service-item ${customClass}`}
            whiteSpace="nowrap"
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
                <Text as="h3" textStyle="h3" fontWeight="bold" mb={4} textAlign="center">
                    Would you like to buy a new domain ?
                </Text>

                <Text textStyle="description" textAlign="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor
                    mauris ac nulla interdum, id molestier.
                </Text>

                <InputGroup size="lg" my={10}>
                    <InputLeftElement
                        border="1px solid var(--chakra-colors-lightgray)"
                        width="5rem"
                    >
                        www.
                    </InputLeftElement>
                    <Input
                        placeholder="mysite"
                        borderRadius="0"
                        style={{ paddingLeft: "5.5rem", paddingRight: "5.5rem" }}
                    />
                    <InputRightElement width="5rem" height="100%">
                        <select
                            name="tld"
                            id="tld"
                            placeholder=".com"
                            style={{
                                border: "1px solid var(--chakra-colors-lightgray)",
                                height: "100%",
                                width: "100%",
                                textAlign: "center",
                            }}
                        >
                            <option value=".com">.com</option>
                            <option value=".org">.org</option>
                            <option value=".ca">.ca</option>
                        </select>
                    </InputRightElement>
                </InputGroup>

                <Grid
                    templateColumns="repeat(4, 1fr)"
                    gap={6}
                    width="100%"
                    border="1px solid var(--chakra-colors-lightgray)"
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
