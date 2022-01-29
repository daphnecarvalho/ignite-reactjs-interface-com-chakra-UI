import { Flex, Image, Stack, Text } from "@chakra-ui/react";

interface TypesOfTripItemProps {
  image: string;
  children: string;
}

export function TypesOfTripItem({ image, children }: TypesOfTripItemProps) {
  return (
    <Flex direction="column" align="center">
      <Stack spacing="2">
        <Image maxHeight="85px" src={`/assets/${image}`} alt={children} />
        <Text fontWeight="600" lineHeight="9" align="center">{children}</Text>
      </Stack>
    </Flex>
  );
}