import { Flex, Box, Link } from "@chakra-ui/react";
import PageContainer from "./UI/PageContainer";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      <Flex
        bg="#262525"
        h="48px"
        w="full"
        zIndex={300}
        color="#fff"
        fontWeight={300}
        pos="relative"
        fontSize="14px"
      >
        <PageContainer p={{ base: "0 16px", sm: "0 24px", md: "0 32px" }}>
          <Flex
            w="full"
            align="center"
            justify={{ base: "center", md: "flex-end" }}
            bg="transparent"
          >
            Démolplus Sàrl - Site créé par&nbsp;
            <Link href="https://marcmeynet.ch/ ">marcmeynet.ch</Link>
          </Flex>
        </PageContainer>
      </Flex>
    </footer>
  );
};

export default Footer;
