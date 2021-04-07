import { Flex, Heading, Grid, Text, Stack, useBreakpointValue } from "@chakra-ui/react";

import { CountriesTypes } from '../../types';

import { CityCard } from './CityCard';

interface FamousCitiesProps {
  countries: CountriesTypes[];
}

export function FamousCities({ countries }: FamousCitiesProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      mx="auto"
      w={1220}
    >
      <Heading
        color="gray.800"
        mb="8"
        fontWeight="medium"
      >
        Cidades Famosas
      </Heading>

      <Grid 
        templateColumns={`repeat(4, 1fr)`}
        templateRows={countries.length > 4 ? "repeat(2, 1fr)" : "1fr"}
        gap={6}
      >
        { countries.map(country => (
          <CityCard
            key={country.countryId}
            countryInformation={{
              countryName: country.countryName,
              countryCity: country.countryCity,
              countryImage: country.countryImage,
              countryFlag: country.countryFlag,
            }}
          />
        ))}
      </Grid>
    </Flex>
  );
}