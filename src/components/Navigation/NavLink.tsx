import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

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
        bg: "gray.900",
      }}
    >
      {children}
    </ChakraLink>
  );
}
