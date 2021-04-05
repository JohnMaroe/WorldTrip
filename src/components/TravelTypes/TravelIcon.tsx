import { Image, Box, Text } from "@chakra-ui/react";

interface TravelIconProps {
  name: string;
  children: string;
} 

export function TravelIcon({ name, children }: TravelIconProps) {
  return (
    <Box>
      <Image src={`/icons/${name}.svg`} alt={`${name.charAt(0).toUpperCase() + name.slice(1)} Icon`} />
      <Text>{children}</Text>
    </Box>
  );
}