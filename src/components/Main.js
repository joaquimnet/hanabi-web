import { Stack, SlideFade, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

export const Main = (props) => {
  return (
    <SlideFade in={true} offsetY="20px">
      <Stack
        spacing="1.5rem"
        width="100%"
        maxWidth="48rem"
        px="1rem"
        {...props}
      />
    </SlideFade>
  );
};
