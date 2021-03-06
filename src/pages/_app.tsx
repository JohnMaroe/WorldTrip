import { AppProps } from 'next/app';
import { ChakraProvider } from "@chakra-ui/react"

import { theme } from '../../styles/theme';
import 'swiper/swiper-bundle.css';
import '../../styles/slider.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp;
