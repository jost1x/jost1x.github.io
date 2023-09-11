import {
  CardBody,
  Image,
  Card,
  Heading,
  Text,
  Button,
  CardFooter,
  Stack,
  Flex,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";

export function CardProject() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      bg={"gray.700"}
      width={"100%"}
      maxW={"3xl"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
        m={5}
        rounded={"md"}
        loading="eager"
      />

      <Stack>
        <CardBody>
          <Heading size="md" color={"white"}>
            Proyecto #1
          </Heading>

          <Text py="2" color={"white"}> 
            test... asdasdsa dasd asd asdas da
          </Text>
        </CardBody>

        <CardFooter>
          <Flex alignItems={"left"} minWidth='max-content'>
            <Spacer />
            <ButtonGroup gap='2'>
              <Button variant="solid" colorScheme="blue">
                Más info
              </Button>
            </ButtonGroup>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
}
