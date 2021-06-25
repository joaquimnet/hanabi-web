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
import CommandModelV1 from '../../../models/command.model.v1';

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

const Command = ({ command }) => {
  const { push } = useRouter();
  return (
    <Main minHeight="100vh" pt="4rem" pb="8rem">
      <NextSeo
        title={`Hanabi - ${command.name} command`}
        description={`The ${command.name} command. ${command.description}. It has a ${command.cooldown} seconds cooldown.`}
        canonical={`https://www.hanabi-bot.com/dashboard/commands/${command.name}`}
        openGraph={{
          title: `Hanabi - ${command.name} command`,
          description: `The ${command.name} command. ${command.description}. It has a ${command.cooldown} seconds cooldown.`,
          url: `https://www.hanabi-bot.com/dashboard/commands/${command.name}`,
          images: [
            {
              url: 'https://cdn.discordapp.com/avatars/750693579109695638/59bf4faa1141194f01f136b27769d0f5.webp?size=512',
              width: 64,
              height: 64,
              alt: "Hanabi's Profile Picture",
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
          onClick={() => push('/dashboard/commands')}
        >
          Commands
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
        <Card
          title={
            <>
              {command.name}
              {
                <Badge ml={2} fontSize="sm" variant="solid" colorScheme="green">
                  {command.category}
                </Badge>
              }
            </>
          }
        >
          <Text my={2}>
            {command.description
              .split('\n')
              .map((l) => [l, <br key={Math.random()} />])
              .flat()}
          </Text>
        </Card>
        <Card>
          <Text fontWeight="bold">Cooldown</Text>
          <Text mb={2} fontSize="xl">
            {command.cooldown}s
          </Text>
          <Text fontWeight="bold">Runs in</Text>
          <HStack mb={2} spacing={2}>
            {command.runIn.includes('text') && <Tag>Text Channel</Tag>}
            {command.runIn.includes('dm') && <Tag>DMs</Tag>}
          </HStack>
          <Text fontWeight="bold">Permission</Text>
          <Tag>{permissionNames[command.permission]}</Tag>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} spacing={4}>
        <Card title="Aliases">
          {command.aliases.length > 0 ? (
            command.aliases.map((alias) => (
              <Tag
                size="lg"
                key={alias}
                variant="solid"
                colorScheme="white"
                mx={1}
                my={0.5}
              >
                {alias}
              </Tag>
            ))
          ) : (
            <Text>Nothing Here.</Text>
          )}
        </Card>
        <Card title="Arguments" height="auto">
          {Object.keys(command.args ?? {}).length > 0 ? (
            Object.entries(command.args).map(([argName, argValue]) => (
              <Text key={argName + argValue}>
                <strong style={{ marginRight: '8px' }}>{argName}</strong>
                {JSON.stringify(argValue)}
              </Text>
            ))
          ) : (
            <Text>Nothing Here.</Text>
          )}
        </Card>
      </SimpleGrid>
      <Card title="Examples">
        {
          <List mt={2} spacing={3}>
            {[command.usage ?? ''].concat(command.examples).map((example) => {
              return (
                <ListItem key={'ex' + example}>
                  <ListIcon as={ChevronRightIcon} color="green.500" />
                  <strong>~{command.name}</strong> {example}
                </ListItem>
              );
            })}
          </List>
        }
      </Card>
    </Main>
  );
};

export async function getStaticPaths() {
  await connect(() => {})();

  const commands = await CommandModelV1.find({ hidden: false }).select('_id');

  return {
    paths: commands.map((c) => ({ params: { command: c._id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  await connect(() => {})();

  const command = await CommandModelV1.findOne({
    _id: params.command,
  });

  return {
    revalidate: 30,
    props: {
      command: JSON.parse(JSON.stringify(command)),
    },
  };
}

export default Command;
