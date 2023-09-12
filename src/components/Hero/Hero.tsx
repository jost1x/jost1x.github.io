import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW={"4xl"}>
      <Stack
        as={Box}
        textAlign={"justify"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Hola, Soy <br />
          <Text as={"span"} color={"gray.500"}>
            Charlie Melchiori 👋
          </Text>
        </Heading>
        <Text>
          Soy Ingeniero Civil Electrónico, con una pasión por la informática y
          la tecnología. Mi portafolio refleja mi compromiso con la excelencia y
          la innovación en proyectos. Explora mis habilidades y proyectos para
          conocer más sobre mi trayectoria profesional. ¡Gracias por visitar mi
          sitio web!
        </Text>
      </Stack>
    </Container>
  );
}
