import { Flex, HStack, SimpleGrid, List } from "@chakra-ui/react";
import { useWindowSize } from "../../hooks";

import { TravelIcon } from './TravelIcon'; 

export function TravelTypes() {
  const isPhone = useWindowSize();

  if (isPhone) {
    return (
      <Flex
        w="100%"
        h="80"
        mt="6"
        align="center"
        justify="center"
      >
        <SimpleGrid columns={2} spacing={5}>
          <TravelIcon name="cocktail">vida noturna</TravelIcon>
          <TravelIcon name="surf">praia</TravelIcon>
          <TravelIcon name="building">moderno</TravelIcon>
          <TravelIcon name="museum">clássico</TravelIcon>
          <TravelIcon name="earth" middle>e mais...</TravelIcon>
        </SimpleGrid>
      </Flex>
    )
  }

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