import LandingSection from "./sections/LandingSection";
import NextSection from "./sections/NextSection";

import { Box } from "@chakra-ui/react";

const MainContent = () => {
  return (
    <main>
      <LandingSection />

      <Box
        bg="#1F2525"
        w={{ base: "fit-content", sm: "full" }}
        outline="2px black"
        zIndex={300}
        pos="relative"
        top={{ base: 825, md: 1040 }}
      >
        <NextSection />
      </Box>
    </main>
  );
};

export default MainContent;
