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
    <Box bg="transparent" w="fit-content" m="auto" mb={{ base: 12, lg: 0 }}>
      <Image
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
      />

      <Flex bg="transparent" justify="space-between" mt={4} px={{ base: 0, sm: 8, md: 4}}>
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
