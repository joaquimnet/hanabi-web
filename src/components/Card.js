import { Box, useColorModeValue } from '@chakra-ui/react';

export const Card = ({ children, ...otherProps }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow="lg"
      borderRadius="xl"
      height="80px"
      p="2"
      {...otherProps}
    >
      {children}
    </Box>
  );
};
