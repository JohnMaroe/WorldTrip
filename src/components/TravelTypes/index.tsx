import { Flex, Image, HStack, Box, Text } from "@chakra-ui/react";

import { TravelIcon } from './TravelIcon'; 

export function TravelTypes() {
  return (
    <Flex
      w="100%"
      h="80"
      mt="6"
      align="center"
      justify="center"
    >
      <HStack spacing="40" mr="10">
        <TravelIcon name="cocktail">vida noturna</TravelIcon>
        <TravelIcon name="surf">praia</TravelIcon>
        <TravelIcon name="building">moderno</TravelIcon>
        <TravelIcon name="museum">clássico</TravelIcon>
        <TravelIcon name="earth">e mais...</TravelIcon>
      </HStack>
    </Flex>
  );
}