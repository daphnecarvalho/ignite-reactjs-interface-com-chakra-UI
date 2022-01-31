import { Flex, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface CardCityItemrops {
  img: string;
  name: string;
  country: string;
  flag: string;
}

export function CardCityItem({ img, name, country, flag }: CardCityItemrops) {
  return (
    <Flex direction="column" bg="white">
      <Image
        src={img}
        alt={name}
        borderTopRadius="4"
        w="100%"
        h="173"
        objectFit="cover"
      />
      <Flex
        justify="space-between"
        align="center"
        p={6}
        border="1px"
        borderColor="yellow.100"
        borderTop="0"
        borderBottomRadius="4"
      >
        <Flex direction="column">
          <Text fontSize="xl" fontWeight="600" mb={3}>
            {name}
          </Text>
          <Text color="gray.500" fontSize="md" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <Flex fontWeight="600" lineHeight="9" align="center">
          <ReactCountryFlag
            style={{
              fontSize: "2em",
              lineHeight: "2em",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            aria-label={name}
            countryCode={flag}
            svg
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
