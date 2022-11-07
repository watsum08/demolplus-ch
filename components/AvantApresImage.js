import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
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

  return (
    <Box bg="transparent" w="fit-content">
      <Image src={image} alt={props.name} w="360px" h="auto" />

      <Flex bg="transparent" justify="center" gap={16} mt={4}>
        <Button
          color={image === image1 ? "#fff" : "#727272"}
          bg="transparent"
          fontSize="22px"
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
          fontSize="22px"
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
  );
};

export default AvantApresImage;
