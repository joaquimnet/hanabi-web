import { Link as ChakraLink, Button } from '@chakra-ui/react';

import { Container } from './Container';

export const CTA = () => (
  <Container flexDirection='row' position='fixed' bottom='0' width='100%' maxWidth='48rem' py={2}>
    <ChakraLink
      isExternal
      href='https://discordapp.com/api/oauth2/authorize?client_id=750693579109695638&permissions=392256&scope=bot'
      flexGrow={1}
      mx={2}
    >
      <Button width='100%' bgGradient='linear(to-tr, #7928CA, #FF0080)'>
        Invite
      </Button>
    </ChakraLink>

    <ChakraLink isExternal href='https://discord.gg/6EHFcgMbcb' flexGrow={3} mx={2}>
      <Button width='100%' bgGradient='linear(to-tr, #7928CA, #FF0080)'>
        Support Server
      </Button>
    </ChakraLink>
  </Container>
);
