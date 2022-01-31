import { ReactNode } from "react";
import { Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

interface CardTypeOfTripProps {
  children: ReactNode;
}

export function CardTypeOfTrip({ children }: CardTypeOfTripProps) {
  const isSmallScreen = useBreakpointValue({
    base: "repeat(auto-fill, minmax(105px, 1fr))",
    sm: "repeat(auto-fill, minmax(205px, 1fr))",
  });

  return (
    <Box
      maxWidth={1440}
      w="100%"
      mx="auto"
      pt="24"
      pb="16"
      px={["9", "22", "24"]}
    >
      <SimpleGrid
        flex="1"
        minChildWidth="105px"
        gap="6"
        justifySelf="center"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={isSmallScreen}
      >
        {children}
      </SimpleGrid>
    </Box>
  );
}
