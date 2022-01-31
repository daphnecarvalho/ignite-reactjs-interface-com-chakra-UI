import Link from "next/link";
import { Flex, Heading, Link as ChakraLink, Text } from "@chakra-ui/react";

interface ContinentProps {
  schema: string;
  title: string;
  subtitle: string;
}

export function SlideItem({ schema, title, subtitle }: ContinentProps) {
  return (
    <Link href={`/continent/${schema}`} passHref>
      <ChakraLink _hover={{}}>
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          bgImage={`url(assets/slide/slide-${schema}.jpg)`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          textAlign="center"
          _hover={{
            opacity: "0.9",
          }}
        >
          <Heading
            fontSize={["30px", "40px", "50px"]}
            color="gray.50"
            fontWeight="700"
          >
            {title}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.100"
            fontSize={["24px", "24px", "30px"]}
            mt={["12px", "4"]}
          >
            {subtitle}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
}
