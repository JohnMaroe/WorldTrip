import Link from 'next/link';
import { Flex, Image, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons'

interface HeaderProps {
  isInsideAPage?: boolean;
}

export function Header({ isInsideAPage=false }: HeaderProps) {
  if (isInsideAPage) {
    return (
      <Flex 
        as="header" 
        w="100%" 
        maxWidth={1450} 
        h="14"
        mx="auto"
        mt="4"
        p="2"
        pt="4"
        align="center"
        justify="center"
      >
        <Link href="/">
          <a>
            <ChevronLeftIcon 
              w={8} 
              h={8} 
              color="gray.500"
              transform={["translateX(-7.5rem) translateY(-0.75rem)", "translateX(-20rem) translateY(-0.75rem)"]}
              position="absolute" 
            />
          </a>
        </Link>
        <Image src="/icons/Logo.svg" alt="Worldtrip logo" />
      </Flex>
    )
  }

  return (
    <Flex 
      as="header" 
      w="100%" 
      maxWidth={1450} 
      h="14"
      mx="auto"
      mt="4"
      p="2"
      pt="4"
      align="center"
      justify="center"
    >
      <Image src="/icons/Logo.svg" alt="Worldtrip logo" />
    </Flex>
  );
}