import Head from "next/head";
import { Box, Flex, Text } from "@chakra-ui/react";

import { api } from "../services/api";
import { BannerHome } from "../components/BannerHome";
import { Slide } from "../components/Slide";
import { TypesOfTrip } from "../components/TypesOfTrip";
import { GetStaticProps } from "next";

interface HomeProps {
  continents: []
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <main>
        <BannerHome qnt_continents={!!continents ? continents.length : 0} />
        <TypesOfTrip />

        <Box maxWidth={1440} mx='auto' mb={['6', '10']}>
          <Flex
            mx="auto"
            px="6"
            align="center"
            justify-content="center"
            direction="column"
          >
            <Flex
              borderColor="gray.600"
              borderWidth="1px"
              borderStyle="solid"
              w="90px" 
            />
            <Flex py="8">
              <Flex direction="column">
                <Text fontSize="36" align="center">
                  Vamos nessa?
                </Text>
                <Text fontSize="36" align="center">
                  Então escolha seu continente
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Box w="100%" h="450px">
            <Slide continents={continents} />
          </Box>
        </Box>
      </main>
    </>
  )
}
 
export const getStaticProps: GetStaticProps = async () => {
  const continents = 
    await api.get("/continents")
            .then((response) => response.data);

  return {
    props: {
      continents
    },
    redirect: 60 * 60 * 24, // 24 hours
  }
}