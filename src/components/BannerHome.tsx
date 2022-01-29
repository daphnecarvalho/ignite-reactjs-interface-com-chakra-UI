import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerHomeProps {
  qnt_continents: number;
}

export function BannerHome({ qnt_continents }: BannerHomeProps) {
  const isAtLeastMediumScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  
  return (
    <Flex
      maxWidth={1440}
      h="335"
      mx="auto"
      px="6"
      backgroundImage="assets/banner/banner-background.png"
      backgroundRepeat="no-repeat"
    >
      <Flex
        mt={["0", "20"]}
        direction="column"
        justify={["center", "space-between"]}
        align="left"
        color="gray.50"
      >
        <Stack spacing="4">
          <Heading pl={["5", "19", "120"]} lineHeight="1.5">
            {qnt_continents} Continentes, <br/>
            infinitas possibilidades.
          </Heading>
          <Text pl={["5", "19", "120"]}>
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Stack>
      </Flex>
      <Flex align="center" justifyContent="center" mx="auto">
        {!!isAtLeastMediumScreen && <Image
            position="absolute"
            top={["0", "0", "0", "260", "180"]}
            src='/assets/airplane.svg'
            alt='avião'
            maxWidth={["0", "0", "0", "301px", "431px"]}
          />}
      </Flex>
    </Flex>
  );
}