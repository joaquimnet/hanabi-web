import Head from 'next/head';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { DefaultSeo } from 'next-seo';

import theme from '../theme';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
          initialColorMode: 'dark',
        }}
      >
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <DarkModeSwitch />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
