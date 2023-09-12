import { VStack, Heading, Box } from "@chakra-ui/react";
import { CardProject } from "../components/Card/CardProject";

import myProjects from "../data/projects.json";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Box py={{ base: 20, md: 12 }}>
        <VStack spacing={2} alignItems={"baseline"}>
          <Heading as="h1" fontSize="2xl" mb={5}>
            Proyectos
          </Heading>
          {myProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            >
              <CardProject {...project} />
            </motion.div>
          ))}
        </VStack>
      </Box>
    </motion.div>
  );
}
