import { Flex, Image, HStack, Box, Text } from "@chakra-ui/react";

import { TravelIcon } from './TravelIcon'; 

export function TravelTypes() {
  return (
    <Flex
      w="100%"
      h="80"
      mt="6"
      bg="gray.500"
      align="center"
      justify="center"
    >
      <HStack spacing="40">
        <TravelIcon name="cocktail">vida noturna</TravelIcon>
      </HStack>
    </Flex>
  );
}