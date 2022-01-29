import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface BannerHomeProps {
  qnt_continents: number;
}

export function BannerHome({ qnt_continents }: BannerHomeProps) {
  return (
    <Flex
      maxWidth={1440}
      minWidth={1440}
      h="335"
      mx="auto"
      px="6"
      backgroundImage="assets/banner/banner-background.png"
      backgroundRepeat="no-repeat"
    >
      <Flex
        mt="6"
        direction="column"
        justify="center"
        align="left"
        color="gray.50"
      >
        <Stack spacing="4">
          <Heading px="120" lineHeight="1.5">
            {qnt_continents} Continentes, <br/>
            infinitas possibilidades.
          </Heading>
          <Text px="120">
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </Stack>
      </Flex>
      <Flex align="center" justifyContent="center" mx="auto">
        <Image
          position="absolute"
          top="180"
          src='/assets/airplane.svg'
          alt='avião' 
        />
      </Flex>
    </Flex>
  );
}