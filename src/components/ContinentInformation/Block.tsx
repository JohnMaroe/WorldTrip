import { Flex, HStack, Box, Text, Stack, useBreakpointValue } from "@chakra-ui/react";

interface BlockProps {
  type: "países" | "línguas" | "cidades";
  children: number;
}

export function Block({ type, children }: BlockProps) {
  return (
    <Flex align="center" direction="column">
      <Text>{children}</Text>
      <Text>{type}</Text>
    </Flex>
  );
}