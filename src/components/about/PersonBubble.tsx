import { HStack, Stack, Text } from "@chakra-ui/react";

const PersonBubble = ({ title = "", description = "" }) => {
    return (
        <Stack alignItems="center">
            <img
                src="https://bootstrapthemes.co/demo/html/gost-host-one-page-template/assets/images/team1.jpg"
                alt="Person Bubble"
                width="90"
                height="90"
                style={{ borderRadius: "50%", border: "5px solid #e5e5e5" }}
            />
            <Text>Jonny Doe</Text>
            <Text textStyle="description">Designer</Text>

            <HStack></HStack>
        </Stack>
    );
};
export default PersonBubble;
