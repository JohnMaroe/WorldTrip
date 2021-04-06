import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, Box, Stack, Heading } from '@chakra-ui/react';

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/ContinentBanner";

export default function Continent() {
  const router = useRouter();
  const continent = String(router.query.continent);

  return (
    <>
      <Head>
        <title>{continent.charAt(0).toUpperCase() + continent.slice(1)} | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <Header isInsideAPage={true} />

        <ContinentBanner />

        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5","14"]}
          fontSize={["lg","3xl","4xl"]}
          color="gray.700"
          mt="8"
        >
          Vamos nessa?<br/>Então escolha seu continente
        </Heading>
      </Flex>
    </>
  )
}
