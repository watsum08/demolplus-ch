import { Box, Flex, Image } from "@chakra-ui/react";
import ContactBtn from "./UI/ContactBtn";

const Header = () => {
  return (
    <Box pos="fixed" zIndex={500} w="full" bg="transparent">
      <header style={{ background: "transparent"}}>
        <Flex
          align="center"
          justify="center"
          gap={{ base: "24px", md: "54px" }}
          p={{ base: 4, md: 7 }}
          bg="rgba(235,235,235,0.93)"
        >
          <ContactBtn name="Appeler" img="img/CallBtn.svg" />

          <Image
            src="img/logo.png"
            alt="Logo Démolplus Sàrl"
            w={{ base: "160px", md: "260px" }}
            bg="transparent"
          />

          <ContactBtn name="Email" img="img/MailBtn.svg" />
        </Flex>

        <Box w="100%" h="2px" bgColor="black" />
      </header>
    </Box>
  );
};

export default Header;
