import Head from 'next/head'
import { Flex } from '@chakra-ui/react';

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />

        <Banner />

        <TravelTypes />

        {/* <Slider /> */}
      </Flex>
    </>
  )
}
