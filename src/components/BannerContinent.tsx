import { Flex, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
  schema: string;
  title: string;
}

export function BannerContinent({ schema, title }: BannerContinentProps) {
  return (
    <Flex
      maxWidth={1440}
      w="100%"
      h={["150", "500"]}
      mx="auto"
      backgroundImage={`../assets/banner/banner-${schema}.jpg`}
      backgroundRepeat="no-repeat"
      align="center"
      justifyContent={["center", "left"]}
    >
      <Heading
        px={["6", "19", "120"]}
        pt={["0", "270"]}
        lineHeight="72px"
        color="gray.50"
        fontSize={["28", "48"]}
      >
        {title}
      </Heading>
    </Flex>
  );
}