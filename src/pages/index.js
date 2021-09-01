import { Link as ChakraLink, Text, Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import hanabi from '../../public/hanabi.png';
import { ServerCountChart } from '../components/Charts/ServerCountChart';

const Home = () => {
  return (
    <Container minHeight="100vh">
      <Hero title="Hanabi" />
      <Main pt="0">
        <Flex w={256} m="auto">
          <Image
            src={hanabi}
            width={256}
            height={256}
            alt="Hanabi's Profile Picture"
          />
        </Flex>
        <Text fontSize="xl">
          Empathetic bot with concepts of currency / trading and gifs.
        </Text>
        <Text fontSize="xl">
          Has the ability to feel authentic with slightly delayed responses when
          certain triggers are heard.
        </Text>
        <Text fontSize="xl">
          She is able to hear if you are sad, angry, tired, depressed, etcetera
          and has a response to help aide in those emotions.
        </Text>
        <Text fontSize="xl">
          She is not only good for empathy, but she also has jokes, and multiple
          hidden features to make you laugh and smile.
        </Text>
        <Text fontSize="xl">
          We&apos;re working on a{' '}
          <ChakraLink as={Link} href="/dashboard">
            dashboard
          </ChakraLink>{' '}
          for her. It doesn&apos;t do much currently but you can see all of her
          commands there!
        </Text>
        <Heading size="lg">Hanabi Server Counts</Heading>
        <canvas id="chart"></canvas>
      </Main>
      <ServerCountChart />
      <Footer pt="2rem">
        <Text>Made with ❤️ by Kaffe & Itami</Text>
      </Footer>
      <CTA />
    </Container>
  );
};

export default Home;
