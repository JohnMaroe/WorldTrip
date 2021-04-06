// import { Flex, Heading, Text } from '@chakra-ui/react';
// import Link from 'next/link';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

// export function Slider() {
//   return (
//     <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
//       <Swiper
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay:4000,
//         }}
//         style={{width: '100%', flex: '1'}}
//       > 
//         <SwiperSlide>
//           <Flex
//             w="100%"
//             h="100%"
//             align="center"
//             justify="center"
//             direction="column"
//             bgPosition="100% 30%"
//             bgRepeat="no-repeat"
//             bgSize="cover"
//             textAlign="center"
//           >
//             <a>
//               <Heading 
//                 fontSize={["3xl","4xl","5xl"]} 
//                 color="gray.100" 
//                 fontWeight="bold"
//               >
//                 asdasd
//               </Heading>
//               <Text 
//                 fontWeight="bold" 
//                 color="gray.300" 
//                 fontSize={["0.8rem","1xl", "2xl"]} 
//                 mt={["2","4"]}
//               >
//                 asads
//               </Text>
//             </a>
//           </Flex>
//         </SwiperSlide>

//       </Swiper>
//     </Flex>
//   )
// }

import { Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';

export function Slider() {
  return (
    <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]} bg="yellow">
      <Swiper
        width={1440}
        height={200}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </Flex>
  );
};