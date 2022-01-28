import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { BannerContinent } from "../../components/BannerContinent";
import { CitiesPlus100 } from "../../components/CitiesPlus100";
import { ContinentInfo } from "../../components/ContinentInfo";

interface ContinentProps {
  continent: {
    name: string;  
  }
}

export default function ContinentSchema({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{ continent.name } | worldtrip</title>
      </Head>

      <BannerContinent />
      <ContinentInfo />
      <CitiesPlus100 />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{
      params: {
        schema: 'europe'
      }
    }],
    fallback: 'blocking'
  }
}
 
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { schema } = params;

  return {
    props: {
      continent: {
        name: schema
      }
    },
    redirect: 60 * 60 * 24, // 24 hours
  }
}