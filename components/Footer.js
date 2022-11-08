import { Flex, Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      <Flex
        bg="#1F2525"
        h="48px"
        w="full"
        zIndex={300}
        color="#fff"
        fontWeight={300}
        pos="relative"
        top={{ base: 824, md: 1040 }}
      >
        <Flex
          w="full"
          align="center"
          justify={{ base: "center", md: "flex-end" }}
          bg="transparent"
        >
          Démolplus Sàrl - Site créé par&nbsp;
          <Link href="https://marcmeynet.ch/ ">marcmeynet.ch</Link>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
