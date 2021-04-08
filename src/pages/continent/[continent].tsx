import Head from 'next/head';
import { Flex, Stack } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

import { getData } from '../api/fetchContinent';

import { ContinentDataTypes } from '../../types';

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInformation } from "../../components/ContinentInformation";
import { FamousCities } from "../../components/FamousCities";

interface ContinentProps {
  data: ContinentDataTypes;
}

export default function Continent({ data }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{data.continentName} | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <Header isInsideAPage={true} />

        <ContinentBanner 
          continentImage={data.continentImage}
          continentName={data.continentName}
        />

        <Stack justify="center" align="center" spacing={["8", "12"]}>
          <ContinentInformation 
            paragraph={data.paragraph}
            information={{
              countryNumber: data.countryNumber, 
              languageNumber: data.languageNumber, 
              cities100: data.cities100
            }}
          />

          <FamousCities countries={data.countries} />
        </Stack>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jsonData = await getData();

  const data: ContinentDataTypes[] = jsonData.data;
  const returnData: ContinentDataTypes = data.find(element => element.continentName === context.params.continent);

  return {
    props: {
      data: returnData,
    },
  }
}