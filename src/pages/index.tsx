import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import { BannerHome } from "../components/BannerHome";
import { CTA } from "../components/CTA";
import { TypesOfTrip } from "../components/TypesOfTrip";
import { api } from "../services/api";

interface Continent {
  id: number;
  name: string;
}

export default function Home() {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    async function loadContinents() {
      api.get("/continents")
        .then((response) => { setContinents(response.data); })
    }

    loadContinents();
  }, []);

  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <BannerHome />
      <TypesOfTrip />
      <CTA />

      <section>
        {continents.map((continent) => {
          return (
            <p key={continent.id}>{continent.name}</p>
          )
        })}
      </section>
    </>
  )
}
