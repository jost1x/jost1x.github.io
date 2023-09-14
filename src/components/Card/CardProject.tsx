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
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { IndividualTag } from "./Tags";

interface Props {
  title: string;
  desc: string;
  tags: Array<TagsProps>;
  img: string;
}

export function CardProject(props: Props) {
  const { title, desc, tags, img } = props;

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      bg={useColorModeValue("gray.100", "gray.700")}
      width={"100%"}
      maxW={"3xl"}
      mb={"5px"}
      color={useColorModeValue("gray.800", "white")}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={img}
        alt="Caffe Latte"
        m={5}
        rounded={"md"}
        loading="eager"
      />

      <Stack>
        <CardBody>
          <Heading size="md">
            {title}
          </Heading>

          <Text py="2">
            {desc}
          </Text>

          <Box>
            {tags.map((tag) => (
              <IndividualTag key={tag.label}>{tag.label}</IndividualTag>
            ))}
          </Box>
        </CardBody>

        <CardFooter display={"none"}>
          <Flex alignItems={"left"} minWidth="max-content">
            <Spacer />
            <ButtonGroup gap="2">
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
