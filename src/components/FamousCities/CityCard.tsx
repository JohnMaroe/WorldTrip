import { Flex, Avatar, Image, Text } from "@chakra-ui/react";
import { SpinnerIcon } from '@chakra-ui/icons'

import { CountriesTypes } from '../../types';

interface CityCardProps {
  countryInformation: Omit<CountriesTypes, "countryId">;
}

export function CityCard({ countryInformation }: CityCardProps) {
  return (
    <Flex
      w={256}
      h={279}
      direction="column"
      align="center"
      justify="center"
      mb="8"
    >
      <Image 
        src={countryInformation.countryImage} 
        borderTopRadius="4"
        transform="translateY(5px)"
      />
      <Flex
        w="inherit"
        border="1px solid"
        borderTop="0"
        borderColor="yellow.400"
        borderRadius="4"
        justify="space-between"
        align="center"
        p="6"
        py="8"
      >
        <Flex direction="column">
          <Text 
            color="gray.500" 
            fontWeight="bold"
            mb="2"
          >
            {countryInformation.countryCity}
          </Text>
          <Text color="gray.300">{countryInformation.countryName}</Text>
        </Flex>
        <Avatar
          src={countryInformation.countryFlag}
          w="10"
          h="10"
          icon={<SpinnerIcon fontSize="1.5rem" />}
        />
      </Flex>
    </Flex>
  );
}