import { Box, Heading, VStack } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import { Timeline } from "../components/Timeline/Timeline";

export function Index() {
  return (
    <>
      <Hero />
      <Box py={{ base: 20, md: 12 }}>
        <VStack spacing={2} alignItems={"baseline"}>
          <Heading as="h1" fontSize="2xl">
            Experiencia Laboral
          </Heading>
          <Timeline />

        </VStack>
      </Box>
    </>
  );
}
