import { Box } from "@chakra-ui/react";
import { useGetPackages } from "../../data/getPackages";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";
import SinglePackage from "./SinglePackage";

const Packages = () => {
    const { packages } = useGetPackages();
    return (
        <BaseSection>
            <Box
                width="100%"
                height="400px"
                backgroundImage="url(https://bootstrapthemes.co/demo/html/gost-host-one-page-template/assets/images/pricingbg.jpg)"
                backgroundSize="cover"
                backgroundPosition="100%"
                backgroundRepeat="no-repeat"
                filter="brightness(0.4)"
            ></Box>
            <BaseContainer
                containerProps={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, auto))",
                    gap: 8,
                    position: "relative",
                    marginTop: "-250px", // I didn't use top in order to preserve the dom flow and margins
                }}
            >
                {packages.map((packageData) => (
                    <SinglePackage {...packageData} key={packageData.id} />
                ))}
            </BaseContainer>
        </BaseSection>
    );
};
export default Packages;
