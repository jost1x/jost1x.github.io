import { VStack, Heading, Box } from "@chakra-ui/react";
import { CardProject } from "../components/Card/CardProject";

export function Projects() {
  return (
    <Box py={{ base: 20, md: 12 }}>
      <VStack spacing={2} alignItems={"baseline"}>
        <Heading as="h1" fontSize="2xl" mb={5}>
          Proyectos
        </Heading>

        <CardProject></CardProject>
        <CardProject></CardProject>
        <CardProject></CardProject>
      </VStack>
    </Box>
  );
}
