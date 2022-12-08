import { Box, Flex, Img } from "@chakra-ui/react";
import ContactBtn from "./UI/ContactBtn";

const Header = () => {
  return (
    <Box zIndex={500} w="full" bg="transparent" pos="fixed">
      <header style={{ background: "transparent"}}>
        <Flex
          align="center"
          justify="center"
          gap={{ base: "24px", md: "54px" }}
          p={{ base: 2, md: 7 }}
          bg="rgba(235,235,235,0.93)"
        >
          <ContactBtn name="Appeler" img="img/CallBtn.svg" href="tel:0763100692" />

          <Img
            src="img/logo.png"
            alt="Logo Démolplus Sàrl"
            w={{ base: "160px", md: "260px" }}
            bg="transparent"
          />

          <ContactBtn name="Email" img="img/MailBtn.svg" href="mailto:fornaymarc92@gmail.com"/>
        </Flex>

        <Box w="100%" h="2px" bgColor="black" />
      </header>
    </Box>
  );
};

export default Header;
