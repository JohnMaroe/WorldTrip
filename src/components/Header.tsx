import { Flex, Image, IconButton, useBreakpointValue } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1450} 
      h="20"
      mx="auto"
      mt="4"
      bg="gray.50"
      align="center"
      justify="center"
    >
      <Image src="/icons/Logo.svg" alt="Worldtrip logo" />
    </Flex>
  );
}