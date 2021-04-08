import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  continentImage: string;
  continentName: string;
}

export function ContinentBanner({ continentImage, continentName }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={["225px","400px","500px"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      mt="6"
      bgImage={`url('${continentImage}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "flex-start"]}
      style={{ boxShadow: 'inset 0 0 0 50vw rgba(0,0,0,0.5)' }}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="gray.50"
        fontWeight="500"
      >
        {continentName}
      </Heading>
    </Flex>
  );
}