import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from './components/Hero';
import { Container } from './components/Container';
import { Main } from './components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const Home = () => (
  <Container minHeight="100vh">
    <Hero title="Hanabi" />
    <Main>
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

      {/* <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          <ChakraLink isExternal href='https://chakra-ui.com' flexGrow={1} mr={2}>
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          <ChakraLink isExternal href='https://nextjs.org' flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List> */}
    </Main>

    <Footer mt="-3rem">
      <Text>Made with ❤️ by Kaffe & Blu</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Home;
