import Head from "next/head";
import { GetStaticProps } from "next";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { api } from "../services/api";
import { BannerHome } from "../components/BannerHome";
import { CardTypeOfTrip } from "../components/CardTypeOfTrip";
import { CardTypeOfTripItem } from "../components/CardTypeOfTrip/CardTypeOfTripItem";
import { Slide } from "../components/Slide";

interface HomeProps {
  continents: [];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Box as="main">
        <BannerHome
          title={`${!!continents ? continents.length : 0} Continentes,
          infinitas possibilidades.`}
          subtitle={
            "Chegou a hora de tirar do papel a viagem que você sempre sonhou."
          }
        >
          <Image
            position="absolute"
            top={["0", "0", "0", "260", "180"]}
            src="/assets/airplane.svg"
            alt="avião"
            maxWidth={["0", "0", "0", "301px", "431px"]}
          />
        </BannerHome>

        <CardTypeOfTrip>
          <CardTypeOfTripItem image="cocktail.svg">
            vida noturna
          </CardTypeOfTripItem>
          <CardTypeOfTripItem image="surf.svg">praia</CardTypeOfTripItem>
          <CardTypeOfTripItem image="building.svg">moderno</CardTypeOfTripItem>
          <CardTypeOfTripItem image="museum.svg">clássico</CardTypeOfTripItem>
          <CardTypeOfTripItem image="earth.svg">e mais...</CardTypeOfTripItem>
        </CardTypeOfTrip>

        <Box w="100%" mx="auto" mb={["6", "10"]}>
          <Flex
            mx="auto"
            align="center"
            justify-content="center"
            direction="column"
          >
            <Flex
              borderColor="gray.600"
              borderWidth="1px"
              borderStyle="solid"
              w="90px"
              px="6"
            />
            <Flex py="8">
              <Flex direction="column">
                <Text fontSize={["30", "36"]} align="center">
                  Vamos nessa?
                </Text>
                <Text fontSize={["30", "36"]} align="center">
                  Então escolha seu continente
                </Text>
              </Flex>
            </Flex>
            <Flex maxWidth={1440} w="100%" h="450px">
              <Slide continents={continents} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await api
    .get("/continents")
    .then((response) => response.data);

  return {
    props: {
      continents,
    },
    redirect: 60 * 60 * 24, // 24 hours
  };
};
