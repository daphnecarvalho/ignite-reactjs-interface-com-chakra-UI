import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface BannerHomeProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function BannerHome({ title, subtitle, children }: BannerHomeProps) {
  const isAtLeastMediumScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      maxWidth={1440}
      h="335"
      mx="auto"
      px="6"
      backgroundImage="assets/banner/banner-background.png"
      backgroundRepeat="no-repeat"
    >
      <Flex
        maxWidth="620px"
        mt={["0", "20"]}
        direction="column"
        justify={["center", "space-between"]}
        align="left"
        color="gray.50"
      >
        <Stack spacing="4">
          <Heading pl={["5", "19", "120"]} lineHeight="1.5">
            {title}
          </Heading>
          <Text pl={["5", "19", "120"]}>{subtitle}</Text>
        </Stack>
      </Flex>
      <Flex align="center" justifyContent="center" mx="auto">
        {!!isAtLeastMediumScreen && children}
      </Flex>
    </Flex>
  );
}
