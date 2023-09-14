import { useColorMode, Button } from "@chakra-ui/react";

export function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button m={0} p={0} bg={"transparent"} fontSize={{base: "md", md:"3xl"}}  onClick={toggleColorMode}>
      {colorMode === "light" ? "🌑" : "☀️"}
    </Button>
  );
}
