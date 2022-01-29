import { Circle, Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypesOfTripItemProps {
  image: string;
  children: string;
}

export function TypesOfTripItem({ image, children }: TypesOfTripItemProps) {
  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: false,
  });
  
  return (
    <Flex direction={["row", "column"]} align="center">
      <Stack spacing="2" direction={["row", "column"]}>
        {isSmallScreen 
          ? <Circle w="4" h="4" bg="yellow.500" justifyContent="center"></Circle>
          : <Image maxHeight="85px" src={`/assets/${image}`} alt={children} />
        }
        <Text fontWeight="600" lineHeight="9" align="center">{children}</Text>
      </Stack>
    </Flex>
  );
}