import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }) => (
  <Flex justifyContent='center' alignItems='flex-start' pt={6}>
    <Heading fontSize='max(10vw, 10vh)' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
      {title}
    </Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'default-hero-title',
};
