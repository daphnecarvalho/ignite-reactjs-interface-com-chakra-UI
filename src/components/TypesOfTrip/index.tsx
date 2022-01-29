import { Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { TypesOfTripItem } from "./TypesOfTripItem";

export function TypesOfTrip() {
  const isAtLeastMediumScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  
  return (
    <Flex
      maxWidth={1440}
      w="100%"
      minHeight="335"
      mx="auto"
      pt="24"
      pb="16"
      px={["9", "22", "24"]}
    >
      <SimpleGrid
        flex="1" 
        gap="10"
        columns={[2, 3, 5, 5]}
        align="center"
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