import { Flex, Box, Image, Text, Stack, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      w="100%"
      h="80"
      mt="6"
      bg="gray.500"
      bgImage="url('/Background.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex
        align="center"
        justify="center"
      >
        <Stack spacing="8" mr="48">
          <Text
            fontWeight="normal"
            fontSize="36"
            color="gray.50"
          >
            5 Continentes, <br/>infinitas possibilidades.
          </Text>
          <Text
            fontSize="18"
            color="gray.100"
          >
            Chegou a hora de tirar do papel a viagem que você <br/>sempre sonhou.
          </Text>
        </Stack>

        <Image 
          src="/icons/Airplane.svg" 
          alt="Airplane icon" 
          transform="translateY(48px)"
          w={["300px","300px","300px","430px"]}
          display={['none','none','block']}
        />
      </Flex>
    </Box>
  );
}