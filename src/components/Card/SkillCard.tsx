import { Card, CardHeader, CardBody, Heading, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
  icon: any;
}

export function SkillCard(props: Props) {
  const { text, icon } = props;

  const iconStyles = {
    margin: "auto",
    height: "50px",
    "aspect-ratio": "1/2",
    fill: "white",
  };

  return (
    <Card size={"sm"} bg={"gray.700"} color={"white"}>
      <CardHeader
        textAlign={"center"}
        alignItems={"center"}
        alignContent={"center"}
      >
        {React.cloneElement(icon, { style: iconStyles })}
      </CardHeader>
      <CardBody>
        <Heading
          as="h3"
          fontSize="md"
          mb={5}
          mt={-5}
          textAlign={"center"}
          marginBottom={0}
        >
          {text}
        </Heading>
      </CardBody>
    </Card>
  );
}

export function SkillCardV2(props: Props) {
  const { text, icon } = props;

  const iconStyles = {
    margin: "auto",
    height: "40px",
    "aspect-ratio": "1/2",
    fill: "white",
  };

  return (
    <Card size={"sm"} bg={"gray.700"} color={"white"} p={0}>
      <HStack>
        <CardHeader
          textAlign={"center"}
          alignItems={"center"}
          alignContent={"center"}
        >
          {React.cloneElement(icon, { style: iconStyles })}
        </CardHeader>
        <CardBody p={1}>
          <Heading
            as="h3"
            fontSize="md"
            textAlign={"center"}
            margin={0}
            padding={0}
          >
            {text}
          </Heading>
        </CardBody>
      </HStack>
    </Card>
  );
}
