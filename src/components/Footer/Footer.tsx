'use client'

import {
  Box,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react'

export function Footer() {
  return (
    <Box
      bg={"gray.600"}
      color={"gray.100"}>
      <Container
        as={Stack}
        maxW={'4xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}
        alignItems={"center"}>
        <Text>Made with ❤️ by <b>{"<Charlie Melchiori />"}</b> </Text>
      </Container>
    </Box>
  )
}