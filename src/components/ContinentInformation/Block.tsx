import { Flex, Tooltip, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'

interface BlockProps {
  type: "países" | "línguas" | "cidades";
  children: number;
}

export function Block({ type, children }: BlockProps) {
  return (
    <Flex align="center" jsutify="center" direction="column" ml={["4", null]}>
      <Text
        fontSize={["32", "40"]}
        color="yellow.500"
        fontWeight="semibold"
      >
        {children}
      </Text>

      {type === "cidades" 
        ? (
          <Flex align="center" justify="center">
            <Text fontSize={["14", "18"]} fontWeight="bold" color="gray.700">
              cidades
            </Text>
            <Tooltip 
              label="Números de cidades nesse continente que estão dentre as 100 mais visitadas do mundo."
              hasArrow 
              arrowSize={10}
              closeDelay={300}
              p="5"
              borderRadius="8"
            >
              <InfoOutlineIcon fontSize={["12", "14"]} ml={["1", "2"]} />
            </Tooltip>
          </Flex>
        ) 
        : (
          <Text fontSize={["14", "18"]} fontWeight="bold" color="gray.700">
            {type}
          </Text>
        )
      }
      
    </Flex>
  );
}