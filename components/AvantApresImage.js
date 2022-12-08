import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Img,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";

const AvantApresImage = (props) => {
  const image1 = props.avant;
  const image2 = props.apres;
  const [image, setImage] = useState(image1);

  const loadImage1 = () => {
    setImage(image1);
  };

  const loadImage2 = () => {
    setImage(image2);
  };

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
        <ModalOverlay />
        <ModalContent bg="#1F2525" rounded="none" pb={4}>
          <ModalHeader
            bg="transparent"
            color="white"
            pt={6}
            fontSize={{ base: "18px", md: "22px" }}
          >
            {props.name}
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
              src={image}
              alt={props.name}
              w="full"
              h="auto"
              transition="all 0.5s"
              m="auto"
              display={imageDisplayStatus}
              onLoad={loadImage}
              bg="transparent"
              p={4}
            />
            <Commands
              image={image}
              image1={image1}
              image2={image2}
              loadImage1={loadImage1}
              loadImage2={loadImage2}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box bg="transparent" w="fit-content" m="auto" mb={{ base: 12, lg: 0 }}>
        <Img
          src={image}
          alt={props.name}
          w="full"
          h="auto"
          transition="all 0.5s"
          m="auto"
          onClick={onOpen}
          _hover={{ cursor: "pointer", border: "2px solid #999" }}
        />
        <Commands
          image={image}
          image1={image1}
          image2={image2}
          loadImage1={loadImage1}
          loadImage2={loadImage2}
        />
      </Box>
    </>
  );
};

const Commands = (props) => {
  return (
    <Flex
      bg="transparent"
      justify="space-evenly"
      mt={{ base: 2, md: 4 }}
      px={{ base: 0, sm: 8, md: 4 }}
    >
      <Button
        color={props.image === props.image1 ? "#fff" : "#727272"}
        bg="transparent"
        fontSize={{ base: "18px", md: "22px" }}
        letterSpacing="2px"
        onClick={props.loadImage1}
        rounded="none"
        border="none"
        outline="none"
        _hover={{ bg: "#535959" }}
        _active={{ outline: "none", border: "none" }}
        _focus={{ outline: "none", border: "none" }}
      >
        Avant
      </Button>
      <Button
        color={props.image === props.image2 ? "#fff" : "#727272"}
        bg="transparent"
        fontSize={{ base: "18px", md: "22px" }}
        letterSpacing="2px"
        onClick={props.loadImage2}
        rounded="none"
        border="none"
        outline="none"
        _hover={{ bg: "#535959" }}
        _active={{ outline: "none", border: "none" }}
        _focus={{ outline: "none", border: "none" }}
      >
        Après
      </Button>
    </Flex>
  );
};

export default AvantApresImage;
