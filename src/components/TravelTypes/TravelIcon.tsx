import { Image, Stack, Text } from "@chakra-ui/react";

interface TravelIconProps {
  name: string;
  children: string;
} 

export function TravelIcon({ name, children }: TravelIconProps) {
  return (
    <Stack
      align="center"
      spacing="5"
    >
      <Image 
        src={`/icons/${name}.svg`} 
        alt={`${name.charAt(0).toUpperCase() + name.slice(1)} Icon`} 
        w="20"
      />
      <Text
        fontWeight="bold"
        color="gray.700"
        fontSize="20"
      >
        {children}
      </Text>
    </Stack>
  );
}