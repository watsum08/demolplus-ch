import { CloseIcon } from "@chakra-ui/icons";
import {
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";


const ClickableImage = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="none"
        allowPinchZoom
        size="xl"
      >
        <ModalOverlay>
          <ModalContent bg="#444" rounded="lg" pb={4}>
            <ModalHeader
              bg="transparent"
              pt={6}
              fontSize={{ base: "18px", md: "22px" }}
              px={12}
              pb={0}
              color="white"
            >
              {props.noCaption !== true ? props.alt : ""}
            </ModalHeader>
            <CloseIcon
              onClick={onClose}
              pos="absolute"
              top={7}
              right={7}
              color="white"
              bg="transparent"
              _hover={{ cursor: "pointer" }}
            />
            <ModalBody bg="transparent" alignSelf="center">
              <Image
                src={props.imgSrc}
                alt={props.alt}
                w="full"
                h="auto"
                transition="all 0.5s"
                m="auto"
                fallbackSrc="img/spinner.gif"
                bg="transparent"
                p={4}
              />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <AspectRatio
        w="full"
        h={{ base: "280px", sm: "420px", md: "600px", lg: "480px" }}
        ratio={1}
        onClick={onOpen}
        m="auto"
        _hover={{ cursor: "pointer", border: "2px solid #999" }}
      >
        <Image
          src={props.imgSrc}
          onClick={onOpen}
          alt={props.alt}
          h={props.imgH ?? "auto"}
          fallbackSrc="img/spinner.gif"
        />
      </AspectRatio>
    </>
  );
};

export default ClickableImage;
