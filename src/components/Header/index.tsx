import { Flex } from "@chakra-ui/react";

import { BackButton } from "./BackButton";
import { Logo } from "./Logo";

interface HeaderProps {
  path: string;
}

export function Header({ path }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="100"
      mx="auto"
      align="center"
    >
      {!!path && path !== "/" && <BackButton />}
      <Logo />
    </Flex>
  );
}