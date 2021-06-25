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
import CommandModelV1 from '../../../models/command.model.v1';

import { Main } from '../../../components/Main';
import { Card } from '../../../components/Card';
import { DashboardLinks } from '../../../components/DashboardLinks';

const CommandList = ({ commands }) => {
  const { push } = useRouter();
  return (
    <Main minHeight="100vh" pt="4rem" pb="8rem">
      <NextSeo
        title="Hanabi - Commands"
        description={`Hanabi will bring life to your server with her ${commands.length} commands.`}
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
        {commands.map((command) => (
          <Card
            key={'cmd-' + command._id}
            p={5}
            height="auto"
            href={`/dashboard/commands/${command.name}`}
          >
            <Heading fontSize="xl">{command.name}</Heading>
            <Text mt={4}>
              {command.description
                .split('\n')
                .map((l) => [l, <br key={Math.random()} />])
                .flat()}
            </Text>
            <Text
              mt={1}
              fontWeight="bold"
              position="absolute"
              right="8px"
              top="1rem"
            >
              {command.category}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Main>
  );
};

export async function getStaticProps() {
  await connect(() => {})();

  const commands = await CommandModelV1.find({ hidden: false }).sort({
    category: 1,
    name: 1,
  });

  return {
    revalidate: 30,
    props: {
      commands: JSON.parse(JSON.stringify(commands)),
    },
  };
}

export default CommandList;
