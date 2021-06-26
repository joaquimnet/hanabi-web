import {
  Text,
  SimpleGrid,
  Button,
  ButtonGroup,
  Heading,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import connect from '../../../middleware/mongodb';
import ListenerModelV1 from '../../../models/listener.model.v1';

import { Main } from '../../../components/Main';
import { Card } from '../../../components/Card';
import { DashboardLinks } from '../../../components/DashboardLinks';

const ListenerList = ({ listeners }) => {
  const { push } = useRouter();
  return (
    <Main minHeight="100vh" pt="4rem" pb="8rem">
      <NextSeo
        title="Hanabi - Listeners"
        description={`Hanabi will bring life to your server with her ${listeners.length} listeners.`}
        canonical={`https://www.hanabi-bot.com/dashboard/listeners`}
        openGraph={{
          title: 'Hanabi - Listeners',
          description: `Hanabi will bring life to your server with her ${listeners.length} listeners.`,
          url: `https://www.hanabi-bot.com/dashboard/listeners`,
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
        Commands
      </Text>
      <SimpleGrid columns={[1, 2]} spacing={4}>
        {listeners.map((listener) => (
          <Card
            key={'cmd-' + listener._id}
            p={5}
            height="auto"
            href={`/dashboard/listeners/${listener.slug}`}
          >
            <Heading fontSize="xl">{listener.slug}</Heading>
            <Text mt={4}>{listener.name}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Main>
  );
};

export async function getStaticProps() {
  await connect(() => {})();

  const listeners = await ListenerModelV1.find({}).sort({
    category: 1,
    slug: 1,
  });

  return {
    revalidate: 300,
    props: {
      listeners: JSON.parse(JSON.stringify(listeners)),
    },
  };
}

export default ListenerList;
