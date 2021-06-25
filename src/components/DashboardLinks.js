import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const DashboardLinks = () => {
  return (
    <Box fontSize="lg" m="0" d="flex" flexDirection="row">
      <Box mx={2} _hover={{ color: '#FF0080' }}>
        <Link href="/">Home</Link>
      </Box>
      <Box mx={2} _hover={{ color: '#FF0080' }}>
        <a
          href="https://top.gg/bot/750693579109695638/vote"
          target="_blank"
          rel="noreferrer"
        >
          Vote for Hanabi
        </a>
      </Box>
      <Box mx={2} _hover={{ color: '#FF0080' }}>
        <a
          href="https://discord.gg/6EHFcgMbcb"
          target="_blank"
          rel="noreferrer"
        >
          Join Support Server
        </a>
      </Box>
      <Box mx={2} _hover={{ color: '#FF0080' }}>
        <a
          href="https://discord.com/oauth2/authorize?client_id=750693579109695638&permissions=388160&scope=bot"
          target="_blank"
          rel="noreferrer"
        >
          Invite Hanabi
        </a>
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
  );
};
