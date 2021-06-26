import {
  Text,
  SimpleGrid,
  Button,
  ButtonGroup,
  HStack,
  Tag,
  Badge,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import connect from '../../../middleware/mongodb';
import ListenerModelV1 from '../../../models/listener.model.v1';

import { Main } from '../../../components/Main';
import { Card } from '../../../components/Card';
import { DashboardLinks } from '../../../components/DashboardLinks';

const permissionNames = {
  0: 'MEMBER',
  2: 'MANAGE_MESSAGES',
  3: 'MANAGE_ROLES',
  4: 'MANAGE_GUILD',
  5: 'SERVER_OWNER',
  8: 'BOT_SUPPORT',
  9: 'BOT_ADMIN',
  10: 'BOT_OWNER',
};

const Listener = ({ listener }) => {
  const { push } = useRouter();
  return (
    <Main minHeight="100vh" pt="4rem" pb="8rem">
      <NextSeo
        title={`Hanabi - ${listener.slug} listener`}
        description={`The ${listener.slug} listener. ${listener.description}. It has a ${listener.cooldown} seconds cooldown.`}
        canonical={`https://www.hanabi-bot.com/dashboard/listeners/${listener.name}`}
        openGraph={{
          title: `Hanabi - ${listener.slug} listener`,
          description: `The ${listener.slug} listener. ${listener.description}. It has a ${listener.cooldown} seconds cooldown.`,
          url: `https://www.hanabi-bot.com/dashboard/listeners/${listener.name}`,
          images: [
            {
              url: 'https://i.imgur.com/eVACxCm.png',
              width: 512,
              height: 128,
              alt: "Hanabi's name on a dark background.",
            },
          ],
        }}
      />
      <Text
        as="h1"
        fontSize="2rem"
        width="fit-content"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
      >
        Dashboard
      </Text>

      <DashboardLinks />

      <ButtonGroup>
        <Button variant="outline" size="lg" onClick={() => push('/dashboard')}>
          Dashboard
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => push('/dashboard/listeners')}
        >
          Listeners
        </Button>
      </ButtonGroup>

      <Text
        as="h2"
        fontSize="1.5rem"
        width="fit-content"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
      >
        Listeners
      </Text>

      <SimpleGrid columns={[1, 2]} spacing={4}>
        <Card
          title={
            <>
              {listener.category}
              {
                <Badge ml={2} fontSize="sm" variant="solid" colorScheme="green">
                  {listener.slug}
                </Badge>
              }
            </>
          }
        >
          <Text my={2}>{listener.name}</Text>
        </Card>
        <Card>
          <Text fontWeight="bold">Cooldown</Text>
          <Text mb={2} fontSize="xl">
            {listener.cooldown}s
          </Text>
          <Text fontWeight="bold">Server Cooldown</Text>
          <Text mb={2} fontSize="xl">
            {listener.globalCooldown}s
          </Text>
        </Card>
      </SimpleGrid>
    </Main>
  );
};

export async function getStaticPaths() {
  await connect(() => {})();

  const listeners = await ListenerModelV1.find({}).select('slug');

  return {
    paths: listeners.map((c) => ({ params: { listener: c.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  await connect(() => {})();

  const listener = await ListenerModelV1.findOne({
    slug: params.listener,
  });

  return {
    revalidate: 300,
    props: {
      listener: JSON.parse(JSON.stringify(listener)),
    },
  };
}

export default Listener;
