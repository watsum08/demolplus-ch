import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";
import GlassCard from "../UI/GlassCard";

const LandingSection = () => {
  return (
    <Box
      w="full"
      h="1040px"
      bgImage="img/landingimage.png"
      bgRepeat="no-repeat"
      bgPos={{
        base: "50% 40%",
        md: "50% 50%",
        xl: "50% 60%",
        "2xl": "50% 50%",
      }}
      bgSize="clamp(600px, 320%, 1920px)"
      overflowX="hidden"
      pos="fixed"
      mt={{ base: 28, sm: 32, md: 44 }}
      zIndex={100}
    >
      <Heading
        w="full"
        as="h1"
        textAlign="center"
        fontSize={{ base: "64px", md: "72px", xl: "92px" }}
        mt={{ base: 6, md: 12 }}
        fontFamily="'Bebas Neue', cursive"
        letterSpacing="4px"
        color="#F34949"
        textShadow="-1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000;"
        bg="transparent"
        zIndex={100}
        lineHeight="64px"
      >
        Réalisez vos projets de démolition
      </Heading>

      <GlassCard gap={{ base: 4, md: 6 }} mt={{ base: 2, sm: 4, md: 16 }} />

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
