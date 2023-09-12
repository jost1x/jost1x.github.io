import {
  GithubFilled,
  GitlabFilled,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons";
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { ContactIcon } from "./ContactIcon";

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
        <Box alignItems={"center"} textAlign={"center"} width={"100%"}>
          <Card maxW={"sm"} mx={"auto"} bg={"gray.700"}>
            <CardBody fontSize={"4xl"} color={"white"}>
              <ul style={{ display: "inline-flex", listStyleType: "none" }}>
                <ContactIcon href="https://www.linkedin.com/in/ch-melchiori/">
                  <LinkedinFilled />
                </ContactIcon>
                <ContactIcon href="https://github.com/jost1x">
                  <GithubFilled />
                </ContactIcon>
                <ContactIcon href="https://gitlab.com/jost1x">
                  <GitlabFilled />
                </ContactIcon>
                <ContactIcon href="mailto:ch.mel95cl@gmail.com">
                  <MailFilled />
                </ContactIcon>
              </ul>
            </CardBody>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
}
