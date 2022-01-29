import { Flex, Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex align="center" justifyContent="center" mx="auto">
      <Image src='/assets/logo.svg' alt='logo' />
    </Flex>
  );
}