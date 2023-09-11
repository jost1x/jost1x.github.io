import { Box, Container, Stack, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" bg={"gray.600"} color={"gray.100"} position={"absolute"} width={"100%"} bottom={0} right={0}>
      <Container
        as={Stack}
        maxW={"4xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center" }}
        align={{ base: "center", md: "center" }}
        alignItems={"center"}
      >
        <Text>
          Made with ❤️ by <b>{"<Charlie Melchiori />"}</b>{" "}
        </Text>
      </Container>
    </Box>
  );
}
