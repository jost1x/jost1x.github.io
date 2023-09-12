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
      bg={"gray.700"}
      width={"100%"}
      maxW={"3xl"}
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
          <Heading size="md" color={"white"}>
            {title}
          </Heading>

          <Text py="2" color={"white"}>
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
