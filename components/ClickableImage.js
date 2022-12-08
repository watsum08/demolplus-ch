import { CloseIcon } from "@chakra-ui/icons";
import {
  Img,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Spinner,
  Box,
  AspectRatio,
} from "@chakra-ui/react";

import { useState } from "react";

const ClickableImage = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imageDisplayStatus, setImageDisplayStatus] = useState("none");
  const [spinnerDisplayStatus, setSpinnerDisplayStatus] = useState("block");

  const loadImage = () => {
    setImageDisplayStatus("block");
    setSpinnerDisplayStatus("none");
  };

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
              {props.alt}
            </ModalHeader>
            <CloseIcon
              onClick={onClose}
              pos="absolute"
              top={7}
              right={7}
              color="white"
              bg="transparent"
            />
            <ModalBody bg="transparent" alignSelf="center">
              <Spinner
                color="white"
                bg="transparent"
                size="xl"
                my={{ base: 128, md: 256 }}
                display={spinnerDisplayStatus}
              />
              <Img
                src={props.imgSrc}
                alt={props.alt}
                w="full"
                h="auto"
                transition="all 0.5s"
                m="auto"
                display={imageDisplayStatus}
                onLoad={loadImage}
                bg="transparent"
                p={4}
              />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <AspectRatio
        w="full"
        h={{ base: "280px", sm: "420px", md: "600px" }}
        ratio={1}
        onClick={onOpen}
        m="auto"
      >
        <Img
          src={props.imgSrc}
          onClick={onOpen}
          alt={props.alt}
          h={props.imgH ?? "auto"}
        />
      </AspectRatio>
    </>
  );
};

export default ClickableImage;
