import { Box, Heading, VStack } from "@chakra-ui/react";
import Hero from "../components/Hero/Hero";
import { Timeline } from "../components/Timeline/Timeline";
import { motion } from "framer-motion";

export function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
}
