import { Box, Center, Text } from "@chakra-ui/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import BaseContainer from "../shared/BaseContainer";
import BaseSection from "../shared/BaseSection";

const Quote = () => {
    return (
        <Box textAlign="center" color="#fff">
            <Text mb={4}>
                <q>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum
                    repudiandae <br />
                    minima architecto. Labore iste sunt molestias excepturi consequatur eos?
                </q>
            </Text>
            <Text fontSize="xl">John Doe</Text>
        </Box>
    );
};

const SliderSection = () => {
    return (
        <BaseSection
            containerProps={{
                backgroundImage:
                    "url(https://bootstrapthemes.co/demo/html/gost-host-one-page-template/assets/images/commnsbg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "100%",
                height: "250px",
            }}
        >
            <Center backgroundColor="rgba(0, 0, 0, 0.5)" height="100%">
                <BaseContainer>
                    <Splide
                        hasTrack={false}
                        options={{
                            rewind: true,
                            drag: true,
                            type: "loop",
                            height: "150px",
                            arrows: false,
                        }}
                    >
                        <SplideTrack>
                            <SplideSlide>
                                <Quote />
                            </SplideSlide>
                            <SplideSlide>
                                <Quote />
                            </SplideSlide>
                            <SplideSlide>
                                <Quote />
                            </SplideSlide>
                        </SplideTrack>
                    </Splide>
                </BaseContainer>
            </Center>
        </BaseSection>
    );
};
export default SliderSection;
