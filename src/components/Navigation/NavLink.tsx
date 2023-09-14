import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink(props: Props) {
  const { href, children } = props;

  return (
    <ChakraLink
      as={ReactRouterLink}
      to={href}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.300", "gray.900"),
        color: useColorModeValue("gray.800", "white")
      }}
    >
      {children}
    </ChakraLink>
  );
}
