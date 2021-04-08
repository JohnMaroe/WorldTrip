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
        color="gray.700"
        mb={["8", "14"]}
        fontWeight="medium"
      >
        Cidades Famosas
      </Heading>

      <Grid 
        templateColumns={["1fr", "1fr", `repeat(4, 1fr)`]}
        gap={[4, 6, 8]}
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