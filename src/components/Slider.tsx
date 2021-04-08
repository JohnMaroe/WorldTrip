import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ContinentDataTypes } from '../types';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SliderProps {
  continents: ContinentDataTypes[];
}

export function Slider({ continents }: SliderProps) {
  return (
    <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{width: '100%', flex: '1'}}
      > 
        {continents.map(continent => (
          <SwiperSlide key={continent.continentId}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              borderRadius={[null, "20"]}
              bgImage={`url('${continent.continentImage}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              style={{ boxShadow: 'inset 0 0 0 50vw rgba(0,0,0,0.5)' }}
            >
              <Link href={`/continent/${continent.continentName}`}>
                <a>
                  <Heading 
                    fontSize={["3xl", "4xl", "5xl"]} 
                    color="gray.50"
                    fontWeight="bold"
                    textShadow="-4px 2px #000B"
                  >
                    {continent.continentName}
                  </Heading>
                  <Text 
                    fontWeight="bold" 
                    color="gray.200" 
                    fontSize={["0.8rem", "1xl", "2xl"]} 
                    mt={["2", "4"]}
                    textShadow="-1px 2px #000B"
                  >
                    {continent.description}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}