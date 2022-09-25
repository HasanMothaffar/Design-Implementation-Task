import { Box } from "@chakra-ui/react";
import BaseContainer from "../shared/BaseContainer";
import { useGetPackages } from "../../data/getPackages";
import SinglePackage from "./SinglePackage";



const Packages = () => {
    const { packages } = useGetPackages();
    return (
        <Box mb={10}>
            <BaseContainer containerProps={{
                display: "flex",
                justifyContent: "space-between"  
            }}>
                {packages.map((packageData) => (
                    <SinglePackage {...packageData} key={packageData.id} />
                ))}
            </BaseContainer>
        </Box>
    );
};
export default Packages;
