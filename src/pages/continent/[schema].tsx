import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Box } from "@chakra-ui/react";

import { api } from "../../services/api";
import { BannerContinent } from "../../components/BannerContinent";
import { ContinentInfo } from "../../components/ContinentInfo";
import { CardCity } from "../../components/CardCity";

interface ContinentProps {
  continent: {
    schema: string;
    title: string;
    description: string;
    qnt_country: number;
    qnt_language: number;
    qnt_city: number;
  };
  cities: [];
}

export default function ContinentSchema({ continent, cities }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.title} | worldtrip</title>
      </Head>

      <Box as="main">
        <BannerContinent schema={continent.schema} title={continent.title} />
        <ContinentInfo
          description={continent.description}
          qnt_country={continent.qnt_country}
          qnt_language={continent.qnt_language}
          qnt_city={continent.qnt_city}
        />

        <CardCity title="Cidades +100" cities={cities} />
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          schema: "europe",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { schema } = params;

  const continent = await api
    .get(`/continents?schema=${schema}`)
    .then((response) => response.data);

  const cities = await api.get(`/${schema}`).then((response) => response.data);

  return {
    props: {
      continent: !!continent
        ? { ...continent[0], qnt_city: cities.length }
        : {},
      cities,
    },
    redirect: 60 * 60 * 24, // 24 hours
  };
};
