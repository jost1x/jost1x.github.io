import { VStack, Heading, Box, Wrap, WrapItem } from "@chakra-ui/react";
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
          <Box margin={"auto"}>
            <Wrap margin={"auto"} justify={"center"}>
              {Object.keys(_skills).map((skillName, index) => (
                <motion.div
                key={skillName}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: index * 0.02 }}
              >
                <WrapItem>
                  <SkillCard
                    key={skillName + "-1"}
                    text={skillName}
                    icon={_skills[skillName]}
                  />
                </WrapItem>
                </motion.div>
              ))}
            </Wrap>
          </Box>
        </VStack>
      </Box>
    </motion.div>
  );
}
