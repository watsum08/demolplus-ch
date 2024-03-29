import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Image, Heading, AspectRatio } from "@chakra-ui/react";
import GlassCard from "../UI/GlassCard";

const LandingSection = () => {
  return (
    <Box
      w="full"
      h="auto"
      bg="#ECECEC"
      overflowX="hidden"
      zIndex={100}
      animation="zoomInAnimation 1s forwards 0.5s"
      pt={{ base: "100px", sm: "120px", md: "200px" }}
      pos="relative"
    >
      <Image
        src="img/landingimage.jpg"
        alt="Image de bienvenue"
        draggable={false}
        zIndex={0}
        pos="absolute"
        bottom={0}
      />

      <Heading
        w="full"
        as="h1"
        textAlign="center"
        fontSize={{ base: "60px", md: "72px", xl: "92px" }}
        mt={{ base: "64px", md: "128px", xl: "160px" }}
        fontFamily="'Bebas Neue', cursive"
        letterSpacing={{ base: "4px", md: "5px", xl: "6px" }}
        color="#F34949"
        textShadow="-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000;"
        bg="transparent"
        zIndex={300}
        pos="relative"
        lineHeight={{ base: "60px", md: "72px", xl: "92px" }}
        animation={`moveHeadingUp 1s forwards 0.5s ease-out`}
      >
        Réalisez vos projets de démolition
      </Heading>

      <GlassCard gap={{ base: 3, md: 6 }} mt={{ base: 3, sm: 4, md: 16 }} />

      <Box w="32px" m="auto" bg="transparent">
        <ChevronDownIcon
          boxSize="36px"
          alignContent="center"
          bg="transparent"
          color="#fff"
          animation="slideDownAnimation 1.5s infinite 0.5s"
        />
        <ChevronDownIcon
          boxSize="36px"
          mt={-6}
          alignContent="center"
          bg="transparent"
          color="#fff"
          animation="slideDownAnimation 1.5s infinite 1s"
        />
        <ChevronDownIcon
          boxSize="36px"
          mt={-7}
          alignContent="center"
          bg="transparent"
          color="#fff"
          animation="slideDownAnimation 1.5s infinite 1.5s"
        />
      </Box>
    </Box>
  );
};

export default LandingSection;
