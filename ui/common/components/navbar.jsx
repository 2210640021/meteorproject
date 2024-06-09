import React from 'react';
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Logout } from './logout';

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('teal', 'teal.400')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('green.600', 'green.600')}
        align="center"
      >
        <Flex flex={{ base: 1 }} justify="start">
        <img src="/mainlogo.png" alt="logo" width="100" height="60" />
	<Box textAlign="center" w="100%" marginTop={8}>
        <Text color="gray.600" fontSize="xl">Willkommen auf meiner Webseite!</Text>
	</Box>

        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button
            onClick={toggleColorMode}
            aria-label={colorMode === 'light' ? 'Moon Icon' : 'Sun Icon'}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Logout />
        </Stack>
      </Flex>
    </Box>
  );
}
