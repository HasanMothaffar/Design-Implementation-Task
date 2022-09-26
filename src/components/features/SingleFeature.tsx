import { Center, Stack, Text } from "@chakra-ui/react";

interface FeatureProps {
    title: string;
    fill: string;
    icon: React.ReactNode;
}

const SingleFeature = ({ title = "", fill = "yellow", icon }: FeatureProps) => {
    return (
        <Stack alignItems="center" justifyContent="center" textAlign="center">
            <Center bgColor={fill} borderRadius="50%" width="60px" height="60px" mb={4}>
                {icon}
            </Center>
            <Text as="h4" fontSize="lg" fontWeight="bold">
                {title}
            </Text>
            <Text>Nulla dapibus neque augue, quis tincidunt tortor aliquam vitae.</Text>
        </Stack>
    );
};
export default SingleFeature;
