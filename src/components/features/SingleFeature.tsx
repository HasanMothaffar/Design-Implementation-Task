import { Center, Stack, Text } from "@chakra-ui/react";

interface FeatureProps {
    title: string;
    fill: string;
    icon: React.ReactNode;
}

const SingleFeature = ({ title = "", fill = "yellow", icon }: FeatureProps) => {
    return (
        <Stack alignItems="center" justifyContent="center" textAlign="center">
            <Center width="60px" height="60px" mb={4} borderRadius="50%" bgColor={fill}>
                {icon}
            </Center>
            <Text as="h4" fontSize="lg" fontWeight="500">
                {title}
            </Text>
            <Text color="#686868">
                Nulla dapibus neque augue, quis tincidunt tortor aliquam vitae.
            </Text>
        </Stack>
    );
};
export default SingleFeature;
