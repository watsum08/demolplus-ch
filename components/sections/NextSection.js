import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

import PageContainer from "../UI/PageContainer";
import SectionLabel from "../UI/SectionLabel";
import ContactForm from "../ContactForm";
import AAImages from "../AAImages";

const NextSection = () => {
  return (
    <PageContainer>
      <ContentSection mt={4}>
        <SectionLabel text="Nos réalisations" />
        <Box
          bg="transparent"
          color="#fff"
          fontSize={{ base: "20px", md: "22px" }}
          fontWeight={300}
          mt={10}
          textAlign={{ base: "center", md: "left" }}
          ml={{ base: 0, md: 6 }}
        >
          Démolition d'une salle de bain
        </Box>
        <AAImages />
      </ContentSection>

      <ContentSection last>
        <SectionLabel text="Contactez-nous" />
        <Box bg="transparent" w={{ base: "100%", md: "75%" }} m="auto" mt={10}>
          <Heading
            as="h3"
            bg="transparent"
            color="#fff"
            fontWeight={600}
            fontSize={{ base: "36px", md: "48px" }}
          >
            Fornay Marc
          </Heading>
          <address
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              marginTop: "24px",
            }}
          >
            <Text
              fontStyle="normal"
              fontWeight={300}
              fontSize={{ base: "20px", md: "24px" }}
              bg="transparent"
            >
              Case postale 56
              <br />
              1897 Le Bouveret
              <br />
              076 310 06 92
              <br />
              fornaymarc92@gmail.com
            </Text>
          </address>
          <ContactForm />
        </Box>
      </ContentSection>
    </PageContainer>
  );
};

const ContentSection = (props) => {
  return (
    <Box
      bg="transparent"
      border="1px solid #bbb"
      w="full"
      h="auto"
      p={8}
      px={{ base: 6, sm: 8, md: 12 }}
      mb={props.last ? 0 : 12}
      mt={props.mt ?? 0}
      transition="1s all"
    >
      {props.children}
    </Box>
  );
};

export default NextSection;
