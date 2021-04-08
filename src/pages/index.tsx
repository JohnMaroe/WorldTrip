import Head from 'next/head'
import { GetServerSideProps } from 'next';
import { Flex, Box, Stack, Heading } from '@chakra-ui/react';

import { getData } from './api/fetchContinent';
import { ContinentDataTypes } from '../types';

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Slider } from "../components/Slider";

interface HomeProps {
  continents: ContinentDataTypes[];
}

export default function Home({ continents }: HomeProps) {
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

        <Slider continents={continents} />
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const jsonData = await getData();

  const continents: ContinentDataTypes[] = jsonData.data;

  return {
    props: {
      continents,
    },
  }
}