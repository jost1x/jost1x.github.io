import { ExternalLinkIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  useDisclosure,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { decode } from "utf8";

interface Props {
  full_company: string;
  content: string;
  url: string;
}

export function ModalExperience(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { full_company, content, url } = props;

  return (
    <>
      <Box as={"button"} onClick={onOpen}>
        <InfoIcon boxSize={"4"} />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={4} color={useColorModeValue("gray.700", "white")} maxW={"2xl"}>
          <ModalHeader>
            {full_company}{" "}
            <Link href={url} isExternal={true}>
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody m={4}>
            <ReactMarkdown
              children={decode(atob(content))}
              disallowedElements={["code"]}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
