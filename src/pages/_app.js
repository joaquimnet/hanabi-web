import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
          initialColorMode: 'dark',
        }}
      >
        <Component {...pageProps} />
        <DarkModeSwitch />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
