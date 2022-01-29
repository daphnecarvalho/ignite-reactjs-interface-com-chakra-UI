import { Flex, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
  schema: string;
  title: string;
}

export function BannerContinent({ schema, title }: BannerContinentProps) {
  return (
    <Flex
      maxWidth={1440}
      h="500"
      mx="auto"
      backgroundImage={`../assets/banner/banner-${schema}.jpg`}
      backgroundRepeat="no-repeat"
      align="center"
      justifyContent="left"
    >
      <Heading
        px="120"
        pt="270"
        lineHeight="72px"
        color="gray.50"
        fontSize="48"
      >
        {title}
      </Heading>
    </Flex>
  );
}