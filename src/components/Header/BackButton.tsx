import Link from "next/link";
import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { FiChevronLeft } from 'react-icons/fi';

export function BackButton() {
  return (
    <Flex position="absolute" ml="35" borderRadius="4">
      <Link href="/" passHref>
        <IconButton
          aria-label="Voltar para Home"
          as="a"
          cursor="pointer"
          size="sm"
          fontSize="32"
          colorScheme="transparent"
          icon={<Icon as={FiChevronLeft} color="gray.600" />}
          _hover={{ bg: "gray.100" }}
        />
      </Link>
    </Flex>
  );
}