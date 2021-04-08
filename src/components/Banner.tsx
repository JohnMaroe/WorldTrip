import { Flex, Box, Image, Text, Stack, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      w="100%"
      h={["60", "80"]}
      mt="6"
      bgImage="url('/Background.png')"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Flex
        align="center"
        justify="center"
      >
        <Stack 
          spacing={["5", "8"]} 
          mr={["0", "0", "48"]} 
          mt={["7", null]}
          p={["5", null]}
        >
          <Text
            fontWeight="normal"
            fontSize={["26", "36"]}
            color="gray.50"
          >
            5 Continentes, <br/>infinitas possibilidades.
          </Text>
          <Text
            fontSize={["12", "18"]}
            color="gray.100"
          >
            Chegou a hora de tirar do papel a viagem que você <br/>sempre sonhou.
          </Text>
        </Stack>

        <Image 
          src="/icons/Airplane.svg" 
          alt="Airplane icon" 
          transform="translateY(48px)"
          w={["300px", "300px", "430px"]}
          display={['none', 'none', 'block']}
        />
      </Flex>
    </Box>
  );
}