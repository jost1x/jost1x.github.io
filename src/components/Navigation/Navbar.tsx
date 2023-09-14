import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Links: Array<LinksWithRef> = [
  {
    label: "Home",
    href: "./#",
  },
  {
    label: "Skills",
    href: "./skills",
  },
  {
    label: "Proyectos",
    href: "./projects",
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box color={useColorModeValue("gray.700", "white")} px={4}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box
          fontWeight="extrabold"
          fontSize={{base: "lg", sm:"2xl", lg:"2xl"}}
          color={useColorModeValue("gray.700", "gray.400")}
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.300", "gray.900"),
            color: useColorModeValue("gray.800", "white"),
          }}
          animation={"3s infinite alternate slidein"}
        >
          {"<Charlie Melchiori />"}
          
        </Box><ThemeSwitcher></ThemeSwitcher>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
          ))}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink href={link.href}>{link.label}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
