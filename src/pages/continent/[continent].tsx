import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, Box, Stack, Heading } from '@chakra-ui/react';

import { api } from '../../services/api';

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/ContinentBanner";
import { useEffect, useState } from 'react';

export default function Continent() {
  const [continentData, setContinentData] = useState([]);

  const router = useRouter();
  const continent = String(router.query.continent);

  useEffect(() => {
    api.get(`continents/?continentName=${continent}`).then(response => {
      setContinentData(response.data);
      console.log(continentData)
    });
  }, []);

  return (
    <>
      <Head>
        <title>{continent.charAt(0).toUpperCase() + continent.slice(1)} | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <Header isInsideAPage={true} />

        <ContinentBanner />

      </Flex>
    </>
  )
}
