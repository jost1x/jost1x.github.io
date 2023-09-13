import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
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
