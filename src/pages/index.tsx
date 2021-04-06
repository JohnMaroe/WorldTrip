import Head from 'next/head'
import { Flex, Box, Stack, Heading } from '@chakra-ui/react';

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <Header />

        <Banner />

        <Stack align="center" justify="center">
          <TravelTypes />
          <Box w="16" h="5px" bg="gray.800" borderRadius="md" />
        </Stack>

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

        <Slider />
      </Flex>
    </>
  )
}
