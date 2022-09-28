import { StarIcon } from "@chakra-ui/icons";
import { HStack, Stack, Text } from "@chakra-ui/react";

const PersonBubble = () => {
    return (
        <Stack alignItems="center">
            <img
                src="https://bootstrapthemes.co/demo/html/gost-host-one-page-template/assets/images/team1.jpg"
                alt="Person Bubble"
                width="90"
                height="90"
                style={{ borderRadius: "50%", border: "5px solid #e5e5e5" }}
            />
            <Text fontWeight="bold">Jonny Doe</Text>
            <Text textStyle="description" fontSize="sm">
                Designer
            </Text>

            <HStack mt="20px !important">
                <StarIcon color="gray" width="10px" height="10px" />
                <StarIcon color="gray" width="10px" height="10px" />
                <StarIcon color="gray" width="10px" height="10px" />
            </HStack>
        </Stack>
    );
};
export default PersonBubble;
