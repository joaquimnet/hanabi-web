import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import { Hero } from '../landing-page/components/Hero';
import { Container } from '../landing-page/components/Container';
import { Main } from '../landing-page/components/Main';
import { CTA } from '../landing-page/components/CTA';
import { Footer } from '../landing-page/components/Footer';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const About = () => (
  <Container minHeight="100vh">
    <Hero title="Hanabi" />
    <Main>
      <Text>Lorem ipsum dolor sit amet, consectetur.</Text>

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
      <Text>
        <Link href="/">Home</Link>
      </Text>
    </Footer>
    <CTA />
  </Container>
);

export default About;
