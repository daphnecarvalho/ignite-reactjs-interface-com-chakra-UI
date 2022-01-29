import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { CitiesPlus100Item } from "./CitiesPlus100Item";

interface CitiesPlus100Props {
  cities: {
    id: number;
    cityName: string,
    countryName: string,
    countryCode: string,
    cityImage: string;
  }[];
}

export function CitiesPlus100({ cities }: CitiesPlus100Props) {
  return (
    <Box
      maxWidth={1440}
      mx="auto"
      pb="10"
      px="24"
    >
      <Heading pb="8">Cidades +100</Heading>

      <SimpleGrid
        flex="1"
        minChildWidth="256px"
        gap="6"
        columns={4}
        align="flex-start"
      >
        {cities.map((city) => (
          <CitiesPlus100Item
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