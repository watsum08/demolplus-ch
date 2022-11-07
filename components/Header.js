import { Box, Flex, Image } from "@chakra-ui/react";
import ContactBtn from "./UI/ContactBtn";

const Header = () => {
  return (
    <header>
      <Box pos="fixed" zIndex={1000} w="full">
        <Flex align="center" justify="center" gap="60px" p={7}>
          <ContactBtn name="Appeler" img="img/CallBtn.svg" />

          <Image src="img/logo.png" alt="Logo Démolplus Sàrl" w="260px" />

          <ContactBtn name="Email" img="img/MailBtn.svg" />
        </Flex>

        <Box w="100%" h="2px" bgColor="black" />
      </Box>
    </header>
  );
};

export default Header;
