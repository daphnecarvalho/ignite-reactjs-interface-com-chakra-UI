import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { CardCityItem } from "./CardItem";

interface CardCityProps {
  title: string;
  cities: {
    id: number;
    cityName: string;
    countryName: string;
    countryCode: string;
    cityImage: string;
  }[];
}

export function CardCity({ title, cities }: CardCityProps) {
  return (
    <Box maxWidth={1440} w="100%" mx="auto" pb="10" px={["6", "8", "24"]}>
      <Heading pb="8">{title}</Heading>

      <SimpleGrid
        flex="1"
        minChildWidth={["200px", "256px"]}
        gap="6"
        columns={4}
        align="flex-start"
      >
        {cities.map((city) => (
          <CardCityItem
            key={city.id}
            name={city.cityName}
            country={city.countryName}
            flag={city.countryCode}
            img={city.cityImage}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
