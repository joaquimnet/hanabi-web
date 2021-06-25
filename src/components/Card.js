import {
  Box,
  Text,
  Heading,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react';

export const Card = ({ children, title, href, ...otherProps }) => {
  const CardComponent = (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow="lg"
      borderRadius="xl"
      height="auto"
      p="2"
      position="relative"
      {...otherProps}
    >
      <Heading size='md' textTransform="uppercase">
        {href ? (
          <LinkOverlay href={href}>{title}</LinkOverlay>
        ) : (
          title
        )}
      </Heading>
      {children}
    </Box>
  );

  if (!href) {
    return CardComponent;
  }

  return <LinkBox as={() => CardComponent} />;
};
