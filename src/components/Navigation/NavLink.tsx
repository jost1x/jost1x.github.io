import { Box } from "@chakra-ui/react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink(props: Props) {
  const { href, children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.900",
      }}
      href={href}
    >
      {children}
    </Box>
  );
}
