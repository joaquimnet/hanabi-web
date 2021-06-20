import Head from 'next/head';
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
        <Head>
          <title>Hanabi - Empathetic Discord Bot</title>
          <meta
            name="description"
            content="Empathetic bot with concepts of currency / trading and gifs. Has the ability to feel authentic with slightly delayed responses when certain triggers are heard. She is able to hear if you are sad, angry, tired, depressed, etcetera and has a response to help aide in those emotions. She is not only good for empathy, but she also has jokes, and multiple hidden features to make you laugh and smile."
          />
          <meta
            name="og:description"
            content="Empathetic bot with concepts of currency / trading and gifs. Has the ability to feel authentic with slightly delayed responses when certain triggers are heard. She is able to hear if you are sad, angry, tired, depressed, etcetera and has a response to help aide in those emotions. She is not only good for empathy, but she also has jokes, and multiple hidden features to make you laugh and smile."
          />
          <meta name="og:title" content="Hanabi - Empathetic Discord Bot" />
          <meta
            name="og:image"
            content="https://cdn.discordapp.com/avatars/750693579109695638/59bf4faa1141194f01f136b27769d0f5.webp?size=512"
          />
          <meta property="og:image:type" content="image/webp" />
        </Head>
        <Component {...pageProps} />
        <DarkModeSwitch />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
