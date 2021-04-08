import { Flex, HStack, Text } from "@chakra-ui/react";

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
    <Flex
      my={["6", "8", "16"]}
      mx="auto"
      direction={["column", "row"]}
      align="center"
      justify="center"
    >
      <Text
        fontWeight="normal"
        w={[400, 500]}
        mr={[null, "40"]}
        mb={["12", null]}
        fontSize={["18", "20"]}
        color="gray.700"
        align={["center", "justify"]}
      >
        {paragraph}
      </Text>
      
      <HStack spacing={["16", "24"]} align="center">
        <Block type="países">{information.countryNumber}</Block>
        <Block type="línguas">{information.languageNumber}</Block>
        <Block type="cidades">{information.cities100}</Block>
      </HStack>
    </Flex>
  );
}