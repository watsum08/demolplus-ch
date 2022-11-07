import { Box, Container } from "@chakra-ui/react";
import LandingSection from "./sections/LandingSection";

const MainContent = () => {
  return (
    <main>
      <LandingSection />
      
      <Container maxW="1600px"></Container>
    </main>
  );
};

export default MainContent;
