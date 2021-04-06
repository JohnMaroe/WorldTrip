import { useRouter } from 'next/router';
import { Flex, Heading, Image, Text, Stack, useBreakpointValue } from "@chakra-ui/react";

export function ContinentBanner() {
  const router = useRouter();
  const continent = String(router.query.continent);

  return (
    <Flex
      w="100%"
      h={["150px","300px","500px"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      mt="6"
      // bgImage={`url('${continent.banner_image}')`}
      bgImage={`url('/Background.png')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="gray.50"
        fontWeight="500"
      >
        {continent.charAt(0).toUpperCase() + continent.slice(1)}
      </Heading>
    </Flex>
  );
}