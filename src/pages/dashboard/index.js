import { Text, SimpleGrid } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Content from '../../models/text';
import Alert from '../../models/alert';
import connect from '../../middleware/mongodb';

import { Main } from '../../components/Main';
import { Card } from '../../components/Card';
import { DashboardLinks } from '../../components/DashboardLinks';

const Dashboard = ({ counts }) => {
  return (
    <Main minHeight="100vh" pt="4rem">
      <NextSeo
        title="Hanabi - Dashboard"
        description={`Hanabi is bringing life to ${counts.guilds} servers with her ${counts.commands} commands and ${counts.listeners}.`}
        canonical={`https://www.hanabi-bot.com/dashboard`}
        openGraph={{
          title: 'Hanabi - Dashboard',
          description: `Hanabi is bringing life to ${counts.guilds} servers with her ${counts.commands} commands and ${counts.listeners}.`,
          url: `https://www.hanabi-bot.com/dashboard`,
          images: [
            {
              url: 'https://hanabi-bot.com/hana.png',
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

      <SimpleGrid columns={[1, 2]} spacing={5}>
        <Card height="80px" title="Users">
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.users}
          </Text>
        </Card>
        <Card height="80px" title="Servers">
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.guilds}
          </Text>
        </Card>
        <Card height="80px" title="Commands" href="/dashboard/commands">
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.commands}
          </Text>
        </Card>
        <Card height="80px" title="Listeners">
          <Text
            fontWeight="extrabold"
            textTransform="uppercase"
            fontSize="1.8rem"
          >
            {counts.listeners}
          </Text>
        </Card>
      </SimpleGrid>
    </Main>
  );
};

export async function getStaticProps() {
  const req = await fetch(
    process.env.BOT_ENDPOINT + '/bot/counts?omitHidden=true',
    {
      headers: { Authorization: 'super secret' },
    },
  );
  const counts = await req.json();

  await connect(() => {})();
  const text = await Content.countDocuments({});

  const alerts = await Alert.find({}).sort({ createdAt: -1 }).limit(5);

  return {
    revalidate: 30,
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
