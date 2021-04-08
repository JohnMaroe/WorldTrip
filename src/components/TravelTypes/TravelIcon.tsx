import { Image, Stack, Text } from "@chakra-ui/react";

interface TravelIconProps {
  name: string;
  children: string;
  middle?: boolean
} 

export function TravelIcon({ name, children, middle=false }: TravelIconProps) {
  return (
    <Stack
      align="center"
      spacing={["3", "5"]}
      transform={middle ? "translateX(5rem)" : null}
    >
      <Image 
        src={`/icons/${name}.svg`} 
        alt={`${name.charAt(0).toUpperCase() + name.slice(1)} Icon`} 
        w={["8", "20"]}
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