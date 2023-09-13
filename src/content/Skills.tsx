import { VStack, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SkillCard } from "../components/Card/SkillCard";
import { _skills } from "./SkillList";

export function Skills() {
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
            Habilidades
          </Heading>

          <Box>
            <SimpleGrid
              spacing="8px"
              display="flex"
              flexWrap="wrap"
              justifyContent="center" // Controla la distribución horizontal
              alignItems="flex-start" // Controla la alineación vertical
            >
              {Object.keys(_skills).map((skillName, index) => (
                <motion.div
                  style={{ flex: "1", minWidth: "120px" }}
                  key={skillName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, delay: index * 0.02 }}
                >
                  <Box height={"100px"} flex={1} style={{ minWidth: "120px" }}>
                    <SkillCard
                      key={skillName + "-1"}
                      text={skillName}
                      icon={_skills[skillName]}
                    />
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
    </motion.div>
  );
}
