import { Flex, SimpleGrid } from "@chakra-ui/react";

import { TypesOfTripItem } from "./TypesOfTripItem";

export function TypesOfTrip() {
  return (
    <Flex
      maxWidth={1440}
      h="335"
      mx="auto"
      pt="24"
      pb="16"
      px="24"
    >
      <SimpleGrid
        flex="1" 
        gap="28"
        columns={5}
        align="flex-start"
      >
        <TypesOfTripItem image="cocktail.svg">vida noturna</TypesOfTripItem>
        <TypesOfTripItem image="surf.svg">praia</TypesOfTripItem>
        <TypesOfTripItem image="building.svg">moderno</TypesOfTripItem>
        <TypesOfTripItem image="museum.svg">clássico</TypesOfTripItem>
        <TypesOfTripItem image="earth.svg">e mais...</TypesOfTripItem>
      </SimpleGrid>
    </Flex>
  );
}