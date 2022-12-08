import { AspectRatio, Image } from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import {
  Img,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";

import { useState } from "react";

const ClickableVideo = (props) => {
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
              {props.noCaption !== true ? props.name : ""}
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
              <AspectRatio
                w={{ base: "270px", sm: "300px", md: "320px" }}
                my={{ base: 0, sm: 1, md: 2, lg: 4 }}
                h="full"
                ratio={0.525}
              >
                <video
                  autoPlay="autoplay"
                  loop
                  controls
                  poster="img/spinner.gif"
                >
                  <source
                    src={props.videoSrc}
                    type={props.videoType ?? "video/mp4"}
                  />
                </video>
              </AspectRatio>
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
        <video autoPlay="autoplay" loop muted poster="img/spinner.gif">
          <source src={props.videoSrc} type={props.videoType ?? "video/mp4"} />
        </video>
      </AspectRatio>
    </>
  );
};

export default ClickableVideo;
