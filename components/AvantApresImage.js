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
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box bg="transparent" w="fit-content" m="auto" mb={{ base: 12, lg: 0 }}>
        <Img
          src={image}
          alt={props.name}
          w={{
            base: "240px",
            sm: "360px",
            md: "400px",
            lg: "260px",
            xl: "350px",
          }}
          h="auto"
          transition="all 0.5s"
          m="auto"
          onClick={onOpen}
          _hover={{ cursor: "pointer" }}
        />

        <Flex
          bg="transparent"
          justify="space-between"
          mt={{ base: 2, md: 4 }}
          px={{ base: 2, sm: 8, md: 4 }}
        >
          <Button
            color={image === image1 ? "#fff" : "#727272"}
            bg="transparent"
            fontSize={{ base: "18px", md: "22px" }}
            letterSpacing="2px"
            onClick={loadImage1}
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
            color={image === image2 ? "#fff" : "#727272"}
            bg="transparent"
            fontSize={{ base: "18px", md: "22px" }}
            letterSpacing="2px"
            onClick={loadImage2}
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
      </Box>
    </>
  );
};

export default AvantApresImage;
