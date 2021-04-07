import { Flex, HStack, Box, Text, Stack, useBreakpointValue } from "@chakra-ui/react";

import { Block } from './Block';

type Information = {
  countryNumber: number;
  languageNumber: number;
  cities100: number;
}

interface ContinentInformationProps {
  paragraph: string;
  information: Information;
}

export function ContinentInformation({ paragraph, information }: ContinentInformationProps) {
  return (
    <HStack spacing="8">
      <Text>{paragraph}</Text>
      
      <HStack spacing="4">
        <Block type="países">{information.countryNumber}</Block>
        <Block type="línguas">{information.languageNumber}</Block>
        <Block type="cidades">{information.cities100}</Block>
      </HStack>
    </HStack>
  );
}