import {
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface CardTypeOfTripItemProps {
  image: string;
  children: string;
}

export function CardTypeOfTripItem({
  image,
  children,
}: CardTypeOfTripItemProps) {
  const isSmallScreen = useBreakpointValue({
    base: true,
    sm: false,
  });

  return (
    <Flex justifyContent="center" alignItems="baseline">
      <Stack spacing="2" direction={["row", "column"]}>
        {isSmallScreen ? (
          <Circle w="4" h="4" bg="yellow.500" alignSelf="center"></Circle>
        ) : (
          <Image height="85px" src={`/assets/${image}`} alt={children} />
        )}
        <Text fontWeight="600" lineHeight="9" align="center">
          {children}
        </Text>
      </Stack>
    </Flex>
  );
}
