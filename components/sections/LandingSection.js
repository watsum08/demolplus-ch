import { Box, Heading } from "@chakra-ui/react";
import GlassCard from "../UI/GlassCard";

const LandingSection = () => {
  return (
    <Box
      h="1040px"
      bgImage="img/landingimage.png"
      bgRepeat="no-repeat"
      bgPos="bottom"
      overflowX="hidden"
      pos="relative"
      pt={200}
    >
      <Heading
        w="full"
        as="h1"
        textAlign="center"
        fontSize="92px"
        mt={5}
        fontFamily="'Bebas Neue', cursive"
        letterSpacing="3px"
        color="#F34949"
        textShadow="-1px -1px 0 #641C1C, 1px -1px 0 #641C1C, -1px 1px 0 #641C1C, 1px 1px 0 #641C1C;"
        bg="transparent"
        zIndex={100}
      >
        Réalisez vos projets de démolition
      </Heading>

      <GlassCard gap={6} mt={4} />
    </Box>
  );
};

export default LandingSection;
