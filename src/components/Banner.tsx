import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h="80"
      mt="6"
      bg="gray.500"
      align="center"
      justify="center"
    >
      <Text>5 Continentes, infinitas possibilidades.</Text>
      <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>

      <Image src="/icons/Airplane.svg" alt="Airplane icon" />
    </Flex>
  );
}