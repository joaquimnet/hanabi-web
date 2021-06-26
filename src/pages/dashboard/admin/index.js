import {
  Link as ChakraLink,
  Text,
  Flex,
  SimpleGrid,
  Box,
  useColorModeValue,
  Code,
  Alert as ChakraAlert,
  AlertIcon,
  Stack,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import Content from '../../../models/text';
import Alert from '../../../models/alert';
import connect from '../../../middleware/mongodb';

import { Container } from '../../../components/Container';
import { Main } from '../../../components/Main';
import { Card } from '../../../components/Card';
import { useRouter } from 'next/router';

const Dashboard = ({ counts, alerts }) => {
  return (
    <Main minHeight="100vh" pt="4rem">
      <Text
        as="h1"
        fontSize="2rem"
        width="fit-content"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="extrabold"
        textTransform="uppercase"
      >
        Admin Dashboard
      </Text>
      {/* <ButtonGroup>
        <Button variant="outline" href="/" size="lg" onClick={() => push('/')}>
          Home
        </Button>
      </ButtonGroup> */}

      <Box fontSize="lg" m="0" d="flex" flexDirection="row">
        <Box mx={2} _hover={{ color: '#FF0080' }}>
          <Link href="/">Home</Link>
        </Box>
        <Box mx={2} _hover={{ color: '#FF0080' }}>
          <Link href="/dashboard">User Dashboard</Link>
        </Box>
        <Box mx={2} _hover={{ color: '#FF0080' }}>
          <a
            href="https://twitter.com/hanabi_dev"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </Box>
      </Box>

      <SimpleGrid columns={[1, 2]} spacing={5}>
      <Card>
          <Text fontWeight="extrabold" textTransform="uppercase">
            Users
          </Text>
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.users}
          </Text>
        </Card>
        <Card>
          <Text fontWeight="extrabold" textTransform="uppercase">
            Servers
          </Text>
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.guilds}
          </Text>
        </Card>
        <Card>
          <Text fontWeight="extrabold" textTransform="uppercase">
            Commands
          </Text>
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.commands}
          </Text>
        </Card>
        <Card>
          <Text fontWeight="extrabold" textTransform="uppercase">
            Listeners
          </Text>
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.listeners}
          </Text>
        </Card>
        <Card>
          <Text fontWeight="extrabold" textTransform="uppercase">
            Content Messages
          </Text>
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.text}
          </Text>
        </Card>
      </SimpleGrid>
      <Card height="auto">
        <Text fontWeight="extrabold" textTransform="uppercase">
          Recent Alerts
        </Text>
        <Stack spacing={3}>
          {alerts.map((content, i) => {
            return (
              <ChakraAlert key={content + i} status="info" borderRadius="sm">
                <AlertIcon />
                {content}
              </ChakraAlert>
            );
          })}
        </Stack>
      </Card>
    </Main>
  );
};

export async function getStaticProps() {
  const req = await fetch(process.env.BOT_ENDPOINT + '/bot/counts', {
    headers: { Authorization: 'super secret' },
  });
  const counts = await req.json();

  await connect(() => {})();
  const text = await Content.countDocuments({});

  const alerts = await Alert.find({}).sort({ createdAt: -1 }).limit(5);

  return {
    revalidate: 300,
    props: {
      counts: {
        ...counts,
        text,
      },
      alerts: alerts.map((a) => a.message),
    },
  };
}

export default Dashboard;
