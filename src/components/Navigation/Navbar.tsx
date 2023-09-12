import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";

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
    <Box color="white" px={4}>
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
          fontSize="2xl"
          color="gray.400"
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: "gray.900",
            color: "white",
          }}
          animation={"3s infinite alternate slidein"}
        >
          {"<Charlie Melchiori />"}
        </Box>
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
